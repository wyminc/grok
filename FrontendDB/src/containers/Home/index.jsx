import React, { Component } from 'react';
import './styles.css';

//Slider 
import Carousel from 'nuka-carousel';

//Card Component
import {CardTemplates} from '../../CardComponent/CardComponent.jsx';

//Images
import grok_logo_white from '../../assets/grok-white-logo.png';
import lipstick from '../../assets/templates/lipstick-template.png';
import gold from '../../assets/templates/gold-template.png';
import marble from '../../assets/templates/marble-template.png';
import pineapple from '../../assets/templates/pineapple-template.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: [
        '../../assets/grok-white-logo.png',
        '../../assets/templates/lipstick-template.png',
        '../../assets/templates/gold-template.png',
        '../../assets/templates/pineapple-template.png'
      ]
    }
  }
  render() {

    return (
        <div className="home-body-container">
          <div className="nav-bar-container">
            <div className="nav-bar">
              <a href="#about" className="nav-items">ABOUT GROK</a>
              <a href="#design" className="nav-items">DESIGN YOUR OWN CARD</a>
              <a href="#contact" className="nav-items">CONTACT</a> 
            </div>
          </div>
          <div className="banner-container">
          <a href="/newcardform" className="get-started">
            <button>GET STARTED</button>
          </a>
          <div className="grok-definition">
            {/* <p className="grok-title">
              GROK
            </p> */}
            <div className="definition-title">
              GROK BUSINESS CARDS 
            </div>
            <div className="definition">
              <p className="words">
                Genuine Connections.            
              </p>
              <p className="words">
              Reduce Waste and Clutter.
              </p>
              <p className="words">
                Organize Your Network.
              </p>
              <p className="words">
                Keep Rapport. 
              </p>
            </div>
          </div>
          {/* <img className="banner" src="" alt="banner"/> */}
        </div>
        <div id="design" className="design-info">
          <div className="card-examples">
            <CardTemplates
              templates={this.state.templates}
            />
          </div>
          <div className="card-explanation">
          </div>
        </div>
        <div id="about" className="about-info">
        </div>
        <div id="contact" className="contact-footer">
          <div className="contact-info">
          
          </div>
          <div className="social-media">

          </div>
          <div className="back-to-top">
            <a href="#top" className="footer-items">BACK TO TOP</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;