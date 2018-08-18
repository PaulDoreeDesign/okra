import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import withUser from '../components/HOC/WithUser';
import Login from './login';
import Topics from './topics/Topics';
import settings from './settings';
import semesters from './semesters';
import days from './days';
import classes from './classes';
import dashboard from './dashboard';

const RouterComponent = (props) => {
  const { model = {} } = props;

  console.log('here', model);

  if (!model.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Switch>
      <Route path="/semesters" component={semesters.Component} />
      <Route path="/days" component={days.Component} />
      <Route path="/topics" component={Topics} />
      <Route path="/topics/:id" component={Topics} />
      <Route path="/settings" component={settings.Component} />
      <Route path="/dashboard" component={dashboard.Component} />
      <Redirect exact from="/" to="/dashboard" />
    </Switch>
  );
};

export default withUser(RouterComponent);
