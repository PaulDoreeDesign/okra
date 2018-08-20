import fp from 'lodash/fp';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import withUser from '../../components/HOC/WithUser';

const handleLoginClick = (route, props) => () => {
  props.actions.handleUserLogin();
  props.history.push('/');
};

class Login extends Component {
  state = {};

  render() {
    console.log('hello');

    return (
      <div>
        <button onClick={handleLoginClick('/', this.props)}>
          Click to log in
        </button>
      </div>
    );
  }
}

export default fp.compose(
  withUser,
  withRouter,
)(Login);
