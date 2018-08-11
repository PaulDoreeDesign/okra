import fp from 'lodash/fp';
import React from 'react';
import { Route } from 'react-router-dom';
import days from './days';
import topics from './topics';
import classes from './classes';
import settings from './settings';
import semesters from './semesters';

const routes = [
  days,
  ...topics,
  classes,
  settings,
  semesters,
];

const mapRoutesToRouteComponent = fp.map(route => <Route key={route.path} {...route} />);

const ContentContainer = props => {
  return mapRoutesToRouteComponent(routes);
}

export default ContentContainer;
