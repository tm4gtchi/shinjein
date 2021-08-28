import React from 'react';
import './styles.scss';

import ContactIcons from './ContactIcons';

const Contact = () => {

  return (
    <div className="contact__main">
      <div className="contact__heading">
        
        <h1 className="contact__title"><span className="name">Jeein Shin </span> Fullstack Developer </h1>


        <span className="contact__copy"></span>
          <p className="contact__blurb"> 
              My continous interest in language, form, and space are what led me to software development.
              Since then, I've been building projects using react and node mostly, but receptive
              to anything related to the field. 
            </p>   
          
          <ContactIcons />

      </div>
    </div>
    );
}

export default Contact;
