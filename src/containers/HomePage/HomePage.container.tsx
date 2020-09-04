import React from 'react';
import { connect } from 'react-redux';

import HomePage from './HomePage.component';

const HomePageContainer = () => <HomePage />;

export default connect(
  null,
)(HomePageContainer);
