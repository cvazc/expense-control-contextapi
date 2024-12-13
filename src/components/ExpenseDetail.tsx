import { useMemo } from "react"
import { categories } from "../data/categories"
import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"

type ExpenseDetailProps = {
    expense: Expense
}

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
    const categoryInformation = useMemo(
        () => categories.filter((cat) => cat.id === expense.category)[0],
        [expense]
    )
    
    return (
        <div className="bg-white shadow-lg w-full border-b border-gray-200 flex gap-5 items-center">
            <div className="">
                <img
                    src={`/icono_${categoryInformation.icon}.svg`}
                    alt="Icono Gasto"
                    className="w-20"
                />
            </div>
            <div className="flex-1 space-y-2">
                <p className="text-sm font-bold uppercase text-slate-500">
                    {categoryInformation.name}
                </p>
                <p>{expense.expenseName}</p>
                <p className="text-slate-600 text-sm">
                    {formatDate(expense.date!.toString())}
                </p>
            </div>
            <AmountDisplay amount={expense.amount} />
        </div>
    )
}
