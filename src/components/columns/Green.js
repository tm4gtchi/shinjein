import React, { useState } from 'react';
import './columns.scss';
import Name from './Name'
import Contact from './Contact'

import feedLogo from '../assets/feed_logo.png'
import econLogo from '../assets/econ_logo.png'
import noLogo from '../assets/no_logo.png'
import errLogo from '../assets/err_logo.png'

const Green = ({ state }) => {

  const handleProjectInfo = () => {
    if( state === null) {
      return(
        <div>nothing</div>
      )} if ( state === 'feed'){
        return (<img src={feedLogo} alt="fee-log" />)
      } if ( state === 'econtacts') {
        return (<img src={econLogo} alt="eco-log"/>)
      } if ( state === 'errorsnake') {
        return (<img src={errLogo} alt="err-log"/>)
      } if (state === 'sg-ui') {
        return (<img src={noLogo} alt="no-log"/>)
      }
    }


  return (
    <>
      <div className="columns__green col-span-3 hidden md:block">
        <div className="green__content">
          {handleProjectInfo()}
          {/* <img src={econ_ico} alt="ico"/> */}
        </div>
        <Name />
        <Contact />
      </div>
    </>
    );
}

export default Green;
