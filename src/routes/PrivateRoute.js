import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";
import { PublicPaths } from "./index";

const PrivateRoute = ({ component: Component, shouldRedirect, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const content = Auth.isAuthenticated() ? (
          <Component {...props} />
        ) : shouldRedirect !== false ? (
          <Redirect
            to={{
              pathname: PublicPaths.LOGIN,
              state: { from: props.location }
            }}
          />
        ) : null;
        return content;
      }}
    />
  );
};

export default PrivateRoute;
