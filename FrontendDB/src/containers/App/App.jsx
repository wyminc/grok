import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//~~~~ COMPONENTS ~~~~//
import Header from '../Header/HeaderComponent.jsx'
import Footer from '../Footer/FooterComponent.jsx'

//~~~~ CONTAINERS ~~~~//
import Home from '../Home/index.jsx';
import MyCard from "../../containers/Wallet/MyCard/MyCard.jsx"



class App extends Component {

  render() {
    // const url = this.props.match.path;

    console.log("MATCH?", this.props.match)

    return (
      <div className="App">
        <Header />

          <Router>

            <Switch>

              <Route exact path='/' component={Home} />

              {/* <Route exact path = {`${url}/wallet/:id`} /> */}

              <Route exact path = "/wallet/:id" component={MyCard} />

            </Switch>

          </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
