import React from 'react';
import './columns.scss';
  //Assets
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
            onMouseEnter={ (e) => {projectName('e-contacts')} }
            onMouseLeave={ (e) => {projectName(null)} }>
            <img className="econ__img" src={econtacts} alt="econtacts_alt" />
          </a>
        </div>
    {/* ERROR SNAKE */}    
        <div className="project">
          <a className="err__lnk" 
            href="https://silly-elion-9ad6dd.netlify.app/"
            onMouseEnter={ (e) => {projectName('error snake 98')} }
            onMouseLeave={ (e) => {projectName(null)} }>
            <img className="err__img" src={error} alt="error_alt" />
          </a>
        </div>
    {/* snail.eml */}    
        {/* <div className=" project">
          <a className="snail__lnk" 
            href="https://github.com/tm4gtchi/eml-xp-server"
            onMouseEnter={ (e) => {projectName('snail')} }
            onMouseLeave={ (e) => {projectName(null)} }>
            <div className="snail__img">no photo</div>
          </a>
        </div> */}
    {/* SG ASSESSMENT */}    
        <div className=" project">
          <a className="sg-ui" 
            href="https://github.com/tm4gtchi/sg-client"
            onMouseEnter={ (e) => {projectName('technical assessment - studio graphene')} }
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
