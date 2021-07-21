import './components/Expenses/Expenses.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
function App() {
  const [expenses, setExpenses] = useState([]);
  const [filterYear, setFilterYear] = useState(2020);

  return (
    <div>
      <NewExpense length={expenses.length} setExpenses={setExpenses} />
      <Expenses
        setFilterYear={setFilterYear}
        expenses={expenses.filter(e => {
          return parseInt(e.date.getFullYear()) === filterYear;
        })}
      />
    </div>
  );
}

export default App;
