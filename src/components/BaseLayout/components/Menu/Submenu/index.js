import React, { Component } from 'react';
import { map } from 'lodash';

export default class Submenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  	let { items } = this.props;
    return (
      <ul className="nav__submenu">
      	{map(items, (item) => {
      	  <li className="nav__submenu-item ">
            <a>{item}</a>
          </li>
      	})}
      </ul>
    )
  }
}