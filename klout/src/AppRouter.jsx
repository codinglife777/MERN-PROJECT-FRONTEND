import React from "react";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomeResume from "./components/HomeResume";
import SocialProfile from "./components/SocialProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/homeresume" component={HomeResume} />
          <Route path="/socialprofile" component={SocialProfile} />
        </Switch>
      </div>
    </Router>
  );
};
