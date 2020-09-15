import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, user, callback, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} callback={callback} user={user} />;
        } else {
          callback(undefined);
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;
