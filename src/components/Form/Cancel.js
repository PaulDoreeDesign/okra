import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import common from '@material-ui/core/colors/common';
import { withStyles } from '@material-ui/core/styles';
import Loading from '../Loading';

const styles = {
  cancel: {
    padding: '12px 30px',
    color: '#333',
    borderRadius: 3,
    border: '1px solid #ccc',
    cursor: 'pointer',
    display: 'flex',
    minWidth: 98,
    justifyContent: 'center',
    outline: 'none',
  },
  submitIsDisabled: {
    opacity: '.5',
    pointerEvents: 'none',
  },
};

const Cancel = props => {
  const {
    classes,
    name = 'Cancel',
    onClick,
  } = props;

  return (
    <button
      onClick={ onClick}
      className={classes.cancel}
    >
      {name}
    </button>
  );
};

export default withStyles(styles)(Cancel);