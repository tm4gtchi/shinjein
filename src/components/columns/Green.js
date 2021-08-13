import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './columns.scss';

//Child Components
import Project from '../text/ProjectInfo'
import Name from '../text/Name';
import Contact from '../text/Contact';
import About from '../switches/About'

const Green = ({ main_state }) => {


  return (
      <div className="columns__green col-span-3 hidden md:block">
        <div className="green__content">
        <Name />
        <Contact />
        <Project green_state={main_state}/>
        <Switch>
          <Route key="/about" exact path="/about" component={About}/>
        </Switch>
        </div>
      </div>
    );
  }


export default Green;