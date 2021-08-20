import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './columns.scss';

//Child Components
import Project from '../switches/ProjectInfo'
import Contact from '../text/Contact';
import About from '../switches/About'

const Green = ({ main_state, block_status, block_func }) => {

  const [ greenRender, setGreenRender ] = useState(false);

  useEffect(() => {
      const greenRender = () => {
        setGreenRender(true)
      }
    greenRender();
  }, []);

  const renderGreenColumn = () => {
    return (
        <div className="grid columns__green col-span-3  md:block">
          <div className="green__content">
          <Contact 
            block_status={block_status} 
            block_func={block_func} />
          <Project 
            green_state={main_state}
            block_status={block_status}
            parent_render={greenRender}
            />
          <Switch>
            <Route exact path="/about" render={(props) => {
              return <About {...props}  
              block_func={block_func}/>
            }}/>
          </Switch>
          </div>
        </div>
      );
  }
  return(
    <>
    {renderGreenColumn()}
    </>
  )

  }


export default Green;