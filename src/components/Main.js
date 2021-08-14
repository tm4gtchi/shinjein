import React, { useState } from 'react';
import Gray from './columns/Gray'
import Green from './columns/Green'

import './styles.scss';

const Main = () => {

  const [ thisProject, setThisProject ] = useState('');
  const [ block, setBlock ] = useState(false);

  
  const project = (e) => {
    setThisProject(e)
  }
  const blockProject = (e) => {
    setBlock(e)
  }

  return (
    <div className="columns__main">
      <div className="grid sm:grid-cols-2 md:grid-cols-8 md:gap-2">
        <div className="columns__empty"></div>
          <Green 
            main_state={thisProject} 
            block_func={blockProject} 
            block_status={block} />
          <Gray projectName={project} />
        <div className="columns__empty"></div>
      </div>
    </div>
  );
}

export default Main;
