import React, { Component } from 'react';
import { Colors } from '../../themes';

class DNA extends Component<any> {
  canvas: any;

  ctx: any;

  cw: number;

  ch: number;

  time: number;

  constructor(props: any) {
    super(props);

    this.canvas = null;
    this.ctx = null;
    this.cw = window.innerWidth;
    this.ch = window.innerHeight;
    this.time = 0;
  }

  componentDidMount() {
    this.init();
    this.draw();
  }

  init() {
    this.canvas = document.getElementById('dna-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.cw;
    this.canvas.height = this.ch;
  }

  draw() {
    requestAnimationFrame(() => this.draw());
    this.time++;
    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.ctx.fillStyle = Colors.regular;
    this.ctx.fillRect(0, 0, this.cw, this.ch);

    this.ctx.save();
    this.ctx.translate(this.cw / 2, 0);
    this.ctx.beginPath();
    for (let currentY = 0; currentY < this.ch; currentY++) {
      const currentX = Math.cos(currentY * 0.01 + this.time / 30) * 100;
      this.ctx.lineTo(currentX, currentY);
    }
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = Colors.white;
    this.ctx.stroke();

    this.ctx.beginPath();
    for (let currentY = 0; currentY < this.ch; currentY++) {
      const currentX = Math.cos(currentY * 0.01 + this.time / 30) * 100;
      this.ctx.lineTo(-currentX, currentY);
    }
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = Colors.white;
    this.ctx.stroke();

    for (let currentY = 0; currentY < this.ch; currentY += 50) {
      this.ctx.beginPath();
      const currentX = Math.cos(currentY * 0.01 + this.time / 30) * 100;
      this.ctx.moveTo(-currentX, currentY);
      this.ctx.lineTo(currentX, currentY);
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = Colors.white;
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.arc(currentX, currentY, 12, 0, Math.PI * 2);
      this.ctx.arc(-currentX, currentY, 12, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${currentY / 4}, ${currentY / 2}, 255)`;
      this.ctx.fill();
    }
    this.ctx.restore();

    this.ctx.save();
    this.ctx.translate(0, this.ch / 2);
    this.ctx.beginPath();
    for (let currentX = 0; currentX < this.cw; currentX++) {
      const currentY = Math.sin(currentX * 0.09 + this.time / 20) * Math.random() * 30;
      this.ctx.lineTo(currentX, currentY);
    }
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = Colors.white;
    this.ctx.stroke();
    this.ctx.restore();
  }

  render() {
    return <canvas id="dna-canvas" />;
  }
}

export default DNA;
