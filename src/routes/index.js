import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login"; 


export const PublicPaths = {
  LOGIN: "/login"
};

export const PrivatePaths = {  
  Dashboard: "/dashboard"
};

const publicRoutes = [ 
  /* Add paths for unauthorized users */
  { path: PublicPaths.LOGIN, exact: true, component: Login }
];

const privateRoutes = [ 
  /* Add paths for authorized users */
  { path: PrivatePaths.Dashboard, exact: true, component: Dashboard }
];

const Routes = () => (
  <Router>
    <Switch>
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      {privateRoutes.map((route, index) => (
        <PrivateRoute
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Redirect to={PublicPaths.LOGIN} />
    </Switch>
  </Router>
);

export default Routes;
