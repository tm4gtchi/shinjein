import React from 'react';
import { ReactComponent as FeedTech } from '../../assets/feed_tech.svg';
import { ReactComponent as EconTech } from '../../assets/econ_tech.svg';
import { ReactComponent as SGTech } from '../../assets/sg_tech.svg';
import { ReactComponent as ErrorTech } from '../../assets/error_tech.svg';


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