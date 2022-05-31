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
            {props.expenses.map(x => 
              <ExpenseItem 
                title={x.title} 
                price={x.amount} 
                date={x.date} />)}
      </Card>
    )
}

export default ExpenseItems;