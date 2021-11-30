import React from 'react';
import './detailRight.css';
import Layout from './layout/layout';
import PoolRoundedIcon from '@material-ui/icons/PoolRounded';
import icon1 from './health and wellness.svg';
import icon2 from './promoting science.svg';
import icon3 from './reliable quality product.svg';
function DetailRight()
{
    return(
         <div className="detail-right">

             <Layout Id={"active-right"} Icon={icon1} Title={"Health and Wellness"} Content={"Here at ambhos we try to provide best health care services."} />
             <Layout Id={"unactive-right"} Icon={icon2} Title={"Promoting science "} Content={"Through our blogs we try to provide road map for a fit and better version of You based on scientific grounds. "} />
             <Layout Id={"unactive-right"} Icon={icon3} Title={"Reliable quality products"} Content={"We try to provide best facilities in an affordable, safe and effective manner. "} />

         </div>
    );
}

export default DetailRight;