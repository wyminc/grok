import React, { Component } from 'react';
import {connect} from "react-redux";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Card
import { Card } from "../../../CardComponent/CardComponent.jsx";
import {cardContainer, front, title, back, info, name, address, phone, email} from '../../../CardComponent/CardClassing.js';

//Actions
import { getMyCard } from "../../../actions/actions.js";

class MyCard extends Component {
  constructor (props) {
    super(props) 
      this.state = {
         
      }
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;

    this.props.dispatch(getMyCard(id))
  }
    
    
  render() {
    console.log("PROPS", this.props);

    const { myCardData } = this.props;

    return (
      <Card 
        cardContainer={cardContainer} 
        front={front}
        title={title}
        back={back}
        info={info}
        name={name}
        address={address}
        phone={phone}
        email={email}
        data={myCardData}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    myCardData: state.myCardData,
    myCardCSS: state.myCardCSS
  }
}

export default connect(mapStateToProps)(MyCard)

