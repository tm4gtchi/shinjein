import React, { useState, useEffect } from 'react';
// import { CSSTransition } from 'react-transition-group';
import project_data from './project-data';
import TechSVG from './TechLogos'

import '../text/text.scss'

const ProjectInfo = ({ container_project }) => {

  const [ projectData, setProjectData ] = useState(project_data);
  // const [ projectName, setProjectName ] = useState(container_project);
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
      const project = projectData.filter((the) => the.title === container_project)[0];
     return( 
        <div className="project-info__main">
          <p className="project-info__description">{project.description}</p>
          <TechSVG project_tech={container_project}/>
        </div>
      )
    }}

  return(
    <>
      {renderProjectInfo()}
    </>

  );
}

export default ProjectInfo;

