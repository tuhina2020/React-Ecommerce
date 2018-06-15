// Dependencies
import React, { Component } from 'react';
// Externals
import Navbar from './components/NavBar';
import './index.css';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Navbar />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
