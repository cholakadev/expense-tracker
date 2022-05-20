import ExpenseItem from "./ExpenseItem";
import './ExpenseItems.css';

function ExpenseItems(props) {
    return (
        <div className="expenses">
        <ExpenseItem 
          title={props.expenses[0].title} 
          price={props.expenses[0].amount} 
          date={props.expenses[0].date}>
        </ExpenseItem>
        <ExpenseItem 
          title={props.expenses[1].title} 
          price={props.expenses[1].amount} 
          date={props.expenses[1].date}>
        </ExpenseItem>
        <ExpenseItem 
          title={props.expenses[2].title} 
          price={props.expenses[2].amount} 
          date={props.expenses[2].date}>
        </ExpenseItem>
        <ExpenseItem 
          title={props.expenses[3].title} 
          price={props.expenses[3].amount} 
          date={props.expenses[3].date}>
        </ExpenseItem>
      </div>
    )
}

export default ExpenseItems;