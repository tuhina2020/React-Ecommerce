//Dependencies
import React, { Component } from 'react';
//Internals
import Products from '../Products';

class Accessories extends Component {
  render() {
    let productFilter = { category: "accessories" };
    return(
      <div className="accessories">
        <div className="accessories-title">
          <h4>Accessories</h4>
        </div>
        <div className="items">
          <Products productFilter={productFilter} heading="ACCESSORIES"/>
        </div>
      </div>
    );
  }
}

export default Accessories;
