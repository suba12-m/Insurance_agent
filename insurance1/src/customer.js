import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./customer.css";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Correct usage of useNavigate

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/customers');
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
          <a href="/dashboard">Dashboard</a>
          <a
            href="/customer"
            className="active"
            style={{
              display: "block",
              padding: "10px 20px",
              color: "#fff",
              textDecoration: "none",
              fontSize: "16px",
              backgroundColor: "#444",
              borderLeft: "4px solid #f3d250",
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
            Questions
          </a>
        </div>
      </div>

      <div className="table-container">
        <h1
          style={{
            gridColumn: "1 / -1",
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "20px",
            color: "white",
            backgroundColor: "#0b60b0",
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
  );
};

export default Customer;
