import { useReducer, createContext, Dispatch, ReactNode } from "react";
import {
    BudgetActions,
    budgetReducer,
    BudgetState,
    initialState,
} from "../reducers/budgetReducer";

type BudgetContextProps = {
    state: BudgetState;
    dispatch: Dispatch<BudgetActions>;
};

type BudgetProdiverProps = {
    children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProdiverProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </BudgetContext.Provider>
    );
};
