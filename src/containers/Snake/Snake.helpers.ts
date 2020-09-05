import {
  GAME_WIDTH,
  GAME_HEIGHT,
  GAME_ITEM_BLOCK_SIZE,
  GANE_ITEM_BORDER,
  TOP_VECTOR,
  BOTTOM_VECTOR,
  LEFT_VECTOR,
  RIGHT_VECTOR,
} from './Snake.constants';
import { SnakeConvasSizeType, PositionType } from './Snake.types';
import Vector from '../../helpers/vector';

export const snakeConvasSize = () :SnakeConvasSizeType => ({
  height: GAME_HEIGHT * GAME_ITEM_BLOCK_SIZE + (GAME_HEIGHT - 1) * GANE_ITEM_BORDER,
  width: GAME_WIDTH * GAME_ITEM_BLOCK_SIZE + (GAME_WIDTH - 1) * GANE_ITEM_BORDER,
});

export const getPosition = (vector: Vector) :PositionType => ({
  x: vector.x * (GAME_ITEM_BLOCK_SIZE + GANE_ITEM_BORDER),
  y: vector.y * (GAME_ITEM_BLOCK_SIZE + GANE_ITEM_BORDER),
});

const verifyDirection = (direction: Vector, currentDirection: Vector): Vector => {
  const adverseDirection = direction.multiply(-1);
  if (adverseDirection.x === currentDirection.x && adverseDirection.y === currentDirection.y) {
    return currentDirection;
  }

  return direction;
};

export const getDirectionVector = (key: string, currnetDirection: Vector) :Vector => {
  switch (key) {
    case 'ArrowUp':
      return verifyDirection(TOP_VECTOR, currnetDirection);
    case 'ArrowDown':
      return verifyDirection(BOTTOM_VECTOR, currnetDirection);
    case 'ArrowLeft':
      return verifyDirection(LEFT_VECTOR, currnetDirection);
    case 'ArrowRight':
      return verifyDirection(RIGHT_VECTOR, currnetDirection);
    default:
      return currnetDirection;
  }
};

export const randomFood = (snake: Array<Vector>): Vector => {
  const x = Math.floor(Math.random() * GAME_WIDTH);
  const y = Math.floor(Math.random() * GAME_HEIGHT);
  let spik = false;
  for (let index = 0; index < snake.length; index++) {
    const snakeItem = snake[index];
    if (snakeItem.x === x && snakeItem.y === y) {
      spik = true;
      break;
    }
  }

  if (spik) {
    return randomFood(snake);
  }

  return new Vector({ x, y });
};
