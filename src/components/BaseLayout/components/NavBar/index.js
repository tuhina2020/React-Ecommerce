// Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
// Internals
import './index.css';
import Search from '../Search';


export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return(
        <div>
          <div className="top">
            <NavLink id="logo" to="/">ModAlle</NavLink>
            <div id="search">
              <Search />
            </div>
          </div>
          <nav className="navbar">
            <div className="nav-links">
              <ul>
                <li>
                  <div className="nav__menu-container">
                    <NavLink activeClassName="selected" className="nav-link" exact to="/">ABOUT US</NavLink>
                  </div>
                </li>
                <li>
                  <div className="nav__menu-container">
                    <NavLink activeClassName="selected" className="nav-link" to="/designers">VIEW BY DESIGNER</NavLink>
                  </div>
                </li>
                <li>
                  <div className="nav__menu-container">
                    <NavLink activeClassName="selected" className="nav-link" to="/products">VIEW PRODUCTS</NavLink>
                  </div>
                </li>
              </ul>
            </div>
            <div className="shopping-cart">
              <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>
            </div>
          </nav>
        </div>
      );
  }
}
