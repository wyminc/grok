import React, { Component } from 'react';
import './styles.scss';
import Login from '../Login/Login.jsx'
import { Auth } from 'aws-amplify'

import logo from '../../assets/logo.png'

class Header extends Component {

  componentDidMount () {
    console.log("HEADER", this.authCheck())
  }

  handleLogout = event => {
    console.log("logout initiated")
    Auth.signOut()
    .then( data => {
      console.log("Logged Out", data)
    })
    .then( event => {
    // this.userHasAuthenticated(false);
    this.props.history.push('/')
    })
    .catch( err => {
      console.log(err)
    });
  }

  authCheck = async () => {
    Auth.currentUserInfo()
    .then(data => {
      console.log("AUTH CHECK", data.username)
      return data.username
    })
    .catch(err => {
      // console.log(err)
      return false
    })
    //   if(!data.username){
    //   return false
    // }else{
    //   return true
    // }})
  
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
          {!this.authCheck()
           ?<div className="login">
              <a href="/login"><h3>Login</h3></a>
            </div>
            :<div className="login">
              <a href="/" onClick={this.handleLogout}><h3>Logout</h3></a>
            </div>}
            <div className="signup">
              <a href="/signup"><h3>Premium</h3></a>
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

export default Header