import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage';
import Snake from '../Snake';
import Polygon from '../Polygon';
import GlobalStyle from '../../globalStyle';
import DNA from '../DNA';
import Routers from '../../routers';

export interface AppProps {
  name: string
}

const AppComponent = () => (
  <>
    <Router>
      <Switch>
        <Route path={Routers.snake} component={Snake} />
        <Route path={Routers.polygon} component={Polygon} />
        <Route path={Routers.dna} component={DNA} />
        <Route path={Routers.homepage} component={HomePage} />
      </Switch>
    </Router>
    <GlobalStyle />
  </>
);

export default AppComponent;
