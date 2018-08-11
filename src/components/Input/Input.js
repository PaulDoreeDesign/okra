import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  input: {
    width: '100%',
    border: '1px solid #ddd',
    padding: '8px 12px',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: 3,
    fontSize: 14,
    '&::placeholder': {
      color: '#aaa',
    },
    '&:focus': {
      outline: 'none',
      borderColor: '#1681FB',
    },
  },
};

const InputWrapper = props => {
  const { classes, value, onChange, placeholder } = props;

  return (
    <input
      placeholder={placeholder}
      className={classes.input}
      value={value}
      onChange={onChange}
    />
  );
}

export default withStyles(styles)(InputWrapper);
