import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: '', text: '' });

  // 알림 표시
  const showAlert = (show = false, type = '', text = '') => {
    setAlert({ show, type, text });
  };

  // 지출 추가
  const handleAddExpense = (expense) => {
    const newExpense = {
      id: Date.now(),
      ...expense
    };
    setExpenses([...expenses, newExpense]);
    showAlert(true, 'success', '아이템이 생성되었습니다.');
  };

  // 지출 삭제
  const handleDeleteExpense = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
    showAlert(true, 'danger', '아이템이 삭제되었습니다.');
  };

  // 지출 수정
  const handleEditExpense = (id, name, amount) => {
    const newExpenses = expenses.map(expense => {
      if (expense.id === id) {
        return { ...expense, name, amount };
      }
      return expense;
    });
    setExpenses(newExpenses);
    showAlert(true, 'success', '아이템이 수정되었습니다.');
  };

  // 모든 지출 삭제
  const handleClearExpenses = () => {
    setExpenses([]);
    showAlert(true, 'danger', '모든 아이템이 삭제되었습니다.');
  };

  // 총 지출 계산
  const totalExpense = expenses.reduce((total, expense) => {
    return total + parseInt(expense.amount);
  }, 0);

  return (
    <div className="App">
      <div className="container">
        {alert.show && (
          <Alert
            type={alert.type}
            text={alert.text}
            removeAlert={() => showAlert(false, '', '')}
          />
        )}

        <h1>예산 계산기</h1>

        <div className="main-content">
          <ExpenseForm
            onAddExpense={handleAddExpense}
            showAlert={showAlert}
          />

          <ExpenseList
            expenses={expenses}
            onDeleteExpense={handleDeleteExpense}
            onEditExpense={handleEditExpense}
            onClearExpenses={handleClearExpenses}
          />
        </div>

        <div className="total">
          총지출: {totalExpense}원
        </div>
      </div>
    </div>
  );
}

export default App;
