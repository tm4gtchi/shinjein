import React from 'react';
import './text.scss';

const Contact = () => {
  return (
    <>
      <div className="contact__main">
        <div className="contact__heading">
          <h2 className="contact__title">fullstack developer</h2>
          <p>MERN | berlin, germany</p>
        </div>
        <div className="contact__details">
          <ul>
            <li>g: @tm4gtchi</li>
            <li>t: +49 0 176 57735999</li>
            <li>e: jshin724@gmail.com</li>
          </ul>
      </div>
      </div>
    </>
    );
}

export default Contact;
