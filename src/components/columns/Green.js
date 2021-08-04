import React from 'react';
import './columns.scss';
import Name from './Name'
import Contact from './Contact'


const Green = () => {
  return (
    <>
      <div className="columns__green col-span-3 hidden md:block">
        <Name />
        <Contact />
      </div>
    </>
    );
}

export default Green;
