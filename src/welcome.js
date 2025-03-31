// Welcome.js

import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css'; // Import styles for Welcome component

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h2>Welcome</h2>
      <div className="button-container">
        <Link to="/login" className="login-button">
          Login as Trader
        </Link>
        <Link to="/user_login" className="login-button">
          Login as Tradee
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
