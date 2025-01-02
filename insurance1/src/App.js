
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import Home1 from './home1';
import Login from './login';
import Contact from './contact';
import Customer from './customer';
import Policy from './policy';
// car
import Car from './insurances/CAR/car';
import CarChart from './insurances/CAR/CarChart';
import CarApproveform from './insurances/CAR/CarApproveform';
import CarQuotation from './insurances/CAR/CarQuotation';
// fire
import Fire from './insurances/FIRE/fire';
import FireChart from './insurances/FIRE/FireChart';
import FireApprove from './insurances/FIRE/FireApprove';
import FireQuotation from './insurances/FIRE/FireQuotation';
// home
import HomeIns from './insurances/HOME/homeIns';
import HomeChart from './insurances/HOME/HomeChart';
import HomeApprove from './insurances/HOME/HomeApprove';
import HomeQuotation from './insurances/HOME/HomeQuotation';
// travel
import Travel from './insurances/TRAVEL/travel';
import TravelChart from './insurances/TRAVEL/TravelChart';
import TravelApprove from './insurances/TRAVEL/TravelApprove';
import TravelQuotation from './insurances/TRAVEL/TravelQuotation';
// life
import Life from './insurances/LIFE/life';
import LifeChart from './insurances/LIFE/LifeChart';
import LifeApprove from './insurances/LIFE/LifeApprove';
import LifeQuotation from './insurances/LIFE/LifeQuotation';
// bike
import Bike from './insurances/BIKE/bike';
import BikeChart from './insurances/BIKE/BikeChart';
import BikeApprovalForm from './insurances/BIKE/BikeApprovalForm';
import BikeQuotation from './insurances/BIKE/BikeQuotation';

import Faq from './faq';
import Signup from './signup';



function App() {
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false; // Fetch from localStorage
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/home1" element={isAuthenticated ? <Home1 /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          {/* car */}
          <Route path="/insurances/CAR/car" element={<Car />} />
          <Route path="/insurances/CAR/carchart" element={<CarChart />} />
          <Route path="/insurances/CAR/carapproveform" element={<CarApproveform />} />
          <Route path="/insurances/CAR/carquotation" element={<CarQuotation />} />
          {/* bike */}
          <Route path="/insurances/BIKE/bike" element={<Bike />} />
          <Route path="/insurances/BIKE/bikechart" element={<BikeChart />} />
          <Route path="/insurances/BIKE/bikeapprovalform" element={<BikeApprovalForm />} />
          <Route path="/insurances/BIKE/bikequotation" element={<BikeQuotation />} />
          {/* homeIns */}
          <Route path="/insurances/HOME/homeIns" element={<HomeIns />} />
          <Route path="/insurances/HOME/HomeChart" element={<HomeChart />} />
          <Route path="/insurances/HOME/HomeApprove" element={<HomeApprove />} />
          <Route path="/insurances/HOME/HomeQuotation" element={<HomeQuotation />} />
          {/* fire */}
          <Route path="/insurances/FIRE/fire" element={<Fire />} />
          <Route path='/insurances/FIRE/FireChart' element={<FireChart/>} />
          <Route path='/insurances/FIRE/FireApprove' element={<FireApprove/>} />
          <Route path='/insurances/FIRE/FireQuotation' element={<FireQuotation/>} />
          {/* travel */}
          <Route path="/insurances/TRAVEL/travel" element={<Travel />} />
          <Route path="/insurances/TRAVEL/TravelChart" element={<TravelChart />} />
          <Route path="/insurances/TRAVEL/TravelApprove" element={<TravelApprove />} />
          <Route path="/insurances/TRAVEL/TravelQuotation" element={<TravelQuotation />} />
          {/* life */}
          <Route path="/insurances/LIFE/life" element={<Life />} />
          <Route path="/insurances/LIFE/LifeChart" element={<LifeChart />} />
          <Route path="/insurances/LIFE/LifeApprove" element={<LifeApprove />} />
          <Route path="/insurances/LIFE/LifeQuotation" element={<LifeQuotation />} />

          <Route path="/faq" element={<Faq />} />
          <Route path="/edit-home/:id" element={<HomeIns />} />
        <Route path="/edit-life/:id" element={<Life />} />
        <Route path="/edit-travel/:id" element={<Travel />} />
        <Route path="/edit-car/:id" element={<Car />} />
        <Route path="/edit-bike/:id" element={<Bike />} />
        <Route path="/edit-fire/:id" element={<Fire />} />
        <Route path="/edit-homeIns/:id" element={<HomeIns />} />
        <Route path="/insurances/FIRE/FireChart" element={<FireChart />} />

       

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
