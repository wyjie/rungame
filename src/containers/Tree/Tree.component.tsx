/* eslint-disable max-classes-per-file */
import React, { Component, RefObject } from 'react';

import { Colors } from '../../themes';
import Vector from '../../helpers/vector';

interface BranchArgument {
  position?: Vector;
  speed?: number;
  angle?: number;
  width?: number,
  time?: number,
  ctx?: CanvasRenderingContext2D | null,
}

interface BranchArgument2 {
  position: Vector;
  speed: number;
  angle: number;
  width: number,
  time: number,
  ctx: CanvasRenderingContext2D | null,
}

const branchs:Branch[] = [];

class Branch {
  args: BranchArgument2;

  branchMinWidth: number;

  constructor(args: BranchArgument) {
    this.args = {
      position: new Vector({ x: 0, y: 0 }),
      speed: 4,
      angle: -Math.PI / 2,
      width: 10,
      time: 0,
      ctx: null,
    };
    this.branchMinWidth = this.args.width * 0.1;

    Object.assign(this.args, args);
  }

  update() {
    const { args } = this;
    const {
      width, angle, speed, ctx, time, position,
    } = args;
    this.args.time++;

    // 获得角速度(树生长的过程应该是斜着的)
    const v = new Vector({
      x: Math.cos(angle),
      y: Math.sin(angle),
    }).multiply(speed);
    this.args.position.move(v).toString();

    // 分裂
    if (Math.random() < 0.5 && time > 15 && time % 15 === 0 && width > 0.5) {
      this.args.angle += (Math.random() - 0.5) / 8;
      if (Math.random() < 0.5) {
        branchs.push(new Branch({
          position: position.clone(),
          angle: angle + (Math.random() - 0.5),
          speed: speed / (1.2 + Math.random()),
          width: width * (0.45 + Math.random() / 2),
          ctx: this.args.ctx,
        }));
      } else { // 分叉
        branchs.push(new Branch({
          position: position.clone(),
          angle: angle + (Math.random() / 2),
          speed: speed / (1 + Math.random()),
          width: width * (0.6 + Math.random() / 1.5),
          ctx: this.args.ctx,
        }));
        branchs.push(new Branch({
          position: position.clone(),
          angle: angle - (Math.random() / 2),
          speed: speed / (1 + Math.random()),
          width: width * (0.6 + Math.random() / 1.5),
          ctx: this.args.ctx,
        }));
        this.args.width = 0;
      }

      if (Math.random() < 0.5) {
        this.args.width = 0;
      }
    }

    // 叶子
    if (width > 0.1 && width < 2 && Math.random() < 0.1 && ctx) {
      const { x, y } = this.args.position;
      ctx.beginPath();
      ctx.arc(x, y, Math.random() * 4, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${Math.random() * 50}, 80%, 50%)`;
      ctx.fill();
    }
    this.args.width *= 0.98 + Math.random() * 0.02;
  }

  draw() {
    if (this.args.width > 0 && this.args.ctx) {
      const { position: { x, y }, ctx, width } = this.args;
      ctx.beginPath();
      ctx.arc(x, y, width, 0, Math.PI * 2);
      ctx.fillStyle = Colors.white;
      ctx.fill();
      this.update();
    }
  }
}

class Tree extends Component {
  canvas: RefObject<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D | null | undefined;

  gameWidth: number;

  gameHeight: number;

  constructor(props: any) {
    super(props);
    this.canvas = React.createRef();
    this.ctx = null;
    this.gameWidth = 0;
    this.gameHeight = 0;
  }

  componentDidMount() {
    const canvas = this.canvas.current;
    if (canvas) {
      this.ctx = canvas.getContext('2d');
      this.gameWidth = window.innerWidth;
      this.gameHeight = window.innerHeight;
      canvas.width = this.gameWidth;
      canvas.height = this.gameHeight;

      this.init();
    }
  }

  init() {
    if (this.ctx) {
      this.ctx.fillStyle = Colors.regular;
      this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
      branchs.push(new Branch({
        position: new Vector({ x: 0, y: 0 }),
        ctx: this.ctx,
      }));
      this.draw();
    }
  }

  draw() {
    requestAnimationFrame(() => this.draw());
    const { ctx, gameWidth, gameHeight } = this;
    if (ctx) {
      ctx.save();
      ctx.translate(gameWidth / 2, gameHeight);
      branchs.forEach((branch) => {
        if (branch.args.width) {
          branch.draw();
        }
      });
      ctx.restore();
    }
  }

  render() {
    return <canvas ref={this.canvas} />;
  }
}

export default Tree;
