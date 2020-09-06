import React, { Component } from 'react';
import { Colors } from '../../themes';
import Vector from '../../helpers/vector';
import Branch from './Branch.class';

class Tree extends Component {
  canvas: any;

  ctx: any;

  cw: number;

  ch: number;

  time: number;

  currentBranch: any;

  branchs: Array<Branch>;

  constructor(props: any) {
    super(props);

    this.canvas = null;
    this.ctx = null;
    this.cw = window.innerWidth;
    this.ch = window.innerHeight;
    this.time = 0;
    this.currentBranch = null;
    this.branchs = [];
  }

  componentDidMount() {
    this.canvas = document.getElementById('tree-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.cw;
    this.canvas.height = this.ch;
    this.init();
    this.draw();
  }

  init() {
    this.ctx.fillStyle = Colors.regular;
    this.ctx.fillRect(0, 0, this.cw, this.ch);
    this.currentBranch = new Branch(this.time, new Vector({x:0, y:0}), speed: number, angle: number, width: number, ctx: any);
  }

  draw() {
    requestAnimationFrame(() => this.draw());
    
  }

  render() {
    return <canvas id="tree-canvas" />;
  }
}

export default Tree;
