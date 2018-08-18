import React from 'react';
import Loadable from 'react-loadable';

const Days = Loadable({
 loader: () => import('./Days'),
 loading: () => <div>Loading..</div>,
});

export default {
  path: '/days',
  component: Days,
};
