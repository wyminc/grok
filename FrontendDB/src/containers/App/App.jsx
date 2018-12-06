import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//~~~~ COMPONENTS ~~~~//
import Header from '../Header/HeaderComponent.jsx'
import Footer from '../Footer/FooterComponent.jsx'

//~~~~ CONTAINERS ~~~~//
import Home from '../Home/index.jsx'
import Login from '../Login/Login.jsx'



class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
