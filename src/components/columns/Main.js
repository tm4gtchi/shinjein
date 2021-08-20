import React, { useState } from 'react';
import Green from './Green'
import Gray from './Gray'

import './columns.scss';

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
      <div className="grid sm:grid-cols-2 md:grid-cols-5 md:gap-0">
          <Green 
            main_state={thisProject} 
            block_func={blockProject} 
            block_status={block} />
          <Gray projectName={project} />
      </div>
    </div>
  );
}

export default Main;
