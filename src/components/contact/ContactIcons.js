import React from 'react';
import  Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
// import Email from '../../assets/mi_email.svg';

import './contact.scss'

const ContactIcons = () => {

  return(
    <div className="contact__icons">
      <a href="https://github.com/tm4gtchi"> <img className="github" src={Github} alt="git_icon" /></a>
      <a href="https://www.linkedin.com/in/jeein-shin/"> <img src={Linkedin} alt="linkdin" /> </a>
      {/* <a href="https://github.com/tm4gtchi"> <img src={Email} alt="linkdin" /> </a> */}
    </div>
  )
}


export default ContactIcons;