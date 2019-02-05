import React from 'react';
import './Product.css';

const ProductItem = ({ id, image, name, category, price, quantity, AddToBasket }) => {
  return (
    <li className='product-item' data-id={id}>
      <img className='product-item__image' src={image} alt={name}/>
      <div className='product-item__description'>
        <h2>{name}</h2>
        <p>{category}</p>
        <p>£{Number(price).toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
        <button data-id={id} onClick={AddToBasket}>Add To Basket</button>
      </div>
    </li>
  );
}

export default ProductItem;
