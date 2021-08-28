import React from 'react';
import './styles.scss';

import ContactIcons from './ContactIcons';

const Contact = () => {

  return (
    <div className="contact__main">
      <div className="contact__heading">
        
        <h1 className="contact__title"><span>Jeein Shin</span>Fullstack Developer </h1>
        
        <ContactIcons />

        <span className="contact__copy"></span>
        
      </div>
    </div>
    );
}

export default Contact;
