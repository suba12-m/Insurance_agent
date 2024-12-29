import React, { useEffect } from 'react';
import './Chart.css'; // Import any CSS if required

const Chart = () => {
  useEffect(() => {
    console.log('Tableau script loaded');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.onload = () => {
      console.log('Tableau script loaded successfully');
      
      const divElement = document.getElementById('viz1735405622728');
      const vizElement = divElement.getElementsByTagName('object')[0];

      // Set dimensions based on screen size
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '1000px';
        vizElement.style.height = '827px';
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '1000px';
        vizElement.style.height = '827px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '1577px';
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className='tableauPlaceholder' id='viz1735405622728' style={{ position: 'relative' }}>
      <noscript>
        <a href='#'>
          <img
            alt='Car Insurance Plan Comparator'
            src='https://public.tableau.com/static/images/ca/car_17352922350130/CarInsurancePlanComparator/1_rss.png'
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className='tableauViz' style={{ display: 'none' }}>
        <param name='host_url' value='https://public.tableau.com/' />
        <param name='embed_code_version' value='3' />
        <param name='name' value='car_17352922350130/CarInsurancePlanComparator' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/ca/car_17352922350130/CarInsurancePlanComparator/1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
      </object>
    </div>
  );
};

export default Chart;