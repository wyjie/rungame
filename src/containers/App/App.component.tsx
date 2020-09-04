import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage';
import Snake from '../Snake';
import GlobalStyle from '../../globalStyle';
import Routers from '../../routers';

export interface AppProps {
  name: string
}

const AppComponent = () => (
  <>
    <Router>
      <Switch>
        <Route path={Routers.snake} component={Snake} />
        <Route path={Routers.homepage} component={HomePage} />
      </Switch>
    </Router>
    <GlobalStyle />
  </>
);

export default AppComponent;
