import React, { useState} from 'react';
import "./ExpenseForm.css";


const ExpenseForm = (props) => {
  const intialExpenseState = {title: "", amount: "", date: ""}
  const [expense, setExpense] = useState(intialExpenseState);
  const [addNewButtonClicked, setAddNewButtonClicked] = useState(false);
  console.log("addNewButtonClicked: ", addNewButtonClicked);
  console.log("expense: ", expense);

  const titleHandler = (event) => {
    const title = event.target.value;
    console.log("title: ", title);
    setExpense((prevState) => {
      return { ...prevState, title: title}
    })
  }

  const amountHandler = (event) => {
    const amount = event.target.value
    console.log("amount: ", amount);
    setExpense((prevState) => {
      return { ...prevState, amount: amount }
    })
  }

  const dateHandler = (event) => {
    const date = event.target.value;
    console.log("date: ", date);
    setExpense((prevState) => {
      return { ...prevState, date }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Submitting form with expense: ", expense);

    props.onNewExpense(expense);
    
    console.log("Reseting expense");
    setExpense(intialExpenseState);
  }

  const addNewExpenseHandler = () => {
    console.log("Displaying add new expense form");
    setAddNewButtonClicked(true);
  }

  function cancelationHandler(){
    console.log("Canceling add new expense");
    setAddNewButtonClicked(false);
  }

  let displayedContent; 

  if (!addNewButtonClicked) {
    displayedContent = <div><button onClick={addNewExpenseHandler}>Add New Expense</button></div>
  } else {
    displayedContent = <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} placeholder="Cat Washing" value={expense.title} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountHandler} min="0.01" step="0.01" placeholder="10.00" value={expense.amount}/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="Date" onChange={dateHandler} min="2019-01-01" max="2023-01-01" value={expense.date} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={cancelationHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  }

  return (
    <div>{displayedContent}</div>
  );
};

export default ExpenseForm;
