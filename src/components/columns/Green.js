import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './columns.scss';

//Child Components
import Contact from '../text/Contact';
import About from '../switches/About'

const Green = ({ main_state, block_status, block_func }) => {



  const renderGreenColumn = () => {
    return (
        <div className="grid columns__green col-span-2  md:block">
          <div className="green__content">
          <Contact 
            block_status={block_status} 
            block_func={block_func} />
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