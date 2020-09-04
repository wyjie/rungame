import React from 'react';
import { connect } from 'react-redux';

import App from './App.component';

const AppContainer = () => <App />;

export default connect(
  null,
  null,
)(AppContainer);
