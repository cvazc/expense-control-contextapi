import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react";
import {
    BudgetActions,
    budgetReducer,
    BudgetState,
    initialState,
} from "../reducers/budgetReducer";

type BudgetContextProps = {
    state: BudgetState;
    dispatch: Dispatch<BudgetActions>;
    totalExpenses: number;
    remaininBudget: number;
};

type BudgetProdiverProps = {
    children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProdiverProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);

    const totalExpenses = useMemo(
        () =>
            state.expenses.reduce(
                (total, expense) => expense.amount + total,
                0
            ),
        [state.expenses]
    )

    const remaininBudget = state.budget - totalExpenses

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                remaininBudget,
            }}
        >
            {children}
        </BudgetContext.Provider>
    );
};
