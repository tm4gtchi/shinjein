import React from 'react';
import { NavLink } from 'react-router-dom';
import './text.scss';

import coffee from '../../assets/coffee.svg'

const Contact = ({block_func}) => {
  return (
    <div className="contact__main">
      <div className="contact__heading">
        <h2 className="contact__title">fullstack developer</h2>
        <p>MERN | berlin, germany</p>
      </div>
      <div className="contact__details">
        <ul className="contact__ul">
          <li className="contact__icon">
              <NavLink to="/about"
                onClick={ (e) => {block_func(true)} }
                className="contact__icon_img">
                <img src={coffee} alt="coffee_icon"/>
              </NavLink>
            </li>
            <li className="contact__carrots">
              &lt; / &gt;
            </li>
          </ul>
      </div>
    </div>
    );
}

export default Contact;
