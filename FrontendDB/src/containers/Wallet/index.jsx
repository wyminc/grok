import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom';

//Card
import { Card, AllCards } from "../../CardComponent/CardComponent.jsx";
import { cardContainer, front, title, back, info, company, name, address, phone, email } from '../../CardComponent/CardClassing.js';
import './styles.css';

//Actions
import { getMyCard, getAllCards, deleteCard } from "../../actions/actions.js";

// 
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
    if (this.props.authInfo.user) {
      const { user } = this.props.authInfo;
      this.props.dispatch(getMyCard(user))
      this.props.dispatch(getAllCards(user))
    }
  }

  componentDidUpdate = (prevProps) => {
    // console.log("previous props", prevProps);

    if (this.props.authInfo.user !== prevProps.authInfo.user) {
      const { user } = this.props.authInfo;
      this.props.dispatch(getMyCard(user))
      this.props.dispatch(getAllCards(user))
    }
  }

  render() {
    console.log("PROPS", this.props);
    const { user } = this.props.authInfo;

    const { myCard, allCards } = this.props;

    const { data, css } = myCard;

    // if (myCard.no_card === true) {
    //   return <Redirect to='/' />
    // }

    return (
      <div className="wallet-container">
        <div className="wallet-nav">
          <div className="nav-button">
            <LinkButton to='/wallet/mycard' title={"MINES"} />
          </div>
          <div className="nav-button">
            <LinkButton to='/wallet/othercards' title={"THEIRS"} />
          </div>
        </div>
        <div className="card-container">
          <Switch>
            <Route exact path='/wallet' render={() =>
              <div className="mycard">
                <Card
                  cardContainer={cardContainer}
                  front={front}
                  title={title}
                  back={back}
                  info={info}
                  company_name={company}
                  name={name}
                  address={address}
                  phone={phone}
                  email={email}
                  data={data}
                  styles={css}
                />
              </div>
            }
            />

            <Route exact path='/wallet/mycard' render={() =>
              <div>
                <Card
                  cardContainer={cardContainer}
                  front={front}
                  title={title}
                  back={back}
                  info={info}
                  company_name={company}
                  name={name}
                  address={address}
                  phone={phone}
                  email={email}
                  data={data}
                  styles={css}
                />
                <div className="deletebutton">
                  <button onClick={() => { this.props.dispatch(deleteCard(user)) }}>DELETE</button>
                </div>
              </div>
            }
            />

            <Route exact path='/wallet/othercards' render={() =>
              <AllCards
                cardContainer={cardContainer}
                front={front}
                title={title}
                back={back}
                info={info}
                company_name={company}
                name={name}
                address={address}
                phone={phone}
                email={email}
                cards={allCards}
              />}
            />

          </Switch>
        </div>
        {/* </div> */}
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