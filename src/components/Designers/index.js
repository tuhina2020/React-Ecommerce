//Dependencies
import React, { Component } from 'react';
//Internals
import AllDesigners from './AllDesigners';
import './index.css';

class Products extends Component {
  render() {
    return (
      <div className="items-wrapper">
        <AllDesigners />
      </div>
    );
  }
}

export default Products;
