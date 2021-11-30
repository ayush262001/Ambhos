import React from 'react';

import './servicesRight.css';
import GYMIcon from './gym.svg';
import SportsIcon from'./sports.svg';
import MaIcon from './martial-arts.svg';
import SwimmingIcon from './swimming.svg';
import YMIcon from './meditation.svg';
import trekkingIcon from './trekking.svg';
import AdventureIcon from './adventure.svg';
import DieticianIcon from './diet.svg';
import DoctorsIcon from './doctor.svg'
import RightItem from './rightItem';

function ServicesRight()
{
    return(
         <div className="services-right">

                   <div className="obj-now">
                         <RightItem Icon={GYMIcon} Title={"GYM"}></RightItem>
                   </div>
                   
                   <div className="obj-now">
                         <RightItem Icon={SportsIcon} Title={"Sports"}></RightItem>
                   </div>
                   
                   <div className="obj-now">
                         <RightItem Icon={MaIcon} Title={"Martial Arts"}></RightItem>
                   </div>
                   <div className="obj-now">
                         <RightItem Icon={SwimmingIcon} Title={"Swimming"}></RightItem>
                   </div>
                   <div className="obj-now">
                         <RightItem Icon={YMIcon} Title={"Yoga & Meditation"}></RightItem>
                   </div>
                   <div className="obj-now">
                         <RightItem Icon={trekkingIcon} Title={"Trekking"}></RightItem>
                   </div>
                   <div className="obj-now">
                         <RightItem Icon={AdventureIcon} Title={"Adventure"}></RightItem>
                   </div>
                   <div className="obj-now">
                         <RightItem Icon={DieticianIcon} Title={"Dietician"}></RightItem>
                   </div>
                   <div className="obj-now">
                         <RightItem Icon={DoctorsIcon} Title={"Doctors"}></RightItem>
                   </div>

         </div>
    );
}

export default ServicesRight;