import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense, onEditExpense, onClearExpenses }) {
  return (
    <div className="expense-list">
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDeleteExpense={onDeleteExpense}
          onEditExpense={onEditExpense}
        />
      ))}

      {expenses.length > 0 && (
        <button className="btn-clear" onClick={onClearExpenses}>
          목록 지우기
        </button>
      )}
    </div>
  );
}

export default ExpenseList;
