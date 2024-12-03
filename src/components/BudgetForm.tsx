import { useState, ChangeEvent, useMemo, FormEvent } from "react";

export default function BudgetForm() {
    const [budget, setBudget] = useState(0);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber);
    };

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0;
    }, [budget]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('agregando')
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <label
                    className="text-4xl text-blue-600 font-bold text-center"
                    htmlFor="budget"
                >
                    Definir Presupuesto
                </label>
                <input
                    id="budget"
                    type="number"
                    className="w-full bg-white border-gray-200 p-2"
                    placeholder="Define tu presupuesto"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>

            <input
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40"
                type="submit"
                value="Definir Presupuesto"
                disabled={isValid}
            />
        </form>
    );
}
