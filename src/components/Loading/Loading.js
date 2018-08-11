import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
};

const Loading = ({ style, classes }) => {
  return (<CircularProgress
    style={style}
    className={classes.progress}
  />);
}

export default withStyles(styles)(Loading);
