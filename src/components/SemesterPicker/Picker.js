import React, { Fragment } from 'react';
import fp from 'lodash/fp';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    padding: 10,
  },
};

const YEAR_RANGE = 25;

const mapDatesToOptionObject = fp.map(date => [
  { value: `01/${date}`, label: `Fall semester ${date}` },
  { value: `08/${date}`, label: `Spring semester ${date}` },
]);

const createMenuOptionsForDates = (date) => {
  const dates = [];

  for (let i = (date - YEAR_RANGE); i < (date + YEAR_RANGE); i++) {
    dates.push(i);
  }

  return dates;
}

const SemesterPicker = props => {
  const { classes } = props;

  return (
    <Select
      name="Semester"
      className={classes.input}
      options={fp.compose(
        fp.flatten,
        mapDatesToOptionObject,
        createMenuOptionsForDates
      )(new Date().getFullYear())}
      {...props}
    />
  );
}

export default withStyles(styles)(SemesterPicker);
