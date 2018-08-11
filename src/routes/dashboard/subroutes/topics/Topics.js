import _ from 'lodash';
import fp from 'lodash/fp';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Table from '../../../../components/Table';
import Titlebar from '../../../../components/Titlebar';

const styles = {
  root: {
  },
  tableRoot: {
    padding: 20,
  },
  icon: {
    fontSize: 14,
    color: '#fff',
    cursor: 'pointer',
  },
  tableContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px',
  },
  header: {
    fontWeight: 700,
  },
};

const MOCK_DATA = [
  {
    id: 1,
    name: 'Test',
    description: 'Test description',
    days: 25,
  },
  {
    id: 2,
    name: 'TestTwo',
    description: 'Test description two',
    days: 26,
  },
]

class Topics extends Component {
  state = { isModalOpen: false };

  get icons() {
    const { classes } = this.props;

    return [
      {
        id: 1,
        toolTipContent: "Add topics",
        Component: AddCircleOutline,
        className: classes.icon,
        onClick: this.handleIconClick, 
      }
    ];
  }

  get headers() {
    const { classes } = this.props;

    return [
      {
        title: 'Name',
        key: 'name',
        className: classes.header,
      },
      {
        title: 'Description',
        key: 'description',
        className: classes.header,
      },
      {
        title: 'Days planned',
        key: 'days',
        className: classes.header,
      },
      {
        title: 'Edit',
        key: 'edit',
        Component: <div>hur</div>,
        className: classes.header,
      },
    ];
  }

  get breadCrumbs() {
    const { id, match } = this.props;

    return [
      {
        name: match.params.id,
        link: `/classes/${match.params.id}`
      }
    ];
  }

  handleIconClick = () => this.setState(prevState => ({
    isModalOpen: !prevState.isModalOpen,
  }));

  render() {
    const { isModalOpen } = this.state;
    const { classes, match } = this.props;

    return (
      <div className={classes.root}>
        <Titlebar
          breadCrumbs={_.get(match.params, 'id') ? this.breadCrumbs : []}
          title="Topics"
          icons={this.icons}
        />
        <div className={classes.tableRoot}>
          <div className={classes.tableContainer}>
            <Table
              data={MOCK_DATA}
              headers={this.headers} 
            />
          </div>
        </div>
      </div>
    );
  }
};

export default fp.compose(
  withRouter,
  withStyles(styles),
)(Topics);
