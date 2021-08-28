import React, { useState } from 'react';
import '../sections.scss';

import ProjectInfo from './components/ProjectInfo'
import { FeedProject, EconProject, AssessmentProject, ErrorSnakeProject } from './components/ProjectImg'
import { ReactComponent as FeedLogo } from '../../assets/feed_logo.svg';
import { ReactComponent as EconLogo } from '../../assets/econ_logo.svg';
import { ReactComponent as SGLogo } from '../../assets/sg_logo.svg';
import { ReactComponent as ErrorLogo } from '../../assets/error_logo.svg';

import open from '../../assets/link_icon.svg'

const Projects = () => {

    const [ thisProject, setThisProject ] = useState(null);

    const project_name = (e) => {
      setThisProject(e);

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
          <h3 class="gray__content__title">Projects</h3>
      {/* FEED */}
          <div className="project">
            <h5 className="project__title"> <FeedLogo style={{marginRight: "1rem"}} />
              Feed
            </h5>
              <div className="project__img" 
                onMouseEnter={ (e) => {project_name('feed')} }
                onMouseLeave={ (e) => {project_name(null)} }>
              {handleFeed()}
              </div>
            <a href="http://feed-app-io.herokuapp.com/"><img className="project__demo" src={open} alt="open" /></a>
          </div>
      {/* ECONTACTS */}
          <div className="project">
            <h5 className="project__title"> <EconLogo style={{marginRight: "1rem"}}  />
              E-Contacts
            </h5>
              <div className="project__img" 
                onMouseEnter={ (e) => {project_name('econtacts')} }
                onMouseLeave={ (e) => {project_name(null)} }>
              {handleEcon()}
              </div>
            <a href="https://priceless-curran-b897b6.netlify.app/"><img className="project__demo" src={open} alt="open"/></a>
          </div>
      {/* SG Assessment */}    
          <div className="project">
            <h5 className="project__title">
              <SGLogo style={{maxWidth:"30px", maxHeight:"30px", marginRight:"1rem"}}/>
              UI Assessment - Studio Graphene
            </h5>
            <div className="project__img" 
              onMouseEnter={ (e) => {project_name('assessment')} }
              onMouseLeave={ (e) => {project_name(null)} }>
              {handleSG()}
            </div>
            <a href="https://github.com/tm4gtchi/sg-client"><img className="project__demo"  src={open} alt="open" /></a>
          </div>
      {/* Error snake  */}    
          <div className=" project">
            <h5 className="project__title">
              <ErrorLogo style={{maxWidth:"45px", maxHeight:"40px", marginRight:"1rem"}}/>
              Error Snake 98
            </h5>
            <div className="project__img"
              onMouseEnter={ (e) => {project_name('errorsnake')}}
              onMouseLeave={ (e) => {project_name(null)} }>
              {handleSnake()}
            </div>
          <a href="https://silly-elion-9ad6dd.netlify.app"><img className="project__demo"  src={open} alt="open" /></a>
        </div>
      </div>
      </div>
      );

}

export default Projects;

