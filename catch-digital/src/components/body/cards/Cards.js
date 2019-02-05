import React, { Component } from 'react';
import './cards.scss';

import PortfolioData from '../../../resources/PortfolioData.js';

class Cards extends Component {
  render() {
    return (
    	<div className="portfolio-cards">
       {
        PortfolioData.map((data, i) => {
          let background = PortfolioData[i].image;
          let cardStyle = {
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), transparent), url("+background+")"
          }
          return (
            <a key={[i]} 
              href={PortfolioData[i].link}
              className="portfolio-cards_card active"
              categories={PortfolioData[i].categories}
              style={cardStyle}
            >
              <div className="portfolio-cards_info">
                <h2>{PortfolioData[i].title}</h2>
                <p>{PortfolioData[i].subtitle}</p>
              </div>
            </a>
          );
        })
      }
      </div>
    );
  }
}

export default Cards;
