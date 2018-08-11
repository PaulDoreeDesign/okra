import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const WithModal = (ComposedComponent) =>
  (props) => (
    <Dialog onClose={props.onModalClose} aria-labelledby="simple-dialog-title" {...props}>
      <DialogTitle id="simple-dialog-title">{props.title}</DialogTitle>
      <ComposedComponent {...props} />
    </Dialog>
  );

export default WithModal;
