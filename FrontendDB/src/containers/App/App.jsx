import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'
// import { withAuthenticator, includeGreetings } from 'aws-amplify-react'

//~~~~ COMPONENTS ~~~~//
import Header from '../Header/HeaderComponent.jsx'
import Footer from '../Footer/FooterComponent.jsx'

//~~~~ CONTAINERS ~~~~//
import Home from '../Home/index.jsx'
import Login from '../Login/Login.jsx'
import Register from '../Register/Register.jsx'
// import Logout from '../../components/LogoutButton.jsx';
// import { NOTFOUND } from 'dns';



class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isAuthenticated: false,
        user:{}
      }
  }

  componentWillMount () {
    // console.log("APP state", this.state)
    console.log("session", Auth.currentUserInfo().then(data => console.log(data)))

    console.log("APP MOUNT STATE", this.state)
    Auth.currentUserInfo()
      .then(data => {
      console.log("AUTH CHECK", data)
      this.setState({user: data.username, isAuthenticated: true})
      console.log("NEW APP STATE", this.state)
      })
      .catch(err => {
      console.log(err)
      this.setState({user:{}})
      })
    
  }
  
  // userHasAuthenticated = authenticated => {
  //   this.setState({ isAuthenticated: this });
  // }
  // handleLogout = event => {
  //   console.log("logout initiated")
  //   Auth.signOut()
  //   .then( data => {
  //     console.log("Logged Out", data)
  //   })
  //   .then( event => {
  //   // this.userHasAuthenticated(false);
  //   this.props.history.push('/')
  //   })
  //   .catch( err => {
  //     console.log(err)
  //   });
  // }

  

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user
    };
    return (
      <div className="App">
        <Header props={childProps}/>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} props={childProps} />
            <Route path='/logout' text="Logout" onClick={this.handleLogout} /> 
            <Route path='/login' component={Login} props={childProps} />
            <Route path='/signup' component={Register} props={childProps} />
            {/* <Route component={NOTFOUND} /> */}
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps= state => ({
  auth: state.isAuthenticated
})

export default connect(mapStateToProps)(App);
