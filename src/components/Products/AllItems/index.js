//Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import get from 'lodash/get';
import Heart from '../../Heart/heart';
//Internals

const AllItems = ({products}) => (
  <div className="items">
    {map(products, (product)=> (
      <div key={product.id} className="item">
        <Heart/>
        <Link to={`/products/${product.id}`}>
        <div id="product-img">
          <img alt={product.name} src={product.img} style={{height: "20em"}}/>
        </div>
        <div className="product-details">
          <div className="product-name">{product.name}</div>
          <div className="product-description">{get(product, "description", "").slice(0,22) + "..."}</div>
        </div>
        </Link>
        <div className="price-add">
          <div className="product-price-list">&#8377; {product.price}</div>
        </div>
      </div>
    ))}
  </div>
)

export default AllItems;
