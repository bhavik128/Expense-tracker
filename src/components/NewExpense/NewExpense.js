import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  return (
    <div className="new-expense">
      <ExpenseForm length={props.length} setExpenses={props.setExpenses} />
    </div>
  );
};
export default NewExpense;
