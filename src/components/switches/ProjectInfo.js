import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import project_data from './project-data';

import '../text/text.scss'

const Project = ({ green_state, block_status, parent_render }) => {

  const [ projectData, setProjectData ] = useState();
  const [ showProject, setShowProject ] = useState(false);

  useEffect(() => {
      const handleStates = () => {
        const data = Object.values(project_data);
        setProjectData(data);
        if(green_state) {
          setShowProject(true)
        } else {
          setShowProject(false)
        }
      }
    handleStates();
  }, [green_state]);

  const renderProjectInfo = () => {
    if(!green_state || block_status) {
      return(
        <div></div>
      )} 
    if(green_state && parent_render) {
      const project = projectData.filter((the) => the.title === green_state)[0];
     return( 
       <CSSTransition
        in={showProject}
        timeout={300}
        unmountOnExit
        classNames="item"
        >
        <div className="project-info__main">
            <h4 className="project-info__title">{project.title}</h4>
             <div className="project-info__blurb">
              <p className="project-info__description">{project.description}</p>
             </div>
              <p className="project-info__text">{project.features}</p>
              <p className="project-info__text">{project.design}</p>
              <p className="project-info__tech">{project.technologies}</p>
        </div>
       </CSSTransition>
      )
    }}

  return(
    <div>
      {renderProjectInfo()}
    </div>

  );
}

export default Project;

