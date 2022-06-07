import React, { useState } from "react";
import './ExpenseList.css';
import Card from "../UI/Card";
import './ExpenseItems.css';
import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpenseItems(props) {
  const [selectedYearFilter, setSelectedYearFilter] = useState('2020');

  const getSelectedYear = (selectedYear) => {
    setSelectedYearFilter(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYearFilter;
  })

    return (
      <Card className="expenses">
        <ExpensesFilter 
          selected={selectedYearFilter} 
          onFilter={getSelectedYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    )
}

export default ExpenseItems;