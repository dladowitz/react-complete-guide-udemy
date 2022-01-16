import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  let displayedExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === props.filteredYear;
  });

  let expensesContent;

  if (displayedExpenses.length > 0) {
    expensesContent = displayedExpenses.map((expense) => {
      return <ul key={expense.id} className="expenses-list">
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      </ul>;
    });
  } else {
    return <p className="expenses-list__fallback">No expenses found</p>
  }

  return <div>{expensesContent}</div>;
};

export default ExpensesList;
