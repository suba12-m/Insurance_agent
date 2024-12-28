
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import Home1 from './home1';
import Login from './login';
import Contact from './contact';
import Dashboard from './dashboard';
import Customer from './customer';
import Policy from './policy';
import Car from './insurances/car';
import Bike from './insurances/bike';
import Fire from './insurances/fire';
import HomeIns from './insurances/homeIns';
import Life from './insurances/life';
import Travel from './insurances/travel';
import Faq from './faq';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/insurances/car" element={<Car />} />
          <Route path="/insurances/bike" element={<Bike />} />
          <Route path="/insurances/fire" element={<Fire />} />
          <Route path="/insurances/homeIns" element={<HomeIns />} />
          <Route path="/insurances/life" element={<Life />} />
          <Route path="/insurances/travel" element={<Travel />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/edit-home/:id" element={<HomeIns />} />
        <Route path="/edit-life/:id" element={<Life />} />
        <Route path="/edit-travel/:id" element={<Travel />} />
        <Route path="/edit-car/:id" element={<Car />} />
        <Route path="/edit-bike/:id" element={<Bike />} />
        <Route path="/edit-fire/:id" element={<Fire />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
