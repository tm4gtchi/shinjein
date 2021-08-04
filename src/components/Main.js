import React from 'react';
import Gray from './columns/Gray'
import Green from './columns/Green'
import './styles.scss';

const Main = () => {
  return (
    <>
    <div className="columns__main">
      <div className="grid sm:grid-cols-2 md:grid-cols-8 md:gap-2">
        <div className="column__empty"></div>
        <Green />
        <Gray />
        <div className="column__empty"></div>
      </div>
    </div>
    </>
    );
}

export default Main;
