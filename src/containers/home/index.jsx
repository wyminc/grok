//THIS WILL BE A SMART COMPONENT ONCE DATA IS IMPORTED
import React, { Component } from 'react';
import './styles.scss';

import FeaturedCardsComponent from './FeaturedCardsComponent.jsx'

class Home extends Component {

  render() {
    return (
      <div className="home-body-container">
        <div className="banner-container">
          {/* <img className="banner" src="" alt="banner"/> */}
        </div>
        <div className="card-example-container">
          <FeaturedCardsComponent />       
        </div>
        <div className="about-info">
        
        </div>
        <div className="footer">
        </div>
      </div>
    )
  }
}

export default Home;