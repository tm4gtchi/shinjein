import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import project_data from './project-data';

import '../text/text.scss'

const ProjectInfo = ({ container_project }) => {

  const [ projectData, setProjectData ] = useState(project_data);
  const [ projectName, setProjectName ] = useState(container_project);
  const [ transition, setTransition ] = useState(false);

  useEffect(() => {
      const handleStates = () => {
        if(container_project) {
          setTransition(true)
        } else {
          setTransition(false)
        }
      }
    handleStates();
  }, [container_project]);

  const renderProjectInfo = () => {
    if(container_project) {
      // handleStates();
      // console.log(projectData);
      const project = projectData.filter((the) => the.title === projectName)[0];
     return( 
       <CSSTransition
        in={transition}
        timeout={300}
        unmountOnExit
        classNames="item"
        >
        <div className="project-info__main">
            <h4 className="project-info__title">{project.name}</h4>
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

export default ProjectInfo;

