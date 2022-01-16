import React, { useState } from "react";


import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  console.log("filteredYear: ", filteredYear);

  const filterChangeHandler = (event) => {
    setFilteredYear(event.target.value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        filteredYear={filteredYear}
      />

      <ExpensesList expenses={props.expenses} filteredYear={filteredYear} />
    </Card>
  );
}

export default Expenses;
