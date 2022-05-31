import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './ExpenseItems.css';
import ExpensesFilter from "../FilterExpenses/ExpensesFilter";

function ExpenseItems(props) {
  const [selectedYearFilter, setSelectedYearFilter] = useState('2020');

  const getSelectedYear = (selectedYear) => {
    setSelectedYearFilter(selectedYear);
  }

    return (
        <Card className="expenses">
          <ExpensesFilter 
            selected={selectedYearFilter} 
            onFilter={getSelectedYear} />
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
      </Card>
    )
}

export default ExpenseItems;