import React from 'react';
import CheckoutItem from './CheckoutItem';
import './Checkout.css';

const Checkout = ({ BasketData, BasketTotal, BasketDiscount, BasketFinal, CheckCoupon, ResetCoupon, CheckoutHide }) => {
  return (
    <div className='basket-checkout checkout'>
    <h1>Checkout</h1>
    <p className='checkout__intro'>Please return to basket to update items</p>

    <ul className='checkout__list'>
      {
        BasketData.map((data, i) => {
          return (
            <CheckoutItem 
              name = {BasketData[i].name}
              price = {BasketData[i].price}
            />
          );
        })
      }
    </ul>

    <p><span className='checkout__total'>SUB-TOTAL:</span> <span className='checkout__total--number'>£{Number(BasketTotal).toFixed(2)}</span></p>
    <p><span className='checkout__discount'>DISCOUNT:</span> <span className='checkout__discount--number'>£{Number(BasketDiscount).toFixed(2)}</span></p>
    <p><span className='checkout__final'>FINAL PRICE:</span> <span className='checkout__final--number'>£{Number(BasketFinal).toFixed(2)}</span></p>
    
    <div className="checkout__coupon">
      <input className='checkout__input' type='text' placeholder='Coupon...' />
      <button className='checkout__submit' onClick={CheckCoupon}> Apply </button>
      <button className='checkout__reset' onClick={ResetCoupon}> Reset </button>
    </div>

    <button className='checkout__basket' onClick={CheckoutHide}> &lt; Back to basket </button>

    <button className='checkout__continue'> Continue &gt;</button>

    </div>
  );
}

export default Checkout;