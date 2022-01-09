import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const expenses = props.expenses;

  const filterChangeHandler = event => {
    console.log("filterChangeHandler: ", event.target.value);
  };

  return (
    <div>
      <ExpensesFilter onFilterChange={filterChangeHandler} />

      <Card className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
