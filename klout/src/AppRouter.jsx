import React from "react";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AddNetworks from "./components/AddNetworks";
import HomeResume from "./components/HomeResume";
import SocialProfile from "./components/SocialProfile";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/addnetworks" component={AddNetworks} />
          <Route exact path="/homeresume" component={HomeResume} />
          <Route exact path="/socialprofile" component={SocialProfile} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};
