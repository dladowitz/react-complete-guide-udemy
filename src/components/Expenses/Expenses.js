import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";


function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2021")
  console.log("filteredYear: ", filteredYear);

  const filterChangeHandler = (event) => {
    setFilteredYear(event.target.value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} filteredYear={filteredYear} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
