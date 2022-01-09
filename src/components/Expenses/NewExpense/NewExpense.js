import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={props.onNewExpense} />
    </div>
  )
}

export default NewExpense;