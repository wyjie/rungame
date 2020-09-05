import React, { Component } from 'react';

import { SankeProps } from './Snake.types';
import { snakeConvasSize, getPosition, getDirectionVector } from './Snake.helpers';
import { Wrapper, GameStart } from './Snake.components';
import { GAME_WIDTH, GAME_HEIGHT, GAME_ITEM_BLOCK_SIZE } from './Snake.constants';
import Vector from '../../helpers/vector';
import { Colors } from '../../themes';

class SnakeComponent extends Component<SankeProps> {
  canvas: any;

  ctx: any;

  constructor(props: SankeProps) {
    super(props);
    this.canvas = null;
    this.ctx = null;
  }

  componentDidMount() {
    this.init();
    this.draw();

    setInterval(() => {
      this.snakRun();
    }, 150);
  }

  snakRun() {
    const { changeSnake } = this.props;
    changeSnake();
  }

  drawBlock(vector: Vector, color: string) {
    const position = getPosition(vector);
    this.ctx.fillStyle = color;
    this.ctx.fillRect(position.x, position.y, GAME_ITEM_BLOCK_SIZE, GAME_ITEM_BLOCK_SIZE);
  }

  init() {
    this.canvas = document.getElementById('sanke-canvas');
    this.ctx = this.canvas.getContext('2d');
    const { height, width } = snakeConvasSize();
    this.canvas.width = width;
    this.canvas.height = height;
  }

  draw() {
    requestAnimationFrame(() => this.draw());
    const {
      start, snake, food, snakeEat, changeDirection, directionVector,
    } = this.props;
    this.ctx.fillStyle = Colors.snackBg;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (let xIndex = 0; xIndex < GAME_WIDTH; xIndex++) {
      for (let yIndex = 0; yIndex < GAME_HEIGHT; yIndex++) {
        this.drawBlock(new Vector({ x: xIndex, y: yIndex }), Colors.snackBgItem);
      }
    }

    if (!start) {
      return;
    }
    this.drawBlock(food, Colors.red);
    for (let snakeIndex = 0; snakeIndex < snake.length; snakeIndex++) {
      const snakeItem = snake[snakeIndex];
      this.drawBlock(snakeItem, Colors.white);
      if (snakeItem.x === food.x && snakeItem.y === food.y) {
        snakeEat();
      }
    }

    window.onkeydown = (e: any) => {
      const direction = getDirectionVector(e.key, directionVector);
      changeDirection({ vector: direction });
    };
  }

  render() {
    const { start, gameStart } = this.props;
    return (
      <Wrapper>
        {!start && (
          <div className="game-console">
            <div className="game-name">贪吃蛇</div>
            <GameStart onClick={() => gameStart()}>开始游戏</GameStart>
          </div>
        )}
        <canvas id="sanke-canvas" />
      </Wrapper>
    );
  }
}

export default SnakeComponent;
