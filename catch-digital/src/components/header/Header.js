import React, { Component } from 'react';
import './header.scss';
import Nav from './nav/Nav';
import Logo from './logo/Logo';

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
        <Logo />
      </header>
    );
  }
}

export default Header;
