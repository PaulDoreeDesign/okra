import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import ClassForm from './ClassForm';
import ClassContainer from './ClassContainer';
import Titlebar from '../../components/Titlebar';

const styles = {
  icon: {
    fontSize: 14,
    color: '#fff',
    cursor: 'pointer',
  },
};

class Classes extends Component {
  state = {
    isModalOpen: false,
    isFormEditing: false,
    classEdited: null,
  };

  get icons() {
    const { classes } = this.props;

    return [
      {
        id: 1,
        toolTipContent: "Add class",
        Component: AddCircleOutline,
        className: classes.icon,
        onClick: this.handleIconClick, 
      }
    ];
  }

  handleIconClick = () => this.setState(prevState => ({
    isModalOpen: !prevState.isModalOpen,
  }));

  handleEditModalClose = () => this.setState({
    isFormEditing: false,
    classEdited: null,
  });

  handleModalIsEditing = classEdited => () => 
    this.setState({
      isFormEditing: true,
      classEdited,
    });

  render() {
    const { isModalOpen, isFormEditing, classEdited } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Titlebar title="Classes" icons={this.icons} />
        <ClassContainer onClassEdit={this.handleModalIsEditing} />
        <ClassForm
          open={isModalOpen || isFormEditing}
          onModalClose={isFormEditing
            ? this.handleEditModalClose
            : this.handleIconClick
          }
          title={classEdited
            ? `Editing class ${classEdited.name}`
            : "Create a new class"
          }
        />
      </div>
    );
  }
};

export default withStyles(styles)(Classes);
