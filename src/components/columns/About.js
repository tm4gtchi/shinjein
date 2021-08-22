import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import '../switches/switches.scss';

const About = () => {

  const [ showAbout, setShowAbout ] = useState(false);

  useEffect(() => {
      const isRendered = () => {
        setShowAbout(true)
        
      }
    isRendered();
  }, []);

  const renderAbout = () => {
    return (
      <CSSTransition
        in={showAbout}
        timeout={300}
        unmountOnExit
        classNames="item"
        >
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
          {/* <NavLink className="click_me" to="/"
              onClick={ (e) => {block_func(false)} }>
            <p className="about__home">
              go back
            </p>
          </NavLink> */}
        </div>
      </CSSTransition>
      );
  }
  
return(
  <>
  {renderAbout()}
  </>
)
  }


export default About;