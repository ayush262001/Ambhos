import React from 'react';
import RightInside from './RightInside';
import './right.css';

function Right()
{
    return (
        <div className="scrollFast">
            <div className="right">
             <RightInside heading={"MARTIAL ART"} subheading={"Keeping up with the fact that martial arts is not only a gateway to a fit self but also a tool to help you fight for your own safety, we even provide martial arts training to people of all age groups. It is not only a fun way to stay fit but also improves your overall health. It increases stamina, focus and boosts your confidence. It provides emotional stability and alleviates depression and anxiety. Thus, promoting a better mental health."} />
            </div>
            <div className="right">
             <RightInside heading={"HIRING THE DOCTORS"} subheading={`With lockdown and this pandemic we are all locked up in our rooms. As such people who are in need of guidance of healthcare experts are suffering the most because none can travel to reach to the hospitals or other Health care centres to avail these facilities. Keeping this in view, we try to connect you to physicians, psychiatrists and other specialists and experts in medical field through online interfaces. You can fix an appointment with best doctors through us.`}/>
            </div>
            <div className="right">
             <RightInside heading={"HEALTH AWARENESS"} subheading={"We provide services in the health and wellness sector. So to keep a track of your health and find motivations to stay healthy along with updates on recent researches in this field do follow us on linkedin. We are sure to astonish you with our recent posts on the health spectrum including diet plans, awareness about diseases, wellness activities, researches and much more!! So do consider following us on Instagram! Videos always enhance learning. So to know more about your health, watch our videos on YouTube ."} />
            </div>
        </div>
    );
}
export default Right;