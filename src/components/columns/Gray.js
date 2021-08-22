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

    const [ thisProject, setThisProject ] = useState(null);

    const project_name = (e) => {
      setThisProject(e)

    }

    const handleFeed = () => {
      if(thisProject === 'feed') {
        return(
          <ProjectInfo
           container_project={thisProject} />
            )}
        if(thisProject !== 'feed') {
          return(
          <FeedProject />
          )}
      }

    const handleEcon = () => {
      if(thisProject === 'econtacts') {
        return(
          <ProjectInfo
           container_project={thisProject} />
            )}
        if(thisProject !== 'econtacts') {
          return(
          // <EconProject />
          <EconProject />
          )}
      }
    const handleSnake = () => {
      if(thisProject === 'errorsnake') {
        return(
          <ProjectInfo
           container_project={thisProject} />
            )}
        if(thisProject !== 'errorsnake') {
          return(
          <ErrorSnakeProject />
          )}
      }
    const handleSG = () => {
      if(thisProject === 'assessment') {
        return(
          <ProjectInfo
           container_project={thisProject} />
            )}
        if(thisProject !== 'assessment') {
          return(
          <AssessmentProject />
          )}
      }

  return (
    
  <div className="columns__gray col-span-2">
        <div className="gray__content">
          <h3 class="gray__content__title">My Projects</h3>
      {/* FEED */}
          <div className="project">
            <h5>Feed</h5>
            <div className="project__img" 
              onMouseEnter={ (e) => {project_name('feed')} }
              //onMouseLeave={ (e) => {project_name(null)} }
              >
            {handleFeed()}
            </div>
          </div>
      {/* ECONTACTS */}
          <div className="project">
            <h5>E-Contacts</h5>
            <div className="project__img" 
              onMouseEnter={ (e) => {project_name('econtacts')} }
              onMouseLeave={ (e) => {project_name(null)} } >
            {handleEcon()}
            </div>
          </div>
      {/* ERROR SNAKE */}    
          <div className="project">
            <div className="project__img" 
              onMouseEnter={ (e) => {project_name('errorsnake')} }
              onMouseLeave={ (e) => {project_name(null)} }>
            {handleSnake()}
            </div>
          </div>
      {/* SG ASSESSMENT */}    
          <div className=" project"
              onMouseEnter={ (e) => {project_name('assessment')} }
              onMouseLeave={ (e) => {project_name(null)} }>
                {handleSG()}
          </div>
        </div>
      </div>
      );

}

export default Gray;

