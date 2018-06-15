// Dependencies
import React from 'react';
//Internals
import Products from '../Products';
import Designers from '../Designers';
// import './index.css';

const Collection = () => (
  <div className="container">
    <Designers />
    <Products />
  </div>
);

export default Collection;
