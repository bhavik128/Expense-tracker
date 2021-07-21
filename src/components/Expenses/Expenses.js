import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpensesChart expenses={props.expenses} />
      <ExpenseFilter setFilterYear={props.setFilterYear} />
      <ExpensesList expenses={props.expenses} />
    </Card>
  );
}

export default Expenses;
