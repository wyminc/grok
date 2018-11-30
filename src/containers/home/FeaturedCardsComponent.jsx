import React, { Component } from 'react';
import './styles.scss';

import { CardOne, CardTwo, CardThree, CardFour  } from '../../components/CardComponent.jsx'


class FeaturedCardsComponent extends Component {

  componentWillMount() {
    console.log('willMount Hits');
  }

  componentDidMount() {
    console.log('didMount Hits');
    console.log(React.version)
  }

  render() {
    return (
      <div className="featured-card-container">
        <div className="featured-card">
          <CardOne />
        </div>
        <div className="featured-card">
          <CardTwo />
        </div>
        <div className="featured-card">
          <CardThree/>
        </div>
        <div className="featured-card">
          <CardFour/>
        </div>
        {/* <div className="card-play">
        <div className="card-inner">
        <div className="card-front">
          <p>Front</p>
        </div>
        <div className="card-back">
        <p>Back</p>
        </div>
        </div>
        </div> */}
      </div>


    )
  }
}

export default FeaturedCardsComponent;