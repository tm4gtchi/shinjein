import React from 'react';
import './columns.scss';

import feed from '../assets/feed.png'
import econtacts from '../assets/econtacts.png'
import sg from '../assets/assessment.png'
import error from '../assets/error.png'

const Gray = ({ projectName }) => {

  return (
    <>
    <div className="columns__gray col-span-3">
      <h1 className="projects__title">projects</h1>
      <div className="gray__content grid-rows-3 gap-4">
    {/* FEED */}
        <div className="project">
          <a className="feed__lnk" 
            href="http://feed-app-io.herokuapp.com/" 
            onMouseEnter={ (e) => {projectName('feed')} }
            onMouseLeave={ (e) => {projectName(null)} } >
            <img className="feed__img" src={feed} alt="feed_alt" />
          </a>
        </div>
    {/* ECONTACTS */}
        <div className="project">
          <a className="econ__lnk" 
            href="https://priceless-curran-b897b6.netlify.app/"
            onMouseEnter={ (e) => {projectName('econtacts')} }
            onMouseLeave={ (e) => {projectName(null)} }>
            <img className="econ__img" src={econtacts} alt="econtacts_alt" />
          </a>
        </div>
    {/* ERROR SNAKE */}    
        <div className="project">
          <a className="err__lnk" 
            href="https://silly-elion-9ad6dd.netlify.app/"
            onMouseEnter={ (e) => {projectName('errorsnake')} }
            onMouseLeave={ (e) => {projectName(null)} }>
            <img className="err__img" src={error} alt="error_alt" />
          </a>
        </div>
    {/* SG ASSESSMENT */}    
        <div className=" project">
          <a className="sg-ui" 
            href="http://sg-tm4gtch.herokuapp.com/"
            onMouseEnter={ (e) => {projectName('sg-ui')} }
            onMouseLeave={ (e) => {projectName(null)} }>
            <img className="sg__img" src={sg} alt="sg_alt" />
          </a>
        </div>
      </div>
    </div>
    </>
    );
}

export default Gray;
