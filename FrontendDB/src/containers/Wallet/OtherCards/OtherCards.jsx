import React, { Component } from 'react';
import {connect} from "react-redux";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Card
import { AllCards } from "../../../CardComponent/CardComponent.jsx";
import {cardContainer, front, title, back, info, name, address, phone, email} from '../../../CardComponent/CardClassing.js';

//Actions
import { getAllCards } from "../../../actions/actions.js";

class OtherCards extends Component {
  constructor (props) {
    super(props) 
      this.state = {
         
      }
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;

    this.props.dispatch(getAllCards(id))
  }
    
    
  render() {
    console.log("PROPS", this.props);

    const { allCardsData } = this.props;

    return (
      <AllCards 
        cardContainer={cardContainer} 
        front={front}
        title={title}
        back={back}
        info={info}
        name={name}
        address={address}
        phone={phone}
        email={email}
        cards={allCardsData}
        // data={myCardData}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    allCardsData: state.allCardsData,
    allCardsCSS: state.allCardsCSS
  }
}

export default connect(mapStateToProps)(OtherCards)