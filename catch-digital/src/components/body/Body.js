import React, { Component } from 'react';
import Filter from './filter/Filter';
import Cards from './cards/Cards';
// import PortfolioData from '../../resources/PortfolioData.js';

class Body extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     filter: ''
  //   }
  // }

  render() {
    return (
      <div>
        <Filter />
        <Cards />
      </div>
    );
  }
}

export default Body;
