import React from "react";
import HomePage from "/components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  );
};
