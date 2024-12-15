import React from "react";
import "./policy.css";

const Policy = () => {
  const policies = [
    { id: 1, name: "Car insurance", category: "Motor insurance", sum: 50000, premium: 2000, tenure: 10 },
    { id: 2, name: "Tenant insurance", category: "Home insurance", sum: 35000, premium: 1500, tenure: 10 },
    { id: 3, name: "Maternity insurance", category: "Health insurance", sum: 300000, premium: 10000, tenure: 20 },
    { id: 4, name: "SBI insurance", category: "Life insurance", sum: 250000, premium: 15000, tenure: 30 },
    { id: 5, name: "Explore insurance", category: "Travel insurance", sum: 45000, premium: 3000, tenure: 15 },
  ];

  const handleApply = (name) => {
    alert(`You applied for ${name}`);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <img src="/images/admin.png" alt="User Avatar" style={{ borderRadius: '50%', marginBottom: '10px', width: '80px' }} />
        <div className="menu">
          <a href="/dashboard" >Dashboard</a>
          <a href="/customer" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Customer</a>
          <a href="#" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Category</a>
          <a href="/policy" className="active" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px', backgroundColor: '#444', borderLeft: '4px solid #f3d250' }}>Policy</a>
          <a href="#" style={{ display: 'block', padding: '10px 20px', color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Questions</a>
        </div>
      </div>
      <div className="content">
        <h2 className="table-header">Available Policies</h2>
        <table className="policy-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Policy Name</th>
              <th>Category</th>
              <th>Sum Assurance</th>
              <th>Premium</th>
              <th>Tenure</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy, index) => (
              <tr key={policy.id}>
                <td>{index + 1}</td>
                <td>{policy.name}</td>
                <td>{policy.category}</td>
                <td>{policy.sum.toLocaleString()}</td>
                <td>{policy.premium}</td>
                <td>{policy.tenure}</td>
                <td>
                  <button
                    className="apply-btn"
                    onClick={() => handleApply(policy.name)}
                  >
                    Apply
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

export default Policy;
