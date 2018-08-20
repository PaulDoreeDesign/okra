import fp from 'lodash/fp';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ClassComponent from './Class';

const styles = {
  root: {
    padding: 25,
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const mapClassesToClassComponent = props => fp.map(classObject => (
  <ClassComponent
    key={classObject.id}
    classObject={classObject}
    onClassEdit={props.onClassEdit}    
  />
));

const CategoryContainer = props => {
  const { classes, semesterClasses } = props;

  return (
    <div className={classes.root}>
      {mapClassesToClassComponent(props)(semesterClasses)}
    </div>
  );
};

const mapStateToProps = ({ semesterClasses }) => ({
  semesterClasses,
});

export default fp.compose(
  connect(mapStateToProps),
  withStyles(styles),
)(CategoryContainer);
