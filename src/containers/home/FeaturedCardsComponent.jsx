import React, { Component } from 'react';
import './styles.css';

import {Card} from '../../components/CardComponent.jsx'
import { CardOne, CardTwo, CardThree, CardFour  } from '../../components/CardComponent.jsx'
import { generateKeyPair } from 'crypto';
import cardBackground1 from "../../assets/card-background1.jpg";
// import { url } from 'inspector';
import cardBackground3 from '../../assets/card-background3.jpg';


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
          <Card
            cardContainer={"card"}
            front={"card-front one-front"}
            title={"one-title"}
            back={"card-info one-back"}
            info={"one-info"}
            name={"name"}
            address={"address"}
            phone={"phoneNumber"}
            email={"email"}
          />
        </div>
        <div className="featured-card">
          <Card
            cardContainer={"card"}
            front={"card-front two-front"}
            title={"two-title"}
            back={"card-info two-back"}
            info={"two-info"}
            name={"name"}
            address={"address"}
            phone={"phoneNumber"}
            email={"email"}          
          />
        </div>
        <div className="featured-card">
          <Card
            cardContainer={"card"}
            front={"card-front three-front"}
            title={"three-title"}
            back={"card-info three-back"}
            info={"three-info"}
            name={"name"}
            address={"address"}
            phone={"phoneNumber"}
            email={"email"}
          />
        </div>
        <div className="featured-card">
          <Card
            cardContainer={"card"}
            front={"card-front four-front"}
            title={"four-title"}
            back={"card-info four-back"}
            info={"four-info"}
            name={"name"}
            address={"address"}
            phone={"phoneNumber"}
            email={"email"}         
          />
        </div>
        <div
         className="featured-card"
        //  onMouseEnter={() => this.setState({hover: true})}
        //  onMouseLeave={() => this.setState({hover: false})} 
        //  style={this.state.hover ? {...style.containerHover, ...style.cardHover} : {...style.container, ...style.card }}
        >
          <div className="card"
          // style={style.card}
          >
            <div 
            className="card-front"
            style={styles.front}
            // style={style.front}
            > 
              <div style={styles.title}>Company Name</div>
            </div>
            <div className="card-info"
            // style={style.info}
            style={styles.back}
            >
              <div >
                <h3>Company Name</h3>
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
const styles = {
  container: {  //featured-card
    margin: "0 1% 0 1%",
    backgroundColor: "transparent",
    width: "25vw", 
    height: "25vh",
    perspective: "1000px",
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
  // cardHover: {
  //   position: "relative", 
  //   width: "100%", 
  //   height: "100%",
  //   transition: "transform 2s",
  //   transformStyle: "preserve-3d",
  //   boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  //   transform: "rotateX(180deg)"
  // },
  front: {  
    backgroundImage: "url(" + cardBackground1 + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
    // color: "black", 
    // position: "absolute", 
    // width: "100%", 
    // height: "100%", 
    // backfaceVisibility: "hidden", 
    // boxShadow: "5px 5px 10px grey", 
    // zIndex: "1",
    // backgroundColor: "grey"
  },
  title: {
    margin: "5% 5% 0 0",
    textAlign: "right",
    color: "blue"
  },
  back: {
    backgroundImage: "url(" + cardBackground3 + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat", 
    color: "white",
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