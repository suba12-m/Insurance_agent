import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./customer.css";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch authentication status

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('https://insurance-agent.onrender.com/api/customers');
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        console.log("Fetched Data:", data);
        setCustomers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCustomers();
  }, []);

  const handleEdit = (id, category) => {
    switch (category.toLowerCase()) {
      case "home":
        navigate(`/edit-home/${id}`);
        break;
      case "life":
        navigate(`/edit-life/${id}`);
        break;
      case "travel":
        navigate(`/edit-travel/${id}`);
        break;
      case "car":
        navigate(`/edit-car/${id}`);
        break;
      case "bike":
        navigate(`/edit-bike/${id}`);
        break;
      case "fire":
        navigate(`/edit-fire/${id}`);
        break;

      default:
        console.error("Unknown category:", category);
    }
  };

  

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="home-logo">
          <img src="/images/ins_LOGO.png" alt="Logo" style={{ width: '290px', height: '100px' }} />
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/home1">Home</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/login">Logout</Link></li>
            
          </ul>
        </nav>
      </header>

      {/* Customer Page Content */}
      <div className="container">
        <div className="sidebar">
          <img
            src="/images/admin.png"
            alt="User Avatar"
            style={{
              borderRadius: "50%",
              marginBottom: "10px",
              width: "80px",
            }}
          />
          <div className="menu">
            <a
              href="/customer"
              className="active"
              style={{
                display: "block",
                padding: "10px 20px",
                color: "black",
                textDecoration: "none",
                fontSize: "16px",
                backgroundColor: "#ffffff",
                borderLeft: "4px solid black",
              }}
            >
              Customer
            </a>
            <a
              href="/faq"
              style={{
                display: "block",
                padding: "10px 20px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="table-container">
          <h1
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              fontSize: "30px",
              marginBottom: "20px",
              color: "black",
            }}
          >
            Insurance Agent
          </h1>

          {error && <div className="error-message">{error}</div>}

          <table className="insurance-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Customer Names</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={customer._id}>
                  <td>{index + 1}</td>
                  <td>{customer.fullName}</td>
                  <td>{customer.category}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(customer._id, customer.category)}
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
    </div>
  );
};

export default Customer;