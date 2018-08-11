import React from 'react';
import fp from 'lodash/fp';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

const styles = {
  root: {
    backgroundColor: '#fff',
    height: 70,
  },
  titleBar: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  iconBox: {
    flex: 3,
    textAlign: 'right',
    backgroundColor: '#A8C0ED',
    padding: 5,
    borderRadius: '100%',
    color: '#fff',
  },
  title: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
  },
  crumbs: {
    marginLeft: 10,
    color: '#ccc',
  },
  link: {
    textDecoration: 'none',
    color: '#ccc',
    marginLeft: 10,
    '&:hover': {
      color: '#bbb',
    },
  },
};

const mapIcons = classes => fp.map(icon => (
  <div key={icon.id} className={icon.containerClasses || classes.iconBox}>
    {
      icon.toolTipContent
      ? (
        <Tooltip title={icon.toolTipContent} placement="bottom-end">
          <icon.Component
            onClick={icon.onClick}
            className={icon.className}
          />
        </Tooltip>
      ) : (
        <icon.Component
          onClick={icon.onClick}
          className={icon.className}
        />
      )
    }
  </div>
));

const mapBreadCrumbs = classes => fp.map(crumb => (
  <div>
    > 
    <NavLink
      className={classes.link}
      to={crumb.link}
    >
      {crumb.name}
    </NavLink>
  </div>
));

const Titlebar = props => {
  const { classes, icons = [], title = "Title", breadCrumbs } = props;

  console.log(breadCrumbs);

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.titleBar}>
        <Typography className={classes.title}>
          {title}
          <div className={classes.crumbs}>
            {mapBreadCrumbs(classes)(breadCrumbs)}
          </div>
        </Typography>
        <Typography>
          {mapIcons(classes)(icons)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Titlebar);
