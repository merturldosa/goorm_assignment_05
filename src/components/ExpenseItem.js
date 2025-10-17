import React, { useState } from 'react';
import './ExpenseItem.css';

function ExpenseItem({ expense, onDeleteExpense, onEditExpense }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(expense.name);
  const [editAmount, setEditAmount] = useState(expense.amount);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditExpense(expense.id, editName, editAmount);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(expense.name);
    setEditAmount(expense.amount);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteExpense(expense.id);
  };

  if (isEditing) {
    return (
      <div className="expense-item editing">
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className="edit-input"
        />
        <input
          type="number"
          value={editAmount}
          onChange={(e) => setEditAmount(e.target.value)}
          className="edit-input"
        />
        <div className="btn-group">
          <button onClick={handleSave} className="btn-save">저장</button>
          <button onClick={handleCancel} className="btn-cancel">취소</button>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-item">
      <div className="expense-info">
        <span className="expense-name">{expense.name}</span>
        <span className="expense-amount">{expense.amount}</span>
      </div>
      <div className="btn-group">
        <button onClick={handleEdit} className="btn-edit">✏️</button>
        <button onClick={handleDelete} className="btn-delete">🗑️</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
