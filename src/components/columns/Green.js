import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './columns.scss';

//Child Components
import Project from '../text/ProjectInfo'
import Name from '../text/Name';
import Contact from '../text/Contact';
import About from '../switches/About'

const Green = ({ main_state, block_status, block_func }) => {


  return (
      <div className="columns__green col-span-3 hidden md:block">
        <div className="green__content">
        <Name />
        <Contact 
          block_status={block_status} 
          block_func={block_func} />
        <Project 
          green_state={main_state}
          block_status={block_status} />
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


export default Green;