import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/Sidebar';
import ContentContainer from './ContentContainer';
import handleToggleIsSidebarOpen from '../../redux/actions/toggleSidebar';

const styles = {
  
};

const Dashboard = props => {
  const { classes, onToggleIsSidebarOpen, isSidebarOpen } = props;

  return (
    <div className={classes.sideBar}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={onToggleIsSidebarOpen(isSidebarOpen)}
      />
      <ContentContainer isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

const mapStateToProps = ({ isSidebarOpen }) => ({
  isSidebarOpen,
});

const mapDispatchToProps = dispatch => ({
  onToggleIsSidebarOpen: currentState =>
    () => dispatch(handleToggleIsSidebarOpen(!currentState)),
});

const SidebarWithStyles = withStyles(styles)(Dashboard);

export default connect(mapStateToProps, mapDispatchToProps)(SidebarWithStyles);
