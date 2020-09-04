import produce, { Draft } from 'immer';

import { RIGHT_VECTOR, CHANGE_DIRECTION, CHANGE_SNAKE } from './Snake.constants';
import { SankeState, SankeReducerAction } from './Snake.types';
import Vector from '../../helpers/vector';

export const initialState = {
  start: true,
  directionVector: RIGHT_VECTOR,
  maxLength: 5,
  foodPosition: null,
  snake: [],
  header: new Vector({ x: 0, y: 0 }),
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
      draft.header = draft.header.add(draft.directionVector);
      draft.snake.push(draft.header.add(draft.directionVector));
      break;
    }
  }
});
export default reducer;
