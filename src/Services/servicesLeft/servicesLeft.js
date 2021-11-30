import React from 'react';

import './servicesLeft.css';
import services from './services.png';

function ServicesLeft()
{
    return(
          <div className="services-left">

              <div className="service-detail">
                  <img src={services} alt=""></img>
              </div>

              <div className="service-detail-two">
                  <h1>Services</h1>
                  <h4>A company is known by its product, service and consistency. <br></br>
Here is a glimpse about the various services that AMBHOS provides. It varies from providing trainings to providing employment in health care sector.
                  </h4>
              </div>
              
          </div>
    );
}

export default ServicesLeft;