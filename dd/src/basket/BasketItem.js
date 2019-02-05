import React from 'react';

const BasketItem = ({ id, name, price, RemoveFromBasket}) => {
  return (
    <li data-id={id}>
      <div className='basket__delete' data-id={id} onClick={RemoveFromBasket}></div>
      <div className='basket__name'>{name}</div>
      <div className='basket__price'>£{Number(price).toFixed(2)}</div>
    </li>
  );
}

export default BasketItem;