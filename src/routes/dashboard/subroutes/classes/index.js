import React from 'react';
import Loadable from 'react-loadable';

const Classes = Loadable({
 loader: () => import('./Classes'),
 loading: () => <div>Loading..</div>,
});

export default {
  path: '/classes',
  component: Classes,
}