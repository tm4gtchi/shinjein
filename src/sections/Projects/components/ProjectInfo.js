import React from 'react';
import project_data from './project-data';
import TechSVG from './ProjectTech'

import './content.scss'

const ProjectInfo = ({ container_project }) => {

  const renderProjectInfo = () => {
    if(container_project) {
      const project = project_data.filter((the) => the.title === container_project)[0];
     return( 
        <div className="project-info__main">
          <p className="project-info__description">{project.description}</p>
          <br></br>
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

