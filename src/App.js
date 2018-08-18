import React from 'react';
import cn from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-select/dist/react-select.css';
import 'react-toastify/dist/ReactToastify.css';
import { withStyles } from '@material-ui/core/styles';
import './styles/index.css';
import Sidebar from './components/Sidebar';
import Login from './routes/login';
import withUser from './components/HOC/WithUser';
import Router from './routes';
import handleToggleIsSidebarOpen from './redux/actions/toggleSidebar';
import Unauthenticated from './Unauthenticated';

const styles = {
  sidebarIsOpen: {
    paddingLeft: 300,
  },
  sidebarIsClosed: {
    paddingLeft: 75,
  },
};

const App = (props) => {
  const { onToggleIsSidebarOpen, isSidebarOpen, classes, model } = props;

  console.log(model);

  return (
    <div>
      {
        model.isLoggedIn ? (
          <React.Fragment>
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              onToggleSidebar={onToggleIsSidebarOpen(isSidebarOpen)}
            />
            <div className={cn({
              [classes.sidebarIsOpen]: isSidebarOpen,
              [classes.sidebarIsClosed]: !isSidebarOpen,
            })}
            >
              <Router />
            </div>
          </React.Fragment>
        ) : (
          <Unauthenticated />
        )
      }
    </div>
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

export default withUser(withRouter(connect(mapStateToProps, mapDispatchToProps)(AppWithStyles)));
