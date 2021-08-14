import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import './switches.scss';

const About = ({block_func}) => {

  useEffect(() => {
      const isRendered = () => {
        block_func(true)
      }
    isRendered();
  }, [block_func]);

  const renderAbout = () => {
    return (
        <div className="about__main">
          <div>
            <p className="about__blurb">
              I enjoy simple elegance, in both code and design, and use that as a guiding principle in all my projects.
            </p>
            <p className="about__blurb"> 
              In pursuit of my ongoing curiosity for language, form, and space, I became a developer. My interest began at the end of 2019,
              when I realized programming was how we communicate with computers, a language essentially. From there, I used the resources
              available to learn, build, an design. 
            </p>   
          </div>
          <ul className="about__ul">
            <li>github</li>
            <li>linkedin</li>
            <li>email</li>
          </ul>
          <NavLink to="/"
              onClick={ (e) => {block_func(false)} }>
            back
          </NavLink>
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