import React from 'react';

const CurrencyItem = ({ id, name, price, change1hr, change24hr }) => {
  return (
    <div className="currency-list__card">
        <h2>{name}</h2>
        <p>£{price}</p>
        <div className="currency-list__card--detail">
          <div><span>1hr</span> <span className='changePercent'>{change1hr}%</span></div>
          <div><span>24hr</span> <span className='changePercent'>{change24hr}%</span></div>
        </div>
    </div>
  );
}

export default CurrencyItem;
