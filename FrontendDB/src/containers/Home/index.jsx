//THIS WILL BE A SMART COMPONENT ONCE DATA IS IMPORTED
import React, { Component } from 'react';
import './styles.scss';

import FeaturedCards from './FeaturedCards/FeaturedCards.jsx'

class Home extends Component {

  render() {
    return (
      <div id="top" className="home-body-container">
        <div className="banner-container">
          <a href="/design">
            <button className="getStarted">GET STARTED</button>
          </a>  
              <div className="grok-definition">
                <p className="definition-title">
                  GROK
                </p>
                <p className="definition">
                  to empathize or communicate sympathetically; <br/> establish a rapport. 
                </p>
              </div>
          {/* <img className="banner" src="" alt="banner"/> */}
        </div>
        <div className="nav-bar-container">
          <div className="nav-bar">
            <a href="#cards" className="nav-items">Design Your Own Cards</a>
            <a href="#premium" className="nav-items">Premium</a>
            <a href="#about" className="nav-items">About</a>
            <a href="#signup" className="nav-items">Get Started</a>
          </div>
        </div>
        <div id="cards">
          <div className="card-example-container">
            <div className="card-example-header">
              {/* Design Your Own Cards */}
              <h2>Design Your Own Card</h2>
              <p>Choose from one of our templates or customize it and make it your own!</p>
            </div>
            <FeaturedCards />       
          </div>
        </div>
        {/* <div id="premium" className="premium-info">
          <PremiumSectionComponent/>
        </div> */}
        <div id="about" className="about-info">
          {/* <AboutSectionComponent/> */}
          {/* <p className="definition-title">
            GROK
          </p>
          <p className="definition">
            to empathize or communicate sympathetically; establish a rapport. 
          </p> */}
          
        </div>
        <div id="signup" className="signup-info">
          [Maybe Insert Something About Sign Up Here?]
        </div>
        <div className="footer">
        </div>
      </div>
    )
  }
}

export default Home;