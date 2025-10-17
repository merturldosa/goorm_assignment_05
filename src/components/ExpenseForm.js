import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense, showAlert }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount) {
      showAlert(true, 'danger', '지출 항목과 비용을 모두 입력해주세요.');
      return;
    }

    if (parseInt(amount) <= 0) {
      showAlert(true, 'danger', '비용은 0보다 커야 합니다.');
      return;
    }

    onAddExpense({ name, amount });
    setName('');
    setAmount('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>지출 항목</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label>비용</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="1200"
          />
        </div>
      </div>

      <button type="submit" className="btn-submit">
        제출
      </button>
    </form>
  );
}

export default ExpenseForm;
