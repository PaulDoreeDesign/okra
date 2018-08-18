import React from 'react';
import fp from 'lodash/fp';
import { Route, Redirect, Switch } from 'react-router-dom';
import withUser from '../components/HOC/WithUser';
import Login from './login';
import topics from './topics';
import settings from './settings';
import semesters from './semesters';
import days from './days';
import classes from './classes';
import dashboard from './dashboard';

const authenticatedRoutes = [
  dashboard,
  topics,
  settings,
  semesters,
  days,
  classes,
];

const mapRoutes = fp.map(route => (<Route
  {...route}
  key={route.path}
  component={route.Component}
/>));

const RouterComponent = (props) => {
  const { model } = props;

  console.log('wtfff');

  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      {model.isLoggedIn ? (
        mapRoutes(authenticatedRoutes)
      ) : (
        <Route
          component={Login.Component}
          path={Login.path}
          exact={Login.exact}
        />)}
    </Switch>
  );
};

export default withUser(RouterComponent);
