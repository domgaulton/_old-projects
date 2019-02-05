# Deloitte Digital Ecommerce App

Please take a moment to look at the File and Structure section below as well as the coupons section and future development ideas that I would implement going foward.

## Introduction / To Note
* In interview on Friday 03/08/18 Matt Dell and I discussed Deloitte and how they used react for lots of projects. I said I wasn't that familiar with it so when the ecommerce task was given to me, he said he'd like me to use react to see how I get on. I started off looking at the react functionality (as this was new to me) and in doing so I did not think too much about the CSS. In future would make use of SASS, linting and combing but for this task I mainly focused on react functionality.

## Getting Started
* Project taken from `create-react-app` - there is lots of documentation here to look at.
* ensure you have Node v6 or higher & git running on your local development machine.
* in your terminal type `git clone https://github.com/domgaulton/dd.git` which will download the repository.
* type `cd dd` next to change directory into the dd folder you've just cloned.
* run `npm install` in your terminal to install the package.json file.
* run `npm start` to install and load dependencies and the app - this will also load the browser.
* look inside src for `App.js` and then the folders for additional code (see below for more info).
* to build the project run (as per the associated zip) `npm run build` - the files must be hosted on a server.

## File and Structure

### Root
* We render `App.js` on the `Index.js` page.
* `App.js` manages the state and props for shop, basket and checkout below.

### Shop Folder
* Contains a products file `ProductData.js` with all product information. Next we have `ProductItem.js` which maps the items into the structure so that we can render each of them which is done in `Product.js`.

### Basket Folder
* Similar to shop folder, there is a `BasketItem.js` which maps the items in the Basket and then `Basket.js` to render the items that have been added.

### Checkout Folder
* Very similar to basket (see above). Note that when checkout shows on the app, items are prohibited from being added unless they go back to Basket. This was a solution I created so ease up coupon logic. This solution (lock in basket and move on) is one I have seen on various ecommerce sites including Amazon.

## Coupons
* 5OFF
* 10OVER50
* 15SHOES75

## Future Development Ideas
* Use `componentDidMount()` method to fetch products from an API and then setState of product list as per below;
~~~~
componentDidMount() { 
  fetch('{{API HERE}}')
  .then(response => response.json())
  .then(products => this.setState({ ProductData: products }));
}
* Have seen tutorials for Redux and the State Management - would look at this in the future to manage states.
~~~~