import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';

const styles = {
  toast: {
    padding: 20,
    color: '#fff',
    backgroundColor: '#323543',
    borderRadius: 3,
  },
  body: {
    color: '#fff',
  },
  progress: {
    background: '#E85B5D',
  },
};

const WithModal = (ComposedComponent) => {
  class Toaster extends React.Component {
    notify = (message) => {
      const { classes } = this.props;

      return toast(message, {
        className: classes.toast,
        bodyClassName: classes.body,
        progressClassName: classes.progress,
      });  
    }

    render() {
      return (
        <Fragment>
          <ToastContainer />
          <ComposedComponent onToast={this.notify} {...this.props} />
        </Fragment>
      );
    }
  }

  return withStyles(styles)(Toaster);
}

export default WithModal;
