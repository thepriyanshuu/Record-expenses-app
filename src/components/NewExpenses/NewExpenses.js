import React from "react";
import './NewExpenses.css'
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {

    const saveExpenseDataHandler = (receivedExpenseData) => {
        const expenseData = {...receivedExpenseData}

        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpenses;