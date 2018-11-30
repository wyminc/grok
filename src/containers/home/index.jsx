//THIS WILL BE A SMART COMPONENT ONCE DATA IS IMPORTED
import React, { Component } from 'react';
import './styles.scss';

import FeaturedCardsComponent from './FeaturedCardsComponent.jsx'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <FeaturedCardsComponent />
      </div>
    )
  }
}

export default Home;