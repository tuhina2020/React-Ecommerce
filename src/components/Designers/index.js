//Dependencies
import React, { Component } from 'react';
//Internals
import AllDesigners from './AllDesigners';
import './index.css';

class Products extends Component {
  render() {
    return (
      <div className="items-wrapper">
      	<div className="trending-boutiques">trending boutiques</div>
        <AllDesigners />
      </div>
    );
  }
}

export default Products;
