import React, {Component } from "react";
import HomePage from "./components/HomePage";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import LogOut from "./components/Auth/LogOut";
import AddNetworks from "./components/AddNetworks";
import HomeResume from "./components/HomeResume";
import SocialProfile from "./components/SocialProfile";
import Profile from "./components/Profile/Profile";
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import CardProfile from "./components/Profile/CardProfile";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
    };
  }

  getTheUser = (userObject) => {
    this.setState(
      {
        loggedInUser: userObject,
      },
      () => {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(this.state.loggedInUser)
        );
      }
    );
  };
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage />} />
          <Route
            
            path="/login"
            render={(props) => <Login {...props} getUser={this.getTheUser} />}
          />
          <Route
            
            path="/signup"
            render={(props) => <SignUp {...props} getUser={this.getTheUser} />}
          />
          <Route
            
            path="/logout"
            render={(props) => <LogOut {...props} callback={this.getTheUser} />}
          />
          <Route
            
            path="/addnetworks"
            render={(props) => <AddNetworks {...props} />}
          />
          <Route
            
            path="/homeresume"
            render={(props) => <HomeResume {...props} />}
          />
          <Route
            
            path="/socialprofile"
            render={(props) => <SocialProfile {...props} />}
          />
          <Route
            
            path="/profile"
            render={(props) => (
              <Profile
              {...props} user={this.state.loggedInUser} key={this.state.loggedInUser} getUser={this.getTheUser} 
              />
            )}
          />
           <Route path="/user/:id" render={(props) => <CardProfile {...props} user={this.state.loggedInUser} key={this.state.loggedInUser} getUser={this.getTheUser}  />} />
        </Switch>
      </div>
    );
  }
}
