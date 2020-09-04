import { GAME_WIDTH, GAME_HEIGHT, GAME_ITEM_BLOCK_SIZE } from './Snake.constants';
import { SnakeConvasSizeType, PositionType } from './Snake.types';
import Vector from '../../helpers/vector';

export const snakeConvasSize = () :SnakeConvasSizeType => ({
  height: GAME_HEIGHT * GAME_ITEM_BLOCK_SIZE,
  width: GAME_WIDTH * GAME_ITEM_BLOCK_SIZE,
});

export const getPosition = (vector: Vector) :PositionType => ({
  x: (vector.x - 1) * GAME_ITEM_BLOCK_SIZE,
  y: (vector.y - 1) * GAME_ITEM_BLOCK_SIZE,
});
