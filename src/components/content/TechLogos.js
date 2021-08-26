import React from 'react';
import { ReactComponent as FeedTech } from '../../assets/tech_feed.svg';
import { ReactComponent as EconTech } from '../../assets/tech_econ.svg';
import { ReactComponent as SGTech } from '../../assets/tech_sg.svg';
import { ReactComponent as ErrorTech } from '../../assets/tech_error.svg';


const TechSVG = ({project_tech}) => {

  const renderSVG = () => {
    if(project_tech === 'feed') {
      return(
        <>
        <FeedTech />
        </>
      )}
    if(project_tech === 'econtacts') {
      return(
        <>
        <EconTech />
        </>
      )}
    if(project_tech === 'assessment') {
      return(
        <>
        <SGTech />
        </>
      )
    }
    if(project_tech === 'errorsnake') {
      return(
        <>
        <ErrorTech />
        </>
      )
    }
  }

  return(
    <>
    {renderSVG()}
    </>
  )
}


export default TechSVG;