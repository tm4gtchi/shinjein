import React from 'react';

import './columns.scss';

//Child Components
import Contact from '../text/Contact';

const Green = ({ main_state }) => {


  const renderGreenColumn = () => {
    return (
        <div className="grid columns__green col-span-2  md:block">
          <div className="green__content">
          <Contact />
          </div>
        </div>
      );
  }
  return(
    <>
    {renderGreenColumn()}
    </>
  )

  }


export default Green;