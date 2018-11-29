import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/"><h1>Grok</h1></a>
        <a href="/login"><h3>Login</h3></a>
      </div>
    )
  }
}

export default Header