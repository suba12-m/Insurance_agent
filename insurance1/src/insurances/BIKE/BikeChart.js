import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BikeChart.css';

const BikeChart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    document.body.appendChild(script);
  }, []);

  const handleApprove = () => {
    navigate('/insurances/approvalform'); // Navigate to Approval Form page
  };

  const handleDisapprove = () => {
    navigate('/home1'); // Navigate to Home page
  };

  return (
    <div className="bike-chart">
      <div className="tableauPlaceholder" id="viz1735484802064">
        <noscript>
          <a href="#">
            <img
              alt="Bike Insurance Comparison"
              src="https://public.tableau.com/static/images/Bi/Bike_17354845285710/BikeInsuranceComparison/1_rss.png"
              style={{ border: 'none' }}
            />
          </a>
        </noscript>
        <object className="tableauViz">
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="name" value="Bike_17354845285710/BikeInsuranceComparison" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/Bi/Bike_17354845285710/BikeInsuranceComparison/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
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

export default BikeChart;