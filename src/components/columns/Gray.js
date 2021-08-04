import React from 'react';
import './columns.scss';
import feed from '../assets/feed.png'
import econtacts from '../assets/econtacts.png'
import sg from '../assets/assessment.png'
import error from '../assets/error.png'

const Gray = () => {
  return (
    <>
    <div className="columns__gray col-span-3">
      <h1 className="projects__title">projects</h1>
      <div className="gray__content grid-rows-3 gap-4">
        <div className="project_">
          <img className="project__img" src={feed} alt="feed_alt" />
        </div>
        <div className="project_">
          <img className="project__img" src={econtacts} alt="econtacts_alt" />
        </div>
        <div className="project_">
          <img className="project__img" src={error} alt="error_alt" />
        </div>
        <div className="project_">
          <img className="project__img" src={sg} alt="sg_alt" />
        </div>
      </div>
    </div>
    </>
    );
}

export default Gray;
