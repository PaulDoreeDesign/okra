import React from 'react';
import Loadable from 'react-loadable';
 
const Topics = Loadable({
  loader: () => import('./Topics'),
  loading: () => <div>Loading..</div>,
});

export default [
  {
    path: '/topics',
    component: Topics,
  },
  {
    path: '/topics/:id',
    component: Topics,
  },
];
