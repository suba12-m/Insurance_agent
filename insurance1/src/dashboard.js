import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <img src="https://via.placeholder.com/80" alt="User Avatar" style={{ borderRadius: '50%', marginBottom: '10px', width: '80px' }} />
        <div className="menu">
          <a href="#" className="active" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px', backgroundColor: '#444', borderLeft: '4px solid #f3d250' }}>Dashboard</a>
          <a href="#" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Customer</a>
          <a href="#" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Category</a>
          <a href="#" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Policy</a>
          <a href="#" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Questions</a>
        </div>
      </div>
      <div className="dashboard">
        <h1 style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '24px', marginBottom: '20px', color: 'white' }}>Insurance Agent</h1>
        <div className="card" style={{ background: '#2e4a66', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', color: 'white' }}>
          <h3>Total Registered Users</h3>
          <p>7</p>
        </div>
        <div className="card" style={{ background: '#2e4a66', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', color: 'white' }}>
          <h3>Listed Policies</h3>
          <p>5</p>
        </div>
        <div className="card" style={{ background: '#2e4a66', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', color: 'white' }}>
          <h3>Listed Categories</h3>
          <p>6</p>
        </div>
        <div className="card" style={{ background: '#2e4a66', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', color: 'white' }}>
          <h3>Total Applied Policy Holders</h3>
          <p>6</p>
        </div>
        <div className="card" style={{ background: '#2e4a66', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', color: 'white' }}>
          <h3>Approved Policy Holders</h3>
          <p>4</p>
        </div>
        <div className="card" style={{ background: '#2e4a66', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', color: 'white' }}>
          <h3>Disapproved Policy Holders</h3>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
