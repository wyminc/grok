import React, { Component } from 'react';
import './styles.css';

import { CardOne, CardTwo } from '../../components/CardComponent.jsx'


class FeaturedCardsComponent extends Component {

  componentWillMount() {
    console.log('willMount Hits');
  }

  componentDidMount() {
    console.log('didMount Hits');
  }

  render() {
    return (
      <div>
        <CardOne />
        <CardTwo />
      </div>

    )
  }
}

export default FeaturedCardsComponent;