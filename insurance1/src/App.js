import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import Home1 from './home1';
import Login from './login';
import Dashboard from './dashboard';
import Customer from './customer';
import Policy from './policy';
import CarInsuranceForm from './CarInsuranceForm';

function App() {
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false; // Fetch from localStorage
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/home1" element={isAuthenticated ? <Home1 /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/car-insurance" element={<CarInsuranceForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;