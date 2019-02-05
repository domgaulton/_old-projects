import React, { Component } from 'react';
import CurrencyList from './CurrencyList';
import './index.css';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currencylist: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v2/ticker/?convert=GBP&limit=100')
    .then(response => response.json())
    .then(data => this.setState({ currencylist: Object.values(data.data) }))
  }

  onSearchChange = ( event ) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredCurrencyList = this.state.currencylist.filter(currency => {
      return currency.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })  
    return (
      <div>
        <h1>Crypto Currencies</h1>
        <SearchBox searchChange={ this.onSearchChange }/>
        <CurrencyList currencylist={ filteredCurrencyList } />
      </div>
    );
  }
}

export default App;