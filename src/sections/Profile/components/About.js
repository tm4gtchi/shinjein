import React from 'react';
import './styles.scss';

const About = () => {

  const renderAbout = () => {
    return (
        <div className="about__main">
          <div>
            <p className="about__blurb"> 
              My continous interest in language, form, and space are what led me to programming.
              Since then, I've been building projects using react and node, but curious
              to learn about other types of languages and design practices in the future. 
            </p>   
          </div>         
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