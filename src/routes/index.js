import React from 'react';
import fp from 'lodash/fp';
import { Route, Redirect, Switch } from 'react-router-dom';
import withUser from '../components/HOC/WithUser';
import Login from './login';
import Dashboard from './dashboard';

const authenticatedRoutes = [
  Dashboard,
];

const mapRoutes = fp.map(route => (<Route
  {...route}
  key={route.path}
  component={route.Component}
/>));

const RouterComponent = (props) => {
  const { model } = props;

  return (
    <Switch>
      {model.isLoggedIn ? (
        mapRoutes(authenticatedRoutes)
      ) : (
        <Route
          component={Login.Component}
          path={Login.path}
          exact={Login.exact}
        />
      )}
      <Redirect to="/login" />
    </Switch>
  );
};

export default withUser(RouterComponent);
