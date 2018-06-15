// Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
// Internals
import './index.css';


export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="search_container">
      	<button type="submit" value="Submit" className="search_submit">
        	<img src="https://www.wildandwolf.com/wp-content/themes/ecommerce-theme_supadu/img/nav-search.png" alt="search"/>
        </button>
        <input type="text" style={{height: "1em", marginTop: "0", marginBottom: "0"}} value={this.state.value} onChange={this.handleChange} placeholder="Search"/>
      </form>
    );
  }
}
