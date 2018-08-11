import cn from 'classnames';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DashboardRouter from './subroutes';

const styles = {
  contentContainer: {
    transition: 'all .2s ease',
    paddingLeft: 75,
  },
  sidebarIsOpen: {
    paddingLeft: 225,
  },
};

const ContentContainer = props => {
  const { classes, isSidebarOpen } = props;

  return (
    <div className={cn(classes.contentContainer, {
      [classes.sidebarIsOpen]: isSidebarOpen,
    })}>
      <DashboardRouter />
    </div>
  );
}

export default withStyles(styles)(ContentContainer);
