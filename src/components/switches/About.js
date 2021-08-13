import React from 'react';
import { NavLink } from 'react-router-dom'
import './switches.scss';

const About = ({block_func}) => {

  return (
      <div className="about__main">
        <div>
          <p className="about__blurb">
            In pursuit of my ongoing curiosity for language, concepts, and space, I became a developer. It began in late 2019 when
            I realized programming was how we talk to computers, another form of communication.
            </p>
            <p className="about__blurb">
              Enthralled by this idea, I began to program using acccessible resources before deciding to jump ship. 
              I was cautious to start something new since I had already tried a few different things, but I was so curious
              about learning another language, albeit one for computers, the transition felt natural. 
            </p>
            <p className="about__blurb">
              Before, I struggled to find something that could marry what I was with what I wanted to be. 
              I felt at home in creative spaces, but I wasn’t an artist. 
              I was a writer, but left unsatiated by words. 
              I valued reason and logical thinking, but felt limited by an absent stem degree. 
            </p>   
            <p className="about__blurb">
              Through coding, I am able to realize my interests in an arena that doubles for both play and work. I am grateful to have found
              it and look forward to what lay ahead.
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


export default About;