import React from 'react';
import './filter.scss';

// import PortfolioData from '../../../resources/PortfolioData.js';
  // PortfolioData.map((data, i) => {
  //   const categories = data.categories;
  //   console.log(categories[0]);
  //   // const categoryArray = [];
  //   // categoryArray.push(categories)
    
  //   // console.log('Array', categoryArray);
  // })

// class Filter extends Component {
const Filter = () => {
  
  function showFilterMobile(){
    const filterItems = document.getElementsByClassName('filter_item');
    console.log(filterItems);
    for(let i=0;i<filterItems.length;i++){
      const filterItemsElement = filterItems[i].style.display;
      console.log(filterItemsElement);
      if ( filterItemsElement === "" ) {
        filterItems[i].style.display = "block"
      } else {
        filterItems[i].style.display = ""
      }
    }
  }

  function sortFilter(e){
    // Item Clicked
    const target = e.target;
    const category = target.innerHTML;
    
    // Underline filtered item
    const filterItems = document.getElementsByClassName('filter_item');
    for(let i=0;i<filterItems.length;i++){
      filterItems[i].classList.remove('filter_item--active');
    }
    target.classList.add('filter_item--active');
    
    // Do the sorting
    const portfolioCards = document.getElementsByClassName('portfolio-cards_card');
    for(let i=0;i<portfolioCards.length;i++){
      let cardCategories = portfolioCards[i].attributes.categories.value;
      if (category === 'All'){
        portfolioCards[i].classList.add('active');
      } else if (cardCategories.includes(category)) {
        portfolioCards[i].classList.add('active');
      } else {
        portfolioCards[i].classList.remove('active');
      }
    }
  }

  return (
    <div className="filter">
      <h1 className="filter_heading">Work</h1>
      <div className="filter_list" onClick={showFilterMobile}>
        <div className="filter_item" onClick={sortFilter}>All</div>
        <div className="filter_item" onClick={sortFilter}>Websites</div>
        <div className="filter_item" onClick={sortFilter}>Campaign</div>
        <div className="filter_item" onClick={sortFilter}>Content</div>
      </div>
    </div>
  );
}

export default Filter;
