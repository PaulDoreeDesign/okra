import React from 'react';
import Loadable from 'react-loadable';
 
const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: () => <div>Loading..</div>,
});

export default {
  path: '/settings',
  component: Settings,
};
