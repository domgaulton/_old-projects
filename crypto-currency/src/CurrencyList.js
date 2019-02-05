import React from 'react';
import CurrencyItem from './CurrencyItem';

const CurrencyList = ({ currencylist }) => {
  return (
    <div className="currency-list">
      {
        currencylist.map((data, i) => {
          return (
            <CurrencyItem 
              key={currencylist[i].id}
              id={currencylist[i].id}
              name={currencylist[i].name}
              price={Math.round(currencylist[i].quotes.GBP.price * 100) / 100}
              change1hr={currencylist[i].quotes.GBP.percent_change_1h}
              change24hr={currencylist[i].quotes.GBP.percent_change_24h}
            />
          );
        })
      }
    </div>
  );
}

export default CurrencyList;