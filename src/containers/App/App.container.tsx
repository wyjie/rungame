import React from 'react';
import { connect } from 'react-redux';

import App from './App.component';

export interface AppProps {
  name: string
}

const mapStateToProps = (state: any) => ({
  name: state.app.name,
});

const mapDispatchToProps = (dispatch: Function) => ({});

const AppContainer = (props: AppProps) => <App {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
