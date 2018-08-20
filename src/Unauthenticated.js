import React from 'react';
import Login from './routes/login';
import { Switch, Route, Redirect } from 'react-router-dom';

const Unauthenticated = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login.Component} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
};

export default Unauthenticated;
