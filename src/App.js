import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route from react-router-dom

import Login from './login';
import SignUp from './signup';
import Home from './home';
import Welcome from './welcome';
import UserHome from './user_home';
import UserLogin from './user_login';
import UserSignup from './user_signup';
import UserProfile from './user_profile';
import Buy from './buy';
import Modify from './modify';
import CustomerService from './customer_service';
import TradingPolicy from './trading_policy';
import Post from './post';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/customer_service" element={<CustomerService />} />
        <Route path="/trading_policy" element={<TradingPolicy />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/user_login" element={<UserLogin/>} />
        <Route path="/user_signup" element={<UserSignup/>} />
        <Route path="/user_home" element={<UserHome/>} />
        <Route path="/user_profile" element={<UserProfile/>} />
      </Routes>
    </Router>
  );
};

export default App;
