import React, { Component } from 'react';

import { SankeProps } from './Snake.types';
import { snakeConvasSize, getPosition } from './Snake.helpers';
import { Wrapper } from './Snake.components';
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
    }, 2000);
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
    const { snake } = this.props;
    for (let xIndex = 0; xIndex < GAME_WIDTH; xIndex++) {
      for (let yIndex = 0; yIndex < GAME_HEIGHT; yIndex++) {
        this.drawBlock(new Vector({ x: xIndex, y: yIndex }), Colors.regular);
      }
    }

    for (let snakeIndex = 0; snakeIndex < snake.length; snakeIndex++) {
      this.drawBlock(snake[snakeIndex], '#fff');
    }

    requestAnimationFrame(this.draw);
  }

  render() {
    return <Wrapper><canvas id="sanke-canvas" /></Wrapper>;
  }
}

export default SnakeComponent;
