import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './home'; 
import Dashboard from './dashboard';
import Customer from './customer';
import Policy from './policy';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/policy" element={<Policy />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

