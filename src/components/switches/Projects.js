import React from 'react';
import '../columns/columns.scss';

  //Assets
import feed from '../../assets/feed.png';
import econtacts from '../../assets/econtacts.png'
import sg from '../../assets/assessment.png'
import error from '../../assets/error_snake.png'


const FeedProject = () => {
  return(
    <div className="project__img"> 
      <img className="project_scn" src={feed} alt="feed_alt"/>
    </div>
    )
}
const EconProject = () => {
  return(
    <div className="project__img"> 
      <img className="project_scn" src={econtacts} alt="feed_alt"/>
    </div>
    )
}
const AssessmentProject = () => {
  return(
    <div className="project__img"> 
      <img className="project_scn" src={sg} alt="feed_alt"/>
    </div>
    )
}
const ErrorSnakeProject = () => {
  return(
    <div className="project__img"> 
      <img className="project_scn" src={error} alt="feed_alt"/>
    </div>
    )
}

export { FeedProject, EconProject, AssessmentProject, ErrorSnakeProject }