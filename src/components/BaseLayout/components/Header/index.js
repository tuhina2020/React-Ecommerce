//Dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';
//Internals
import './index.css';

const Header = () => (
  <div className="header">
    <h1 id="header-title">Shop Now</h1>
    <div className="links-header">
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/designers">DESIGNERS</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/collections">COLLECTION</NavLink></p>
    </div>
  </div>
)

export default Header;
