import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

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
      toEditCard: false,
      toHome: false
    }
  }

  // componentDidMount = () => {
  //   if (this.props.authInfo.user) {
  //     const { user } = this.props.authInfo;
  //     this.props.dispatch(getMyCard(user))
  //     this.props.dispatch(getAllCards(user))
  //   }
  // }

  componentDidUpdate = (prevProps) => {
    // console.log("previous props", prevProps);
    if(this.props.added !== prevProps.added) {
      const { user } = this.props.authInfo;
      this.props.dispatch(getMyCard(user))
      this.props.dispatch(getAllCards(user))
    } else if (this.props.edited !== prevProps.edited) {
      const { user } = this.props.authInfo;
      this.props.dispatch(getMyCard(user))
      this.props.dispatch(getAllCards(user))
    } else if (this.props.authInfo.user !== prevProps.authInfo.user) {
      const { user } = this.props.authInfo;
      this.props.dispatch(getMyCard(user))
      this.props.dispatch(getAllCards(user))
    }
  }

  editRedirect = () => {
    this.setState({
      toEditCard: true
    })
  }

  deleteCard = (id) => {
    // const {user} = this.props.authInfo;
    this.props.dispatch(deleteCard(id));
    this.setState({
      toHome: true
    })
  }

  render() {
    console.log("PROPS", this.props);
    const { user } = this.props.authInfo;

    const { myCard, allCards } = this.props;

    const { data, style } = myCard;

    if (myCard.no_card === true) {
      return <Redirect to='/newcardform' />
    }

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    if (this.state.toEditCard === true) {
      return <Redirect to='/editcardform' />
    }

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
                  styles={style.css}
                />
                <div className="editbutton">
                  <button onClick={() => { this.editRedirect() }}>EDIT</button>
                </div>
                <div className="deletebutton">
                  <button onClick={() => { this.deleteCard(user) }}>DELETE</button>
                </div>
              </div>
            }
            />

            <Route exact path='/wallet/mycard' render={() =>
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
                styles={style.css}
              />}
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
    allCards: state.allCards,
    added: state.added,
    edited: state.edited
  }
}

export default connect(mapStateToProps)(Wallet)