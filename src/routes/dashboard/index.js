import React from 'react';
import Loadable from 'react-loadable';
 
const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: () => <div>Loading..</div>,
});

export default {
  path: '/dashboard',
  Component: Dashboard,
};
