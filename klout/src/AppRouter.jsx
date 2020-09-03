import React from "react";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomeResume from "./components/HomeResume";
import { BrowserRouter as Router, Route } from "react-router-dom";


export const AppRouter = () => {
  return (
    <Router>
      <div>
        
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/homeresume" component={HomeResume} />
      </div>
    </Router>
  );
};
