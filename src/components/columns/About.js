import React from 'react';
import '../switches/switches.scss';

const About = () => {

  const renderAbout = () => {
    return (
        <div className="about__main">
          <div>
            <p className="about__blurb"> 
              My ongoing curiosity for language, form, and space are what led me to software development.
              Since then, I've been building, learning, and designing using react and node mostly, but interested in really anything 
              related to the field. 
            </p>   
          </div>
          <ul className="about__ul">
            <a href="https://github.com/tm4gtchi" className="click_me">
            <li className="click_me">github</li>
            </a>
            <a href="https://www.linkedin.com/in/jeein-shin/"><li className="click_me">linkedin</li></a>
          </ul>
         
        </div>
      );
  }
  
return(
  <>
  {renderAbout()}
  </>
)
  }


export default About;