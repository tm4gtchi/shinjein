import React, { useState } from 'react';
import Gray from './columns/Gray'
import Green from './columns/Green'

import './styles.scss';

const Main = () => {

  const [ thisProject, setThisProject ] = useState('');

  const project = (e) => {
    setThisProject(e)
  }
  
  return (
    <>
    <div className="columns__main">
      <div className="grid sm:grid-cols-2 md:grid-cols-8 md:gap-2">
        <div className="column__empty"></div>
          <Green main_state={thisProject} />
          <Gray projectName={project} />
        <div className="column__empty"></div>
      </div>
    </div>
    </>
    );
}

export default Main;
