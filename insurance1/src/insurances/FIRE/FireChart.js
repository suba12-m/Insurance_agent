import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FireChart.css';

const FireChart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    document.body.appendChild(script);
  }, []);

  const handleApprove = () => {
    navigate('/insurances/FIRE/FireApprove'); // Navigate to Approval Form page
  };

  const handleDisapprove = () => {
    navigate('/home1'); // Navigate to Home page
  };

  return (
    <div className="fire-chart">
      <div className="tableauPlaceholder" id="viz1735552327954" style={{ position: 'relative' }}>
        <noscript>
          <a href="#">
            <img
              alt="Fire Insurance Comparison"
              src="https://public.tableau.com/static/images/Fi/FireInsurance/Dashboard1/1_rss.png"
              style={{ border: 'none' }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: 'none' }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="FireInsurance/Dashboard1" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/Fi/FireInsurance/Dashboard1/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>

      <div className="action-buttons">
        <button className="approve-button" onClick={handleApprove}>
          Approve
        </button>
        <button className="disapprove-button" onClick={handleDisapprove}>
          Disapprove
        </button>
      </div>
    </div>
  );
};

export default FireChart;