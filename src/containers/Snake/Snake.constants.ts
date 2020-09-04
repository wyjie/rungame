import Vector from '../../helpers/vector';

// game config
export const GAME_WIDTH = 20;
export const GAME_HEIGHT = 20;
export const GAME_ITEM_BLOCK_SIZE = 20;

// snack move vector
export const TOP_VECTOR = new Vector({ x: 0, y: -1 });
export const BOTTOM_VECTOR = new Vector({ x: 0, y: 1 });
export const LEFT_VECTOR = new Vector({ x: -1, y: 0 });
export const RIGHT_VECTOR = new Vector({ x: 1, y: 0 });

// Action types
export const CHANGE_DIRECTION = '@types/gemas/snake/CHANGE_DIRECTION';
export const CHANGE_SNAKE = '@types/gemas/snake/CHANGE_SNAKE';
