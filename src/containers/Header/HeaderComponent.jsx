import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="logo">
            <a href="/"><h1>Grok</h1></a>
          </div>
          <div className="options">
            <div className="login">
              <a href="/login"><h3>Login</h3></a>
            </div>
            <div className="design-card">
              <a href="/design"><h3>Design Your Own</h3></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header