import React from 'react';
import { context } from '../Provider';

const WithUser = ComposedComponent => props => (
  <context.Consumer>
    {({ model, actions }) => (
      <ComposedComponent
        model={model}
        actions={actions}
        {...props}
      />
    )}
  </context.Consumer>
);

export default WithUser;
