import React from 'react';
import { connect } from 'react-redux';
import 'react-select/dist/react-select.css';
import 'react-toastify/dist/ReactToastify.css';
import { withStyles } from '@material-ui/core/styles';
import './styles/index.css';
import Sidebar from './components/Sidebar';
import Router from './routes';
import handleToggleIsSidebarOpen from './redux/actions/toggleSidebar';

const styles = {};

const App = (props) => {
  const { onToggleIsSidebarOpen, isSidebarOpen } = props;

  return (
    <React.Fragment>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={onToggleIsSidebarOpen(isSidebarOpen)}
      />
      <Router />
    </React.Fragment>
  );
};

const mapStateToProps = ({ isSidebarOpen }) => ({
  isSidebarOpen,
});

const mapDispatchToProps = dispatch => ({
  onToggleIsSidebarOpen: currentState =>
    () => dispatch(handleToggleIsSidebarOpen(!currentState)),
});

const AppWithStyles = withStyles(styles)(App);

export default connect(mapStateToProps, mapDispatchToProps)(AppWithStyles);
