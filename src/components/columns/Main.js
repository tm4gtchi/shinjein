import React from 'react';
import Green from './Green'
import Gray from './Gray'
import About from './About'

import './columns.scss';

const Main = () => {

  return (
    <div className="columns__main">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          <Green />
          <Gray />
          <About />
      </div>
    </div>
  );
}

export default Main;
