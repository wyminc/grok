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

    return (
      <div>
        Hihi
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    myCard: state.myCard
  }
}

export default connect(mapStateToProps)(MyCard)

// export default MyCard

