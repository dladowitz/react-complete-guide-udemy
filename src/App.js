import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App() {
  const initialExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [counter, setCounter] = useState(5);

  const newExpenseHandler = (expense) => {
    console.log("Handling new expense: ", expense);

    setExpenses((prevState) => {
      const newExpensesState = [
        ...prevState,
        {
          id: `e${counter}`,
          title: expense.title,
          amount: Number(expense.amount),
          date: new Date(expense.date),
        },
      ];
      console.log("newExpensesState: ", newExpensesState);
      return newExpensesState;
    });

    setCounter((prevState) => {
      return prevState + 1;
    });
  };

  console.log("Expenses: ", expenses);
  console.log("Counter: ", counter);

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
