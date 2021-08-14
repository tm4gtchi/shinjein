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
              My ongoing curiosity for language, form, and space are what informed my career in software development. At the end of 2019,
              after realizing that the creative possibilites of programming
              were well in reach, my intrigue for technology grew exponentially.
              Since then, I have pursued a non-traditional trajectory to learn, build, and design. 
            </p>   
          </div>
          <ul className="about__ul">
            <li>github</li>
            <li>linkedin</li>
            <li>email</li>
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