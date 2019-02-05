import React from 'react';
import BasketItem from './BasketItem';
import './Basket.css';

const Basket = ({ BasketData, RemoveFromBasket, BasketTotal, HideBasket, CheckoutShow}) => {
  return (
    <div className='basket-checkout basket'>
    <h1>Basket</h1>
    <ul>
      {
        BasketData.map((data, i) => {
          return (
            <BasketItem 
              key={[i]}
              id={BasketData[i].id}
              name={BasketData[i].name}
              price={BasketData[i].price}
              RemoveFromBasket = {RemoveFromBasket}
            />
          );
        })
      }
    </ul>
    
    <span className='basket__total'>SUB-TOTAL:</span> <span className='basket__total--number'>£{Number(BasketTotal).toFixed(2)}</span>

    <p>To add a coupon, please advance to checkout</p>

    <button className='basket__shopping' onClick={HideBasket}> &lt; Return to shop</button>
    
    <button className='basket__checkout' onClick={CheckoutShow}>Checkout &gt;</button>
    
    </div>
  );
}

export default Basket;