import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, userInSession, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userInSession) {
          return <Component {...props} userInSession={userInSession} {...rest} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;