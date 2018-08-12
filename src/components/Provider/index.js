import React from 'react';

export const context = React.createContext();

class Provider extends React.Component {
  state = {
    isLoggedIn: false,
  };

  get actions() {
    return {
      handleUserLogin: this.handleUserLogin,
    }
  }

  handleUserLogin = () => this.setState({
    isLoggedIn: true,
  });

  render() {
    return (
      <context.Provider value={{
        model: this.state,
        actions: this.actions,
      }}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export default Provider;
