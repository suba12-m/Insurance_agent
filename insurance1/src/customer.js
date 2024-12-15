import React, { useState } from "react";
import "./customer.css";

const Customer = () => {
  // Table data as state
  const [customers, setCustomers] = useState([
    { id: 1, name: "AJIT", category: "Motor insurance", sum: 50000 },
    { id: 2, name: "HEMA", category: "Home insurance", sum: 35000 },
    { id: 3, name: "TUSHAR", category: "Health insurance", sum: 300000 },
    { id: 4, name: "MAHESH", category: "Life insurance", sum: 250000 },
    { id: 5, name: "AKBAR", category: "Travel insurance", sum: 45000 },
  ]);

  // Edit function
  const handleEdit = (id) => {
    alert(`Editing customer with ID: ${id}`);
    // You can implement a modal or input form here
  };

  return (
    
    <div className="container">
    <div className="sidebar">
        <img src="/images/admin.png" alt="User Avatar" style={{ borderRadius: '50%', marginBottom: '10px', width: '80px' }} />
        <div className="menu">
          <a href="/dashboard" >Dashboard</a>
          <a href="/customer" className="active" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px', backgroundColor: '#444', borderLeft: '4px solid #f3d250' }}>Customer</a>
          <a href="#" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Category</a>
          <a href="/policy" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Policy</a>
          <a href="#" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Questions</a>
        </div>
      </div>
      
    <div className="table-container">
    
    <h1 style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '24px', marginBottom: '20px',color:'white', backgroundColor:'#0b60b0' }}>Insurance Agent</h1>
      
      <table className="insurance-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Customer Names</th>
            <th>Category</th>
            <th>Sum Assurance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.category}</td>
              <td>{customer.sum.toLocaleString()}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(customer.id)}
                >
                  EDIT
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </div>
    </div>
  );
};

export default Customer;
