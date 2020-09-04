import Vector from '../../helpers/vector';
import { CHANGE_DIRECTION, CHANGE_SNAKE } from './Snake.constants';

export interface SankeProps {
  start: boolean,
  directionVector: Vector,
  maxLength: number,
  foodPosition: object,
  snake: Array<Vector>,
  changeSnake: Function,
  header: Function,
}

export interface SankeState {
  start: boolean,
  directionVector: Vector,
  maxLength: number,
  foodPosition: object,
  snake: Array<Vector>
  header: Vector,
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

export type SankeReducerAction = ChangeDirection | ChangeSnake;
