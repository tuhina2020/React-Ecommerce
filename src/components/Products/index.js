//Dependencies
import React, { Component } from 'react';
//Internals
import AllItems from './AllItems';
import './index.css';
import PRODUCTS from '../Data/products.js';
import { isEmpty, filter, forOwn } from 'lodash';

class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { productFilter, heading, image } = this.props;
    image = image || false;
    let products = isEmpty(productFilter) ? PRODUCTS : filter(PRODUCTS, (product) => {
      let value = true;
      forOwn(productFilter, (v, k) => {
        value = value && (product[k] === v);
      });
      return value;
    });
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <div className="items-heading">{heading || "ALL PRODUCTS"}</div>
        </div>
        <AllItems products={products}/>
      </div>
    );
  }
}

export default Products;
