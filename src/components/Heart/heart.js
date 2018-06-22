import React from 'react';
import PropTypes from "prop-types";

import './heart.css';
const propTypes = {
  style: PropTypes.object
};

const defaultProps = {
	style: {}
};

class Heart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className: 'empty',
      image: "/images/like/empty.svg"
    }
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick() {
    if(this.state.className === 'empty') {
      this.setState({
        className: 'full',
        image: "/images/like/full.svg"
      });
    } else {
      this.setState({
        className: 'empty',
        image: "/images/like/empty.svg"
      });
    }
  }

  render() {
    return (<img src={this.state.image} onClick={ this.btnClick } className={this.state.className} style={this.props.style}/>)
  }
}

Heart.propTypes = propTypes;
Heart.defaultProps = defaultProps;

export default Heart;