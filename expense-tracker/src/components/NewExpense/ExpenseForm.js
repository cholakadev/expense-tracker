import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = event => {
        const titleValue = event.target.value;
        setEnteredTitle = titleValue;
    }

    const amountChangeHandler = event => {
        const amountValue = event.target.value;
        setEnteredAmount = amountValue;
    }

    const dateChangeHandler = event => {
        const dateValue = event.target.value;
        setEnteredDate = dateValue;
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min="0.01" 
                        onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date'
                        min="2019-01-01" 
                        max="2022-12-31" 
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;