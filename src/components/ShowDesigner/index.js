//Dependencies
import React, { Component } from 'react';
//Internals
import Products from '../Products';
import './index.css';
import DESIGNERS from '../Data/designers.js';
import { find } from 'lodash';

class DesignerProducts extends Component {
  render() {
    const designerId = parseInt(this.props.match.params.id);
    const productFilter = { designer: designerId };
    const designer = find(DESIGNERS, (d) => d.id === designerId);
    return (
    <div className="designer-container">
      <div className="designer-logo"></div>
      <Products productFilter={productFilter} heading={`DESIGNS BY ${designer.name}`} image={true}/>
    </div>
    );
  }
}

export default DesignerProducts;