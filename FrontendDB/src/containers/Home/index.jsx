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

  render() {

    return (
        <div id="top" className="home-body-container">
          <div className="nav-bar-container">
            <div className="nav-bar">
              <a href="#about" className="nav-items">ABOUT GROK</a>
              <a href="#cards" className="nav-items">DESIGN YOUR OWN CARD</a>
              <a href="#social" className="nav-items">JOIN THE FAMILY</a> {/* Note: Social Media footer section*/}
            </div>
          </div>
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
        <div id="about" className="about-info">
        </div>
        <div id="social" className="social-media-footer">
          {/* [Add social media handles here] */}
        </div>
      </div>
    )
  }
}

export default Home;