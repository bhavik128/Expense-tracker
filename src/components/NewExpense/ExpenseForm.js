import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {
  const [currExpense, setCurrExpense] = useState({
    id: `${props.length}`,
    title: '',
    amount: '',
    date: ''
  });
  const [showForm, setShowForm] = useState('none');

  function handleChange(event) {
    const { name, value } = event.target;
    currExpense[name] = value;
    setCurrExpense({ ...currExpense });
  }

  function handleShowForm() {
    if (showForm === 'none') {
      setShowForm('block');
    } else {
      setShowForm('none');
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    if (
      currExpense['date'].length === 0 ||
      currExpense['title'].length === 0 ||
      currExpense['amount'].length === 0
    ) {
      return;
    }

    currExpense['amount'] = +currExpense['amount'];
    currExpense['date'] = new Date(currExpense['date']);

    const expenseData = { ...currExpense };
    props.setExpenses(prevExpenses => {
      prevExpenses.push(expenseData);
      return [...prevExpenses];
    });

    setCurrExpense({
      title: '',
      amount: '',
      date: ''
    });
  }

  return (
    <div>
      <form style={{ display: `${showForm}` }} onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={currExpense.title}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              onChange={handleChange}
              min="0.01"
              step="0.01"
              name="amount"
              value={currExpense.amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="Date"
              onChange={handleChange}
              min="2019-01-01"
              max="2022-12-31"
              name="date"
              value={currExpense.date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={handleShowForm}>Cancel</button>
          <button type="submit" onClick={handleShowForm}>
            Add Expense
          </button>
        </div>
      </form>
      <button
        style={{ display: showForm === 'block' ? 'none' : 'inline' }}
        onClick={handleShowForm}
      >
        Add New Expense
      </button>
    </div>
  );
}

export default ExpenseForm;
