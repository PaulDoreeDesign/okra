import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import common from '@material-ui/core/colors/common';
import { withStyles } from '@material-ui/core/styles';
import Loading from '../Loading';

const styles = {
  submit: {
    padding: '12px 30px',
    backgroundColor: '#E85B5D',
    color: '#fff',
    borderRadius: 3,
    border: 'none',
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

const Submit = props => {
  const {
    classes,
    isDisabled,
    name = 'Submit',
    onClick,
    isSubmitting,
  } = props;

  return (
    <button
      onClick={isDisabled ? _.noop : onClick}
      disabled={isDisabled}
      className={cn(classes.submit, {
        [classes.submitIsDisabled]: isDisabled,
      })}
    >
      {
        isSubmitting 
        ? (<Loading style={{ 
            color: common['white'],
            height: 15,
            width: 15,
          }} />
        )
        : name
      }
    </button>
  );
};

export default withStyles(styles)(Submit);