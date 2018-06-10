//Dependencies
import React, { Component } from 'react';
//Internals
import AllItems from '../items/AllItems';
// import './index.css';
import PRODUCTS from '../Data/products.js';
import DESIGNERS from '../Data/designers.js';
import { filter } from 'lodash';

class Products extends Component {
  render() {
    console.log('I am here', this.props.match.params.id);
    const designer = parseInt(this.props.match.params.id);
  	let products = filter(PRODUCTS, (product) => {
  	  return product.designer === designer;
  	});
    console.log(designer, products);
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h4>DESIGNER</h4>
        </div>
        <AllItems products={products}/>
      </div>
    );
  }
}

export default Products;