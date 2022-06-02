import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
      if (props.filteredExpenses.length === 0){
          return (
            <h2 className='expenses-list__fallback'>No expenses found for the selected year.</h2>
          )
      }

      return (
          <ul className='expenses-list'>
              {props.filteredExpenses
                .map(expense => 
                <ExpenseItem 
                title={expense.title} 
                price={expense.amount} 
                date={expense.date} />)}
          </ul>
      )    
}

export default ExpensesList;