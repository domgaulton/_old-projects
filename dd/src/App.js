import React, { Component } from 'react';
import 'reset-css';

// Products
import ProductList from './shop/Product.js';
import ProductData from './shop/ProductData.js';

// Basket
import Basket from './basket/Basket.js';

// Checkout
import Checkout from './checkout/Checkout.js';

// Empty Array for Basket Data (Items)
const BasketData = [];

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      ProductData: ProductData, 
      BasketData: BasketData,
      BasketTotal: 0,
      BasketDiscount: 0,
      BasketFinal: 0
    }
  }

  // function to get the total price of items, either 0 or using map and reduce to a new 'total' array we get the total value
  getBasketTotal = (event) => {
    if ( !BasketData.length ) {
      this.setState({ BasketTotal: 0 });
    } else {
      const total = BasketData.map(data => data.price).reduce((a, b) => a + b);
      this.setState({ BasketTotal: total });
    }    
  }

  onAddToBasket = (event) => {
    // Stop users adding when checkout shows
    if ( document.querySelector('.checkout').style.display === 'block' ) {
      alert('Please return to basket to update items');
    } else {
      // Item Clicked
      const item = ProductData[event.target.dataset.id];
      const id = item.id;
      
      // Check Quantity
      if (item.quantity === 0) {
        alert('Sorry, This Item is out of stock')
        return;
      } else {
        // Mobile only (icon to show item added)
        const shoppingBasket = document.querySelector('.shopping-basket');
        shoppingBasket.classList.add('add-item');
        shoppingBasket.addEventListener('transitionend', function(e) {
          shoppingBasket.classList.remove('add-item');
        })

        // Reduce Qty
        ProductData[id].quantity --;

        // Add Item
        BasketData.push(item);
        this.setState({ BasketData: BasketData });


        // Update Price
        this.getBasketTotal();
      }
    }
  }

  onRemoveFromBasket = (event) => {
    // Get data-id of item, find in array and remove it
    const id = Number(event.target.dataset.id);
    const index = BasketData.findIndex(data => data.id === id);
    BasketData.splice(index, 1);
    this.setState({ BasketData: BasketData });

    // Update Qty on Product Listing
    ProductData[id].quantity ++;
    
    // Update Price
    this.getBasketTotal();
  }

  // Checkout Page - Coupon functions
  onCheckCoupon = (event) => {
    const couponEntry = document.querySelector('.checkout__input').value;
    if (this.state.BasketDiscount === 0 && this.state.BasketTotal > 0) {
      switch(couponEntry.toUpperCase()) { 
        case '5OFF': { 
          this.showDiscount(5);
          break; 
        } 
        case '10OVER50': { 
          if (this.state.BasketTotal > 50) {
            this.showDiscount(10);
            break; 
          } else {
            alert('Your basket must exceed £50');
            break;
          }
        } 
        case '15SHOES75': {
          const category = 'footwear';
          // Creates an array with only the category above ('footwear') then checks to see if the array has items in
          const shoes = BasketData.filter(data => data.category.toLowerCase().includes(category.toLowerCase()));
          if (this.state.BasketTotal > 75 && shoes.length ) {
            this.showDiscount(15);
            break; 
          } else {
            alert('Your basket must contain footwear and exceed £75.00');
            break;
          }
        } 
        case '': {
          alert('Please enter a coupon code');
          break; 
        }
        default: {
          alert('Appologies, we do not recognise this coupon');
          break; 
        }
      }
    } else {
      return;
    }
  }

  onResetCoupon = (event) => {
    this.showDiscount(0);
    document.querySelector('.checkout__submit').innerHTML = 'Apply';
    document.querySelector('.checkout__input').value = '';
    document.querySelector('.checkout__input').style.display = 'inline-block';
  }

  showDiscount = (discount) => {
    this.setState({ BasketDiscount: discount });
    const finalPrice = this.state.BasketTotal - discount;
    this.setState({ BasketFinal: finalPrice });
    document.querySelector('.checkout__submit').innerHTML = '&#10004';
    document.querySelector('.checkout__input').style.display = 'none';
  }

  // Checkout and Basket Show / Hide Function used below
  basketCheckoutToggle(basketProperty, checkoutProperty){
    const basket = document.querySelector('.basket');
    basket.style.display = basketProperty; 
    const checkout = document.querySelector('.checkout');
    checkout.style.display = checkoutProperty; 
  }

  onShowBasketDevice = (event) => {
    this.basketCheckoutToggle('block', 'none');
  }

  onHideBasket = (event) => {
    this.basketCheckoutToggle('none', 'none');
  }

  onCheckoutShow = (event) => {
    this.basketCheckoutToggle('none', 'block'); 
    this.onResetCoupon();
  }

  onCheckoutHide = (event) => {
    this.basketCheckoutToggle('block', 'none');
    this.setState({ BasketDiscount: 0 });
    this.setState({ BasketFinal: 0 });
  }

  // Lifestyle method Render
  render() {
    return (
      <div>
        <ProductList 
          ProductData = { this.state.ProductData }
          AddToBasket = { this.onAddToBasket } 
          ShowBasketDevice = { this.onShowBasketDevice }
        />
        <Basket 
          BasketData = { BasketData }
          RemoveFromBasket = { this.onRemoveFromBasket }
          BasketTotal = {this.state.BasketTotal }
          HideBasket = {this.onHideBasket }
          CheckoutShow = { this.onCheckoutShow }
        />
        <Checkout 
          BasketData = { BasketData }
          BasketTotal = { this.state.BasketTotal }
          BasketDiscount = { this.state.BasketDiscount }
          BasketFinal = { this.state.BasketFinal }
          CheckoutHide = { this.onCheckoutHide }
          CheckCoupon = { this.onCheckCoupon }
          ResetCoupon = { this.onResetCoupon }
        />
      </div>
    );
  }
}

export default App;
