import React, {Component } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Protected/Auth/Login";
import SignUp from "./components/Protected/Auth/SignUp";
import LogOut from "./components/Protected/Auth/LogOut";
import AddNetworks from "./components/Protected/Utilities/AddNetworks";
import Resume from "./components/Protected/Reports/Resume";
import Evolution from "./components/Protected/Reports/Evolution";
import SocialProfile from "./components/Protected/Reports/SocialProfile";
import Profile from "./components/Protected/Profile/Profile";
import Error404 from './components/Design/Error404'
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
require('dotenv').config()

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
          <Route exact path="/" render={(props) => <Home {...props} />} />
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
            render={(props) => <LogOut {...props} getUser={this.getTheUser} />}
          />

          <Route
            exact
            path="/addnetworks"
            render={(props) => (
              <AddNetworks  {...props} user={this.state.loggedInUser} key={this.state.loggedInUser} getUser={this.getTheUser}  />
            )}
          />

          <Route
            exact
            path="/resume"
            render={(props) => (
              <Resume  {...props} user={this.state.loggedInUser} key={this.state.loggedInUser} getUser={this.getTheUser}  />
            )}
          />

          <Route
            exact
            path="/socialprofile"
            render={(props) => (
              <SocialProfile {...props} user={this.state.loggedInUser} key={this.state.loggedInUser} getUser={this.getTheUser}  />
            )}
          />

<Route
            exact
            path="/evolution"
            render={(props) => (
              <Evolution {...props} user={this.state.loggedInUser} key={this.state.loggedInUser} getUser={this.getTheUser}  />
            )}
          />

          <Route
            path="/profile"
            render={(props) => (
              <Profile  {...props} user={this.state.loggedInUser} key={this.state.loggedInUser} getUser={this.getTheUser}  />
            )}
          />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}
