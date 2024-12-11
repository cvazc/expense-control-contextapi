import { useState } from "react"
import type { DraftExpense, Value } from "../types"
import { categories } from "../data/categories"
import DatePicker from "react-date-picker"
import "react-calendar/dist/Calendar.css"
import "react-date-picker/dist/DatePicker.css"

export default function ExpenseForm() {
    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName: "",
        category: "",
        date: new Date(),
    })

    const handleChangeDate = (value: Value) => {
        setExpense({
            ...expense,
            date: value,
        })
    }

    return (
        <form className="space-y-5">
            <legend className="upperacase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
                Nuevo Gasto
            </legend>

            <div className="flex flex-col">
                <label htmlFor="expenseName" className="text-xl">
                    Nombre Gasto:
                </label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Agrega el nombre del gasto"
                    className="bg-slate-100 p-2"
                    name="expenseName"
                    value={expense.expenseName}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="amount" className="text-xl">
                    Cantidad:
                </label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Agrega la cantidad del gasto ej. 300"
                    className="bg-slate-100 p-2"
                    name="amount"
                    value={expense.amount}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="categorie" className="text-xl">
                    Categoria:
                </label>
                <select
                    id="categorie"
                    className="bg-slate-100 p-2"
                    name="categorie"
                    value={expense.category}
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col">
                <label htmlFor="amount" className="text-xl">
                    Fecha Gasto:
                </label>
                <DatePicker
                    className="bg-slate-100 p-2 border-0"
                    value={expense.date}
                    onChange={handleChangeDate}
                />
            </div>

            <input
                type="submit"
                className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                value="Registrar Gasto"
            />
        </form>
    )
}
