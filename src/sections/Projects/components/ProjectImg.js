import React from 'react';
import './content.scss';

  //Assets
import feed from '../../../assets/feed.png';
import econtacts from '../../../assets/econtacts.png'
import sg from '../../../assets/assessment.png'
import error from '../../../assets/error_snake.png'


const FeedProject = () => {
  return(
      <img className="project_scn" src={feed} alt="feed_alt"/>
    )
}
const EconProject = () => {
  return(
      <img className="project_scn" src={econtacts} alt="feed_alt"/>
    )
}
const AssessmentProject = () => {
  return(
      <img className="project_scn" src={sg} alt="feed_alt"/>
    )
}
const ErrorSnakeProject = () => {
  return(
      <img className="project_scn" src={error} alt="feed_alt"/>
    )
}

export { FeedProject, EconProject, AssessmentProject, ErrorSnakeProject }