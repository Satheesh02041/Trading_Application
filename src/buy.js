import React, { useState } from 'react';
import './buy.css'; // Import CSS for styling

const Buy = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handlePaymentConfirm = () => {
    // Implement logic to confirm payment with selected method
    alert(`Payment confirmed with ${selectedPaymentMethod}`);
  };

  return (
    <div className="buy-container">
      <h2>Select Payment Method</h2>
      <div className="payment-options">
        <button
          className={`payment-option ${selectedPaymentMethod === 'Credit Card' ? 'selected' : ''}`}
          onClick={() => handlePaymentSelection('Credit Card')}
        >
          Credit Card
        </button>
        <button
          className={`payment-option ${selectedPaymentMethod === 'PayPal' ? 'selected' : ''}`}
          onClick={() => handlePaymentSelection('PayPal')}
        >
          PayPal
        </button>
        <button
          className={`payment-option ${selectedPaymentMethod === 'Bank Transfer' ? 'selected' : ''}`}
          onClick={() => handlePaymentSelection('Bank Transfer')}
        >
          Bank Transfer
        </button>
      </div>
      <button
        className="confirm-button"
        onClick={handlePaymentConfirm}
        disabled={!selectedPaymentMethod}
      >
        Confirm Payment
      </button>
    </div>
  );
};

export default Buy;
