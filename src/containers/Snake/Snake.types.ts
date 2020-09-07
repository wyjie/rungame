import Vector from '../../helpers/vector';
import {
  CHANGE_DIRECTION, CHANGE_SNAKE, SNAKE_EAT, GAME_START, GAME_END,
} from './Snake.constants';

export interface SankeProps {
  start: boolean,
  directionVector: Vector,
  maxLength: number,
  foodPosition: object,
  snake: Array<Vector>,
  header: Vector,
  food: Vector,
  changeSnake: Function,
  changeDirection: Function,
  snakeEat: Function,
  gameStart: Function,
}

export interface SankeState {
  start: boolean,
  directionVector: Vector,
  maxLength: number,
  foodPosition: object,
  snake: Array<Vector>
  header: Vector,
  food: Vector,
}

export interface SnakeConvasSizeType {
  height: number,
  width: number
}

export interface PositionType {
  x: number,
  y: number
}

export interface ChangeDirectionState {
  vector: Vector
}

export interface ChangeDirection {
  type: typeof CHANGE_DIRECTION
  payload: ChangeDirectionState
}

export interface ChangeSnake {
  type: typeof CHANGE_SNAKE
}

export interface SnakeEat {
  type: typeof SNAKE_EAT
}

export interface GameStart {
  type: typeof GAME_START
}

export interface GameEnd {
  type: typeof GAME_END
}

export type SankeReducerAction = ChangeDirection | ChangeSnake | SnakeEat | GameStart | GameEnd;
