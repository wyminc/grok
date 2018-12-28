//THIS WILL BE A SMART COMPONENT ONCE DATA IS IMPORTED
import React, { Component } from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import './styles.css';

import FeaturedCards from './FeaturedCards/FeaturedCards.jsx';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: ['hello', 'world', 'click', 'me']
    }
  }

  handleAdd = () => {
    const newItems = this.state.items.concat([
      prompt('enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove = (i) => {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
      {item}
      </div>
    ));

    return (
        <div id="top" className="home-body-container">
          <div className="banner-container">
          <a href="/newcardform" className="get-started">
            <button>GET STARTED</button>
          </a>
          <div className="grok-definition">
            <p className="definition-title">
              GROK
                </p>
            <p className="definition">
              to empathize or communicate sympathetically; <br /> establish a rapport.
                </p>
          </div>
          {/* <img className="banner" src="" alt="banner"/> */}
        </div>
        <div className="nav-bar-container">
          <div className="nav-bar">
            <a href="#about" className="nav-items">ABOUT GROK</a>
            <a href="#cards" className="nav-items">DESIGN YOUR OWN CARD</a>
            <a href="#social" className="nav-items">JOIN THE FAMILY</a> {/* Note: Social Media footer section*/}
          </div>
        </div>
        {/* <div id="cards">
          <div className="card-example-container">
            <div className="card-example-header">
              <h2>Design Your Own Card</h2>
              <p>Choose from one of our templates or customize it and make it your own!</p>
            </div>
            <FeaturedCards />      
          </div>
        </div> */}
        <div id="about" className="about-info">
        {/* <button onClick={this.handleAdd}>add</button>
          <CSSTransitionGroup
            transitionName="test"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {items}
          </CSSTransitionGroup> */}
        </div>
        <div id="social" className="social-media-footer">
          {/* [Add social media handles here] */}
        </div>
      </div>
    )
  }
}

export default Home;