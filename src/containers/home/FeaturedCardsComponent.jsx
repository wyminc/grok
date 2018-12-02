import React, { Component } from 'react';
import './styles.css';

import { CardOne, CardTwo, CardThree, CardFour  } from '../../components/CardComponent.jsx'
import { generateKeyPair } from 'crypto';
// import { url } from 'inspector';


class FeaturedCardsComponent extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      hover: false
    }
  }

  componentWillMount() {
    console.log('willMount Hits');
  }

  componentDidMount() {
    console.log('didMount Hits');
  }

  

  render() {
    console.log("this.state", this.state)
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
        <div
         onMouseEnter={() => this.setState({hover: true})}
         onMouseLeave={() => this.setState({hover: false})} 
         style={this.state.hover ? {...style.containerHover, ...style.cardHover} : {...style.container, ...style.card }}>
          <div style={style.card}>
            <div style={style.front}> 
              <div style={style.title}>Company Name</div>
            </div>
            <div style={style.info}>
              <div style={style.back}>
                <h3 style={style.title}>Company Name</h3>
                <p>Address</p>
                <p>Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// card styling 
const style = {
  container: {  //featured-card
    margin: "0 1% 0 1%",
    backgroundColor: "transparent",
    width: "25vw", 
    height: "25vh",
    perspective: "1000px",
    border: "1px solid black"
  },
  containerHover: {   // featured-card:hover
    margin: "0 1% 0 1%",
    backgroundColor: "transparent",
    width: "25vw", 
    height: "25vh",
    perspective: "1000px",
    transform: "rotateX(180deg)",
  }, 
  card: { // card
    position: "relative", 
    width: "100%", 
    height: "100%",
    transition: "transform 2s",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transform: "rotateX(180deg)"
  },
  cardHover: {
    position: "relative", 
    width: "100%", 
    height: "100%",
    transition: "transform 2s",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transform: "rotateX(180deg)"
  },
  front: {  
    color: "black", 
    position: "absolute", 
    width: "100%", 
    height: "100%", 
    backfaceVisibility: "hidden", 
    boxShadow: "5px 5px 10px grey", 
    zIndex: "1",
    backgroundColor: "grey"
  },
  title: {
    margin: "0 0 5% 0",
  },
  back: {
    color: "white"
  },
  info: {
    position: "absolute", 
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden", 
    boxShadow: "5px 5px 10px grey",
    transform: "rotateX(180deg)",
    zIndex: "2",
  }
}


export default FeaturedCardsComponent;