import React, { Component } from 'react';
import './styles.scss';

import logo from '../../assets/logo.png'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="logo">
            {/* <a href="/"><h1>Grok</h1></a> */}
            <a href="/"><img src={logo} alt="logo" className="logo-image"/></a>
          </div>
          <div className="options">
            <div className="login">
              <a href="/login"><h3>Login</h3></a>
            </div>
            <div className="signup">
              <a href="/signup"><h3>Premium</h3></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header