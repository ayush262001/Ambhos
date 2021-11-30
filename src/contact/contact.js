import React from 'react';
import ContactLeft from './contactLeft/contactLeft';
import ContactRight from './contactRight/contactRight';
import './contact.css'

function Contact()
{
    return(
         <div className="contactUs" id="contact">
             <ContactLeft />
             <ContactRight />
         </div>
    );
}
export default Contact;
