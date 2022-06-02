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

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYearFilter;
  })

  let expensesContent = <p>No expenses found for the selected year.</p>;

  if (filteredExpenses.length > 0){
    expensesContent = filteredExpenses
                        .map(expense => 
                        <ExpenseItem 
                          title={expense.title} 
                          price={expense.amount} 
                          date={expense.date} />);
  }
  

    return (
        <Card className="expenses">
          <ExpensesFilter 
            selected={selectedYearFilter} 
            onFilter={getSelectedYear} />
            {expensesContent}
      </Card>
    )
}

export default ExpenseItems;