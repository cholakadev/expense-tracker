import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const newExpenseDataHandler = (expenseData) => {
        const newExpense = {
            ...expenseData,
            id: Math.random().toString()
        }

        props.onAddNewExpense(newExpense);
        setIsEditing(false);
    }

    const isEditingHandler = () => {
        setIsEditing(!isEditing);
    }

    if (!isEditing) {
        return <button onClick={isEditingHandler}>Add new Expense</button>
    }

    return ( 
    <div className='new-expense'>
        <ExpenseForm 
            onSubmitNewExpense={newExpenseDataHandler} 
            onCancelEditing={isEditingHandler} />
    </div>
    )
}

export default NewExpense;