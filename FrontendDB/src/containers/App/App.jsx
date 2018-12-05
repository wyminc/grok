import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//~~~~ COMPONENTS ~~~~//
import Header from '../Header/HeaderComponent.jsx'
import Footer from '../Footer/FooterComponent.jsx'

//~~~~ CONTAINERS ~~~~//
import Home from '../Home/index.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
