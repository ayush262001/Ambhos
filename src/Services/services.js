import React from 'react';
import './services.css';

import ServicesLeft from './servicesLeft/servicesLeft';
import ServicesRight from './servicesRight/servicesRight';

function Services()
{
    return(
          <div className="services-main" id="services">
                  <ServicesLeft />
                  <ServicesRight />
          </div>
    );
}

export default Services;