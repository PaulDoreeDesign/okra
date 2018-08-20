import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Titlebar from '../../components/Titlebar';

const styles = {
  icon: {
    fontSize: 14,
    color: '#fff',
    cursor: 'pointer',
  },
};

class Days extends Component {
  state = { isModalOpen: false };

  get icons() {
    const { classes } = this.props;

    return [
      {
        id: 1,
        toolTipContent: "Add days",
        Component: AddCircleOutline,
        className: classes.icon,
        onClick: this.handleIconClick, 
      }
    ];
  }

  handleIconClick = () => this.setState(prevState => ({
    isModalOpen: !prevState.isModalOpen,
  }));

  render() {
    console.log('in days');

    const { isModalOpen } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Titlebar title="Days" icons={this.icons} />
      </div>
    );
  }
};

export default withStyles(styles)(Days);
