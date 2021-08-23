import React, { useState } from 'react';
import './columns.scss';
import ProjectInfo from '../switches/ProjectInfo'
import { 
    FeedProject, 
    EconProject, 
    AssessmentProject, 
    ErrorSnakeProject 
  } from '../switches/Projects'

const Gray = () => {

  return (
    
  <div className="columns__gray col-span-2">
        <div className="gray__content">
      {/* FEED */}
          <div className="project">
            <div className="project__img">
              <FeedProjectdf
            </div>
          </div>
      {/* ECONTACTS */}
          <div className="project">
            <p>E-Contacts</p>
            <div className="project__img" >

            </div>
          </div>
      {/* ERROR SNAKE */}    
          <div className="project">
            <p>Error Snake 98</p>
            <div className="project__img" >

            </div>
          </div>
      {/* SG ASSESSMENT */}    
          <div className=" project">
            <p>UI assessment</p>
            <div className="project__img">

            </div>
        </div>
      </div>
      </div>
      );

}

export default Gray;

