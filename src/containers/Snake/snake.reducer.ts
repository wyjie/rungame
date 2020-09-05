import produce, { Draft } from 'immer';

import {
  RIGHT_VECTOR,
  CHANGE_DIRECTION,
  CHANGE_SNAKE,
  SNAKE_EAT,
  GAME_WIDTH,
  GAME_HEIGHT,
  GAME_START,
  GAME_END,
} from './Snake.constants';
import { SankeState, SankeReducerAction } from './Snake.types';
import Vector from '../../helpers/vector';
import { randomFood } from './Snake.helpers';

export const initialState = {
  start: false,
  directionVector: RIGHT_VECTOR,
  maxLength: 5,
  foodPosition: null,
  snake: [],
  header: new Vector({ x: 0, y: 0 }),
  food: randomFood([]),
};

/* eslint-disable default-case, no-param-reassign, no-unused-vars */
// eslint-disable-next-line max-len
const reducer = (state = initialState, action: SankeReducerAction) => produce(state, (draft: Draft<SankeState>) => {
  switch (action.type) {
    case CHANGE_DIRECTION: {
      draft.directionVector = action.payload.vector;
      break;
    }
    case CHANGE_SNAKE: {
      draft.snake.push(draft.header);
      draft.header = draft.header.add(draft.directionVector);
      if (draft.snake.length > draft.maxLength) {
        draft.snake.shift();
      }
      if (draft.header.x > GAME_WIDTH) {
        draft.header = new Vector({ x: 0, y: draft.header.y });
      }
      if (draft.header.x < 0) {
        draft.header = new Vector({ x: GAME_WIDTH, y: draft.header.y });
      }
      if (draft.header.y > GAME_HEIGHT) {
        draft.header = new Vector({ x: draft.header.x, y: 0 });
      }
      if (draft.header.y < 0) {
        draft.header = new Vector({ x: draft.header.x, y: GAME_HEIGHT });
      }
      break;
    }
    case SNAKE_EAT: {
      draft.maxLength += 1;
      draft.food = randomFood(draft.snake);
      break;
    }
    case GAME_START: {
      draft.start = true;
      break;
    }
    case GAME_END: {
      draft.start = false;
      break;
    }
  }
});
export default reducer;
