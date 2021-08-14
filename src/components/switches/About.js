import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import './switches.scss';

const About = ({block_func}) => {

  const [ showAbout, setShowAbout ] = useState(false);

  useEffect(() => {
      const isRendered = () => {
        block_func(true);
        setShowAbout(true)
        
      }
    isRendered();
  }, [block_func]);

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
              After realizing that the creative possibilites of programming were well in reach, my intrigue for technology grew exponentially. 
              Since then, I've been building, learning, and designing using react and node mostly, but interested in really anything 
              related to the field. 
            </p>   
          </div>
          <ul className="about__ul">
            <a href="https://github.com/tm4gtchi">
            <li>github</li>
            </a>
            <a href="https://www.linkedin.com/in/jeein-shin/"><li>linkedin</li></a>
          </ul>
          <NavLink to="/"
              onClick={ (e) => {block_func(false)} }>
            <p className="about__home">
              home
            </p>
          </NavLink>
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