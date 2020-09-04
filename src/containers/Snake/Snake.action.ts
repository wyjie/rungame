import { CHANGE_DIRECTION, CHANGE_SNAKE } from './Snake.constants';
import { ChangeDirectionState } from './Snake.types';

export const changeDirectionAction = (payload: ChangeDirectionState) => ({
  type: CHANGE_DIRECTION,
  payload,
});

export const changeSnakeAction = () => ({
  type: CHANGE_SNAKE,
});
