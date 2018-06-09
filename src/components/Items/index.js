//Dependencies
import React, { Component } from 'react';
//Internals
import AllItems from './AllItems';
import './index.css';
import products from '../Data/products.js';

class Products extends Component {
  render() {
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h4>All Items</h4>
        </div>
        <AllItems products={products}/>
      </div>
    );
  }
}

export default Products;
