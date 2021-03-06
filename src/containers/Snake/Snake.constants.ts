import Vector from '../../helpers/vector';

// game config
export const GAME_WIDTH = 40;
export const GAME_HEIGHT = 40;
export const GAME_ITEM_BLOCK_SIZE = 12;
export const GANE_ITEM_BORDER = 2;

// snack move vector
export const TOP_VECTOR = new Vector({ x: 0, y: -1 });
export const BOTTOM_VECTOR = new Vector({ x: 0, y: 1 });
export const LEFT_VECTOR = new Vector({ x: -1, y: 0 });
export const RIGHT_VECTOR = new Vector({ x: 1, y: 0 });

// Action types
export const CHANGE_DIRECTION = '@types/gemas/snake/CHANGE_DIRECTION';
export const CHANGE_SNAKE = '@types/gemas/snake/CHANGE_SNAKE';
export const SNAKE_EAT = '@types/gemas/snake/SNAKE_EAT';
export const GAME_START = '@types/gemas/snake/GAME_START';
export const GAME_END = '@types/gemas/snake/GAME_END';
