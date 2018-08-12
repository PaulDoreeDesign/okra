import React from 'react';
import Loadable from 'react-loadable';
 
const Login = Loadable({
  loader: () => import('./Login'),
  loading: () => <div>Loading..</div>,
});

export default {
  path: '/login',
  Component: Login,
};
