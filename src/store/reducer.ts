import { combineReducers } from 'redux';

import AppReducer from '../containers/App/App.reducer';

export default combineReducers({
  app: AppReducer,
});
