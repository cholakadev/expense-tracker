import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const newExpenseDataHandler = (expenseData) => {
        const newExpense = {
            ...expenseData,
            id: Math.random().toString()
        }

        props.onAddNewExpense(newExpense);
    }

    return ( 
    <div className='new-expense'>
        <ExpenseForm onSubmitNewExpense={newExpenseDataHandler} />
    </div>
    )
}

export default NewExpense;