import React, { useState } from 'react';
import './columns.scss';

//Child Components
import Name from '../text/Name';
import Contact from '../text/Contact';

//Assets
import project_data from '../text/project-data'

const Green = ({ state }) => {

  const [projectDetails, setProjectDetails] = useState([]);


  const getProjectDetails = () => {
    const data = Object.values(project_data);
    console.log(data[0].title)

  }

  const showProjectInfo = () => {
    if( state === null) {
      return(
        <div>{getProjectDetails()}</div>
      )} if ( state === 'feed'){
        return (
          <div>
            <p className="title"></p>
            <p className="description"></p>
            <p className="feature"></p>
            <p className="tech"></p>
          </div>
        )
      } if ( state === 'econtacts') {
        return (
          <div>econtacts</div>
        )
      } if ( state === 'errorsnake') {
        return (
          <div>error</div>
        )
      } if (state === 'sg-ui') {
        // return (<img src={noLogo} alt="no-log"/>)
      }
    }


  return (
    <>
      <div className="columns__green col-span-3 hidden md:block">
        <div className="green__content">
          {showProjectInfo()}
          {/* <img src={econ_ico} alt="ico"/> */}
        </div>
        <Name />
        <Contact />
      </div>
    </>
    );
}

export default Green;
