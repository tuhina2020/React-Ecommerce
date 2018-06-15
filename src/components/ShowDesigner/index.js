//Dependencies
import React, { Component } from 'react';
//Internals
import Products from '../Products';
// import './index.css';
import DESIGNERS from '../Data/designers.js';

class DesignerProducts extends Component {
  render() {
    const designer = parseInt(this.props.match.params.id);
    const productFilter = { designer };

    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h4>DESIGNER</h4>
        </div>
        <Products productFilter={productFilter}/>
      </div>
    );
  }
}

export default DesignerProducts;