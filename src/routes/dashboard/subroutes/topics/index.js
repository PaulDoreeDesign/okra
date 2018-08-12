import React from 'react';
import Loadable from 'react-loadable';
 
const Topics = Loadable({
  loader: () => import('./Topics'),
  loading: () => <div>Loading..</div>,
});

export default [
  {
    exact: true,
    path: '/topics',
    component: Topics,
  },
  {
    exact: true,
    path: '/topics/:id',
    component: Topics,
  },
];
