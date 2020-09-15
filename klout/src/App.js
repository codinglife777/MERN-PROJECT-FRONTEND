import React, { Component } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Protected/Auth/Login";
import SignUp from "./components/Protected/Auth/SignUp";
import LogOut from "./components/Protected/Auth/LogOut";
import AddNetworks from "./components/Protected/Utilities/AddNetworks";
import Resume from "./components/Protected/Reports/Resume";
import Evolution from "./components/Protected/Reports/Evolution";
import SocialProfile from "./components/Protected/Reports/SocialProfile";
import Profile from "./components/Protected/Profile/Profile";
import Error404 from "./components/Design/Error404";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import AuthService from "./components/Protected/services/AuthService";
import Navbar from "./components/Design/NavBar";
import ProtectedRoute from "./components/Protected/Auth/ProtectedRoute";
require("dotenv").config();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  componentDidMount = () => {
    this.getTheUser();
    this.fetchUser();
  };

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then((response) => {
          this.setState({
            loggedInUser: response,
          });
        })
        .catch((err) => {
          this.setState({
            loggedInUser: false,
          });
        });
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj,
    });
  };
  render() {
    
    if (this.state.loggedInUser) {
      return (
        <div>
          <Navbar
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              path="/login"
              render={() => <Resume getUser={this.getTheUser} />}
            />
            <Route
              path="/signup"
              render={() => <Resume getUser={this.getTheUser} />}
            />
            <Route
              path="/logout"
              render={(props) => (
                <LogOut {...props} getUser={this.getTheUser} />
              )}
            />

            <Route
              exact
              path="/addnetworks"
              render={(props) => (
                <AddNetworks
                  {...props}
                  user={this.state.loggedInUser}
                  key={this.state.loggedInUser}
                  getUser={this.getTheUser}
                />
              )}
            />

            <Route
              exact
              path="/resume"
              render={(props) => (
                <Resume
                  {...props}
                  user={this.state.loggedInUser}
                  key={this.state.loggedInUser}
                  getUser={this.getTheUser}
                />
              )}
            />

            <Route
              exact
              path="/socialprofile"
              render={(props) => (
                <SocialProfile
                  {...props}
                  user={this.state.loggedInUser}
                  key={this.state.loggedInUser}
                  getUser={this.getTheUser}
                />
              )}
            />

            <Route
              exact
              path="/evolution"
              render={(props) => (
                <Evolution
                  {...props}
                  user={this.state.loggedInUser}
                  key={this.state.loggedInUser}
                  getUser={this.getTheUser}
                />
              )}
            />

            <ProtectedRoute
              path="/profile"
              component={Profile}
              user={this.state.loggedInUser}
            />

            <Route component={Error404} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div>
        <Navbar
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />
          <Switch>
            

            <Route exact path="/" render={() => <Home />} />
            <Route
              path="/login"
              render={() => <Login getUser={this.getTheUser} />}
            />
            <Route
              path="/signup"
              render={() => <SignUp getUser={this.getTheUser} />}
            />

            <Route
              path="/logout"
              render={() => <LogOut getUser={this.getTheUser} />}
            />

            <Route component={Error404} />
          </Switch>
        </div>
      );
    }
  }
}
