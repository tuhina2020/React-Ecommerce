import React from 'react';
import PropTypes from "prop-types";
import './tags.css';
const propTypes = {
  tag: PropTypes.string
};

const defaultProps = {
	tag: ''
};

class Tags extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div className="hashtag" style={{display: "flex", padding: "0.3em"}}>
    	<div className="hash">#</div>
    	<div className="tag">{this.props.tag}</div>
    </div>)
  }
}

Tags.propTypes = propTypes;
Tags.defaultProps = defaultProps;

export default Tags;