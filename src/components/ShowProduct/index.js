//Dependencies
import React, { Component } from 'react';
import {find, get, map, isEmpty, compact} from 'lodash';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
//Internals
import PRODUCTS from '../Data/products.js';
import DESIGNERS from '../Data/designers.js';
import TAGS from '../Data/tags.js';
import Heart from '../Heart/heart';
import Tag from '../Tag/tags';
// import Utils from 'Utils';

import './index.css';

class ShowProduct extends Component {
  render () {
    const product = find(PRODUCTS, ['id', parseInt(this.props.match.params.id)]);
    const designer = find(DESIGNERS, ['id', get(product, "designer")]);
    const selected = TAGS.sort(() => .5 - Math.random()).slice(0, Math.max(Math.random()* TAGS.length, 8)) ;
    const tags = map(selected, (tag) => <Tag tag={tag}/>);

    /* let similar = map(PRODUCTS, (p) => {
      if (
        (p.gender === product.gender || p.designer === product.designer || p.category === product.category)
        && p.type === product.type
        && p.name !== product.name) {
        return(
          <Link to={`/products/${p.id}`}>
            <div key={p.id} className="item">
              <Link to={`/products/${p.id}`}>
              <div className="product-img-small">
                <img alt={p.name} src={p.img} />
              </div>
              <div className="product-details">
                <div className="product-name">{p.name}</div>
                <div className="product-description">{p.description}</div>
              </div>
              </Link>
            </div>
          </Link>
        )
      }
      else
        return null;
    });
    similar = compact(similar); */
    const heartStyle = {
      left: "5em",
      width: "3em",
      height: "3em"
    }
    return (
      <div className="show-product">
        <div className="item-wrapper">
          <Heart style={heartStyle}/>
          <div className="item-image">
            <img className="product-image" src={product.img} alt="product" />
          </div>
          <div className="item-name">
            <Link to={`/designers/${designer.id}`} className="designer-container">
              <span className="product-designer-name">by {designer.name}</span>
            </Link>
            <div className="product-name">{product.name}</div>
            <div className="product-bio">
              <p className="product-price">&#8377; {product.price}</p>
            </div>
            <div className="product-review">
                <img src="/images/like/full.svg" className="likes" style={{width: "2em", height: "2em"}}/>
                <span style={{fontSize: "1.5em", marginLeft: "0.33em"}}>{product.likes} </span>
            </div>
            <div className="product-tags">{tags}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProduct;
