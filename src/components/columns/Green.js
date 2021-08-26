import React from 'react';

import './columns.scss';

//Child Components
import Contact from '../contact/Contact';

const Green = () => {

  return(
    <div className="grid columns__green col-span-2  md:block">
      <div className="green__content">

        <Contact />
        
      </div>

    </div> 
    )
}


export default Green;