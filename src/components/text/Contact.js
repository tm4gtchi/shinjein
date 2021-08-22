import React from 'react';
import { NavLink } from 'react-router-dom';
import './text.scss';

const Contact = ({ block_func }) => {

  return (
    <div className="contact__main">
      <div className="contact__heading">
        
        <h1 className="contact__title"><span>Jeein Shin</span>Fullstack Developer</h1>

        <span className="contact__copy"></span>
        {/* <div className="contact__details">
          <ul className="contact__ul">
            <li className="contact__icon">
              <NavLink to="/about"
                onClick={ (e) => {block_func(true)} }
                className="contact__icon_img">
                about
              </NavLink>
            </li>
            <a href="https://github.com/tm4gtchi/shinjein" className="click_me"></a>
          </ul>
        </div> */}
      </div>
    </div>
    );
}

export default Contact;
