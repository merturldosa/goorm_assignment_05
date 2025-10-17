import React, { useEffect } from 'react';
import './Alert.css';

function Alert({ type, text, removeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [removeAlert]);

  return (
    <div className={`alert alert-${type}`}>
      {text}
    </div>
  );
}

export default Alert;
