import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Authenticated = (ComposedComponent) => {
  class Auth extends Component {
    render() {
      const { isLoggedIn } = this.props;

      // if (!isLoggedIn) {
      //   return <Redirect to="/login" />;
      // }
    
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ isLoggedIn }) => ({
    isLoggedIn,
  });
  
  return connect(mapStateToProps)(Auth);
}

export default Authenticated;