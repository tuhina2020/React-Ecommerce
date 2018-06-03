//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
//Internals
import './index.css';

const propTypes = {
  addItemToCart: PropTypes.func.isRequired,
};

class CartProducts extends Component {
  render() {
    return(
      <div>
        <h1>This is the cart</h1>
        <div className="items">
          {map(this.props.cartProducts, (product) => {
            <h1>{product.name}</h1>
          })}
        </div>
      </div>
    );
  }
}

CartProducts.propTypes = propTypes;

export default CartProducts;
