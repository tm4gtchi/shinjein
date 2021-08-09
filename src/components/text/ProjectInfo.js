import React, { useState, useEffect } from "react";
import project_data from './project-data'

// import img from '../assets/econ_logo.png'
// import none from '../assets/no_logo.png'
// import errimg from '../assets/err_logo.png'

const Project = ({ green_state }) => {

  const [ projectData, setProjectData ] = useState();
  // const [ statesMatch, setStateMatch ] = useState(false);

  const handleStates = () => {
    const data = Object.values(project_data);
      setProjectData(data);
      console.log("call state", projectData)
      // setStateMatch(state);
      // const statesMatch = projectData.some(the => the.title.includes(green_state))
  }

  const renderProjectInfo = () => {

    if(!green_state) {
      return(
        <div>states dont match</div>
      )} 
    if(green_state) {
      const project = projectData.filter((the) => the.title === green_state)[0];
      // console.log("selected project", project)
      return( 
        <>
        <div className="project-info__main">
            <h4>{project.title}</h4>
             <div className="project-info__blurb">
              <img className="project-info__logo" src={project.file} alt="logo" /> 
              <p className="project-info__description">{project.description}</p>
             </div>
             <p className="project-info__features">{project.features}</p>
             <p className="project-info__design">{project.design}</p>
        </div>
        </>
      )
    }}

  useEffect(() => {
    handleStates();
  }, []);

  return(
    <div>
      {renderProjectInfo()}
    </div>

  );
}

export default Project;



// import React, { useState, useEffect } from "react";

// import project_data from './project-data'

// const Project = ({ green_state }) => {

//   const [ selectProject, setSelectProject ] = useState();

//   const getProjectInfo = () => {
//     const projectData = Object.values(project_data);
//       projectData.filter((the) => the.title === {green_state});
//       setSelectProject(projectData);
//   }

//   const renderProject = () => {

//     if(!green_state) {
//       return(
//         <div>nothing</div>
//       )} 
//     if(green_state) {

//       const { 
//         title
//         description, 
//         features, 
//         design, 
//         technologies, 
//          } = selectProject;

//       return( 
//         <>
//         <div className="project-info__main">
//             {/* <h4>{title}</h4> */}
//              {/* <div className="project-info__blurb">
//              <img src={file} alt="logo" /> <p>{description}</p>
//              </div> */}
//              {/* <p>{theProject.features}</p> */}
//         </div>
//         </>
//       )
//     }
//   }


//   useEffect(() => {
//     getProjectInfo();
//   }, []);

//   return(
//     <div>
//       {renderProject()}
//     </div>

//   );
// }

// export default Project;
