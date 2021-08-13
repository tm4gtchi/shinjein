import React from 'react';
import './columns.scss';

//Child Components
import Project from '../text/ProjectInfo'
import Name from '../text/Name';
import Contact from '../text/Contact';

const Green = ({ main_state }) => {

  return (
    <>
      <div className="columns__green col-span-3 hidden md:block">
        <div className="green__content">
        <Name />
        <Contact />
          < Project green_state={main_state} />
        </div>
      </div>
    </>
    );
  }


export default Green;