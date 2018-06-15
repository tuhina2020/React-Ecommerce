//Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
//Internals

const AllItems = ({products}) => (
  <div className="items">
    {map(products, (product)=> (
      <div key={product.id} className="item">
        <Icon small id="add-icon">add_shopping_cart</Icon>
        <Link to={`/products/${product.id}`}>
        <div className="product-img">
          <img alt={product.name} src={product.img} />
        </div>
        <div className="product-details">
          <h1 className="product-name">{product.name}</h1>
          <h4 className="product-description">{product.description.slice(0,22) + "..."}</h4>
        </div>
        </Link>
        <div className="price-add">
          <h5 className="product-price">${product.price}</h5>
        </div>
      </div>
    ))}
  </div>
)

export default AllItems;
