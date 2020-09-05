import { CHANGE_DIRECTION, CHANGE_SNAKE, SNAKE_EAT, GAME_END, GAME_START } from './Snake.constants';
import { ChangeDirectionState } from './Snake.types';

export const changeDirectionAction = (payload: ChangeDirectionState) => ({
  type: CHANGE_DIRECTION,
  payload,
});

export const changeSnakeAction = () => ({
  type: CHANGE_SNAKE,
});

export const snakeEatAction = () => ({
  type: SNAKE_EAT,
});

export const gameStartAction = () => ({
  type: GAME_START,
});

export const gameEnd = () => ({
  type: GAME_END,
});
