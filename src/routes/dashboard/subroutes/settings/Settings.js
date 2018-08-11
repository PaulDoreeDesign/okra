import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Titlebar from '../../../../components/Titlebar';

const styles = {
  icon: {
    fontSize: 14,
    color: '#fff',
    cursor: 'pointer',
  },
};

class Settings extends Component {
  state = { isModalOpen: false };

  get icons() {
    const { classes } = this.props;

    return [
    ];
  }

  handleIconClick = () => this.setState(prevState => ({
    isModalOpen: !prevState.isModalOpen,
  }));

  render() {
    const { isModalOpen } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Titlebar title="Settings" icons={this.icons} />
      </div>
    );
  }
};

export default withStyles(styles)(Settings);
