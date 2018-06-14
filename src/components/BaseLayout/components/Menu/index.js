import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DESIGNERS from '../../Data/designers.js';
import { map } from 'lodash';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutMenu: false
    };
  }
  
  handleHover = (event) => {
    this.setState({ showAboutMenu: true });
  };
  
  handleLeave = (event) => {
    this.setState({ showAboutMenu: false });
  };
  
  render() {
    let designer_submenu = map(DESIGNERS, (designer) => designer.name);
    return (
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <div className="nav__menu-container">
              <a>ABOUT US</a>
            </div>
          </li>
          <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
            <div className="nav__menu-container">
              <a onMouseEnter={this.handleHover}>
                VIEW BY DESIGNER
              </a>
            </div>
            <div className="submenu-container">
              <ReactCSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                { this.state.showAboutMenu && <Submenu items={designer_submenu}/> }
              </ReactCSSTransitionGroup>
            </div>
          </li>

          <li className="nav__menu-item">
            <div className="nav__menu-container">
              <a>VIEW BY PRODUCTS</a>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}