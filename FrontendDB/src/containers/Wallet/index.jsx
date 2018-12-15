import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//Card
import { Card, AllCards } from "../../CardComponent/CardComponent.jsx";
import { cardContainer, front, title, back, info, company_name, name, address, phone, email } from '../../CardComponent/CardClassing.js';

//Actions
import { getMyCard, getAllCards } from "../../actions/actions.js";


//Function to create links
const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <p className="userProfile-btns">{props.title}</p>
    </Link>
  )
}

class Wallet extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount = () => {
    const { user } = this.props.authInfo;

    console.log("HIHI");

    this.props.dispatch(getMyCard("A100001001"))
    this.props.dispatch(getAllCards("A100001001"))
  }


  render() {
    console.log("PROPS", this.props);

    const { myCard, allCards } = this.props;

    const { data } = myCard;


    return (
      <div className="walletContainer">
        <div className="walletNav">
          <LinkButton to='/wallet/mycard' title={"Mines"} />

          <LinkButton to='/wallet/othercards' title={"Theirs"} />

          <Switch>
            <Route exact path='/wallet' render={() =>
              <Card
                cardContainer={cardContainer}
                front={front}
                title={title}
                back={back}
                info={info}
                company_name={company_name}
                name={name}
                address={address}
                phone={phone}
                email={email}
                data={data}
              />}
            />

            <Route exact path='/wallet/mycard' render={() =>
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
                data={data}
              />}
            />

            <Route exact path='/wallet/othercards' render={() =>
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
                cards={allCards}
              // data={myCardData}
              />}
            />

          </Switch>
        </div>
      </div>



    )
  }
}

const mapStateToProps = state => {
  return {
    authInfo: state.authInfo,
    myCard: state.myCard,
    allCards: state.allCards
  }
}

export default connect(mapStateToProps)(Wallet)