import React from 'react';
import './Checkout.css';

const CheckoutItem = ({ name, price }) => {
  return (
    <li>
      <div className='checkout__list--name'>{name}</div>
      <div className='checkout__list--price'>£{Number(price).toFixed(2)}</div>
    </li>
  );
}

export default CheckoutItem;