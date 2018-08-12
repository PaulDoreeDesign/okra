import React from 'react';
import Loadable from 'react-loadable';

const Semesters = Loadable({
 loader: () => import('./Semesters'),
 loading: () => <div>Loading..</div>,
});

export default {
  path: '/semesters',
  component: Semesters,
};
