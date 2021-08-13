import React from 'react';
import './text.scss';

import coffee from '../../assets/coffee.svg'

const Contact = () => {
  return (
    <>
      <div className="contact__main">
        <div className="contact__heading">
          <h2 className="contact__title">fullstack developer</h2>
          <p>MERN | berlin, germany</p>
        </div>
        <div className="contact__details">
          <ul className="contact__ul">
            <li className="contact__icon">
              <img src={coffee} alt="coffee_icon"/></li>
            <li className="contact__carrots"> &lt; / &gt; </li>
          </ul>
      </div>
      </div>
    </>
    );
}

export default Contact;
