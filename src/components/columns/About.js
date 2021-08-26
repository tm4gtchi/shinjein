import React from 'react';
import '../content/content.scss';

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