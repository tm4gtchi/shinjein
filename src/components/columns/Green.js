import React, { useState } from 'react';
import './columns.scss';
import Name from './Name'
import Contact from './Contact'

import feed_ico from '../assets/feed_logo.ico'
import econ_ico from '../assets/econ_ico.ico'
// import sg from '../assets/assessment.png'
// import error from '../assets/error.png'

const Green = (props) => {

  const [ feedToggle, setFeedToggle ] = useState(props.feed)
  const [ econToggle, setEconToggle ] = useState(props.econ)

  return (
    <>
      <div className="columns__green col-span-3 hidden md:block">
        <div className="green__content">
          {feedToggle && (<img src={feed_ico} alt="ico"/>)}
          {econToggle && (<img src={econ_ico} alt="ico"/>)}
        </div>
        <Name />
        <Contact />
      </div>
    </>
    );
}

export default Green;
