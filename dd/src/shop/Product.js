import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ ProductData, AddToBasket, ShowBasketDevice }) => {
  return (
    <div>
      <button className='shopping-basket' onClick={ShowBasketDevice}></button>
      <ul className='product-list'>
        {
          ProductData.map((data, i) => {
            return (
              <ProductItem 
                key={[i]}
                id={ProductData[i].id}
                image={ProductData[i].image} 
                name={ProductData[i].name}
                category={ProductData[i].category}
                price={ProductData[i].price} 
                quantity={ProductData[i].quantity} 
                AddToBasket = {AddToBasket}
              />
            );
          })
        }
      </ul>
    </div>
  );
}

export default ProductList;