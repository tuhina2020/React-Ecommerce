//Dependencies
import React, { Component } from 'react';
//Internals
import AllDesigners from './AllDesigners';
import './index.css';

class Designers extends Component {
  render() {
    return (
      <div>
      	<div className="trending-boutiques">trending boutiques</div>
        <AllDesigners />
      </div>
    );
  }
}

export default Designers;
