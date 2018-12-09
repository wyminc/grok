import React, { Component } from 'react';
import './styles.scss';
import Login from '../Login/Login.jsx'
import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from '../../assets/logo.png'

class Header extends Component {

  constructor(props) {
    super(props);
      this.state = {
        isAuthenticated: this.props.isAuthenticated,
        user: this.props.user
      }

  }

  componentDidMount () {
    console.log("HEADER", this.props)
    // Auth.currentUserInfo()
    //  .then(data => {
    //   console.log("AUTH CHECK", data)
    //   this.setState({user: data.username, isAuthenticated: true})
    //   console.log("STATE", this.state)
    //  })
    //  .catch(err => {
    //   console.log(err)
    //   this.setState({user:{}})

    //  })
  }

  handleLogout = event => {
    console.log("logout initiated")
    Auth.signOut()
    .then( data => {
      console.log("Logged Out", data)
      this.setState({user: {}, isAuthenticated: false})
    })
    .then( event => {
    // this.userHasAuthenticated(false);
    this.props.history.push('/')
    })
    .catch( err => {
      console.log(err)
    });
  }

  

  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="logo">
            {/* <a href="/"><h1>Grok</h1></a> */}
            <a href="/"><img src={logo} alt="logo" className="logo-image"/></a>
          </div>
          <div className="options">
            <div className="signup">
              <a href="/signup"><h3>Premium</h3></a>
            </div>
          {/* {!this.state.isAuthenticated */}
            <div className="login">
              <a href="/login"><h3>Login</h3></a>
            </div>
             <div className="login">
              <a href="/" onClick={this.handleLogout}><h3>Logout</h3></a>
            </div>
            
            {/* <div className="login">
              <a href="/logout"><h3>Logout</h3></a>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.isAuthenticated
})

export default connect(mapStateToProps)(Header)