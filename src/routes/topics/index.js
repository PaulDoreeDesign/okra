import React from 'react';
import Loadable from 'react-loadable';
 
const Topics = Loadable({
  loader: () => import('./Topics'),
  loading: () => <div>Loading..</div>,
});

export default [
  {
    path: '/topics',
    Component: Topics,
  },
  {
    path: '/topics/:id',
    Component: Topics,
  },
];
