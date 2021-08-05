import React from 'react';
import './columns.scss';
import feed from '../assets/feed.png'
import feed_ico from '../assets/feed_logo.ico'

import econtacts from '../assets/econtacts.png'
import sg from '../assets/assessment.png'
import error from '../assets/error.png'

const Gray = (props) => {
  return (
    <>
    <div className="columns__gray col-span-3">
      <h1 className="projects__title">projects</h1>
      <div className="gray__content grid-rows-3 gap-4">
        <div className="project">
          <a className="feed__lnk" href="http://feed-app-io.herokuapp.com/" 
            onMouseEnter={props.show}
            onMouseLeave={props.hide}>
            <img className="feed__img" src={feed} alt="feed_alt" />
          </a>
        </div>
        <div className="project">
          <a className="econ__lnk" href="https://priceless-curran-b897b6.netlify.app/"
            onMouseEnter={props.show}
            onMouseLeave={props.hide}
          >
            <img className="econ__img" src={econtacts} alt="econtacts_alt" />
          </a>
        </div>
        <div className="project">
          <img className="err__img" src={error} alt="error_alt" />
        </div>
        <div className=" project">
          <img className="sg__img" src={sg} alt="sg_alt" />
        </div>
      </div>
    </div>
    </>
    );
}

export default Gray;
