import React, { Component } from 'react';
import './nav.scss';

class Nav extends Component {

  toggleNav(e){
    const nav = document.getElementById('navigation-items');
    nav.classList.toggle('primary-nav--active');
  }

  render() {
    return (
      <div>
        <div className="navigation-ui" onClick={this.toggleNav}>
        </div>
        <nav className= "primary-nav" id="navigation-items">
          <ul>
            <li><a href="https://www.google.com">Page One</a></li>
            <li><a href="https://www.google.com">Page Two</a></li>
            <li><a href="https://www.google.com">Page Three</a></li>
            <li><a href="https://www.google.com">Page Four</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;