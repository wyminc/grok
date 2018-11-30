import React, { Component } from 'react';
import './styles.scss';

import { CardOne, CardTwo } from '../../components/CardComponent.jsx'


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
      <div>
        <CardOne />
        <CardTwo />
      </div>

    )
  }
}

export default FeaturedCardsComponent;