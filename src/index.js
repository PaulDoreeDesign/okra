import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import store from './redux/store';
import UserProvider from './components/Provider';

ReactDom.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
