import React, { useState, Component } from "react";
import HomePage from "./components/HomePage";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import LogOut from "./components/Auth/LogOut";
import AddNetworks from "./components/AddNetworks";
import HomeResume from "./components/HomeResume";
import SocialProfile from "./components/SocialProfile";
import Profile from "./components/Profile";
import { Route, Switch } from "react-router-dom";

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
            exact
            path="/signin"
            render={(props) => <SignIn {...props} getUser={this.getTheUser} />}
          />
          <Route
            exact
            path="/signup"
            render={(props) => <SignUp {...props} getUser={this.getTheUser} />}
          />
          <Route
            exact
            path="/logout"
            render={(props) => <LogOut {...props} callback={this.getTheUser} />}
          />
          <Route
            exact
            path="/addnetworks"
            render={(props) => <AddNetworks {...props} />}
          />
          <Route
            exact
            path="/homeresume"
            render={(props) => <HomeResume {...props} />}
          />
          <Route
            exact
            path="/socialprofile"
            render={(props) => <SocialProfile {...props} />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <Profile
                {...props}
                user={this.state.loggedInUser}
                key={this.state.loggedInUser}
                getUser={this.getTheUser}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
