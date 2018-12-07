import React, { Component } from 'react';
import './styles.scss';

import {Card} from '../../components/CardComponent.jsx'
import cardBackground1 from "../../assets/card-background1.jpg";
import cardBackground3 from '../../assets/card-background3.jpg';
// import { url } from 'inspector';
// import { generateKeyPair } from 'crypto';

const background1 = `url(${cardBackground1})`;
const background3 = `url(${cardBackground3})`;

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
    console.log(React.version)
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
        <div className="featured-card">
          <div>
            <div>COMPANY NAME</div>
          </div>
        </div>
        {/* <div className="featured-card">
          <div className="card">
            <div 
              className="card-front"
              style={styles.front}
            > 
              <div style={styles.title}>Company Name</div>
            </div>
            <div 
              className="card-info"
              style={styles.back}
            >
              <div style={styles.info}>
                <h3>Company Name</h3>
                <p>Address</p>
                <p>Email</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

// card styling 
const styles = {
  front: {  
    backgroundImage: background1,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  title: {
    margin: "5% 5% 0 0",
    textAlign: "right",
    color: "black"
  },
  back: {
    backgroundImage: background3,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat", 
    color: "white"  
  },
  info: {

  }
}


export default FeaturedCardsComponent;

