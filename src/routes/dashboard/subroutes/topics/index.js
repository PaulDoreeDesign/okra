import Topics from './Topics';

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
