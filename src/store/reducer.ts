import { combineReducers } from 'redux';

import SnakeReducer from '../containers/Snake/snake.reducer';

export default combineReducers({
  snake: SnakeReducer,
});
