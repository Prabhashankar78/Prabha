import React from 'react';
import './Toast.css';

const Toast = ({ message, type, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={`toast toast-${type}`}>
      <i className={`fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
