import React, { useState } from 'react';
import Gray from './columns/Gray'
import Green from './columns/Green'
import './styles.scss';

import feed_ico from './assets/feed_logo.ico'


const Main = () => {

  const [isShown, setIsShown] = useState(false);

  const showItem = () => {
    setIsShown(true);
  }
  const hideItem = () => {
    setIsShown(false);
  }

  return (
    <>
    <div className="columns__main">
      <div className="grid sm:grid-cols-2 md:grid-cols-8 md:gap-2">
        <div className="column__empty"></div>
          <Green 
            feed={isShown}
            econ={isShown} />
          <Gray 
            show={showItem} hide={hideItem} />
        <div className="column__empty"></div>
      </div>
    </div>
    </>
    );
}

export default Main;
