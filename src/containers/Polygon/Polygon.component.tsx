import React, { Component } from 'react';

import { Wrapper } from './Polygon.components';
import { Colors } from '../../themes';
import mouse from '../../helpers/mouse';
import Vector from '../../helpers/vector';

const degToPI = Math.PI / 180;
class Polygon extends Component<any> {
  canvas: any;

  ctx: any;

  mousePosition: Vector;

  points: Array<Vector>;

  lineNumber: number;

  time: number;

  constructor(props: any) {
    super(props);
    this.canvas = null;
    this.ctx = null;
    this.mousePosition = new Vector({ x: 0, y: 0 });
    this.points = [];
    this.lineNumber = 150;
    this.time = 0;
  }

  componentDidMount() {
    this.init();
    this.draw();
  }

  init() {
    this.canvas = document.getElementById('polygon-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx.fillStyle = Colors.regular;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw() {
    requestAnimationFrame(() => this.draw());
    this.time += 1;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.canvas.height / 2);
    this.ctx.lineTo(this.canvas.width, this.canvas.height / 2);
    this.ctx.moveTo(this.canvas.width / 2, 0);
    this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
    this.ctx.strokeStyle = Colors.rgba25503;
    this.ctx.stroke();
    this.ctx.closePath();
    mouse(this.mousePosition, this.ctx);
    this.ctx.save();
    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    this.points = [];
    for (let index = 0; index < this.lineNumber; index++) {
      this.points.push(new Vector({
        x: 20 * Math.sin((360 / this.lineNumber) * index * degToPI),
        y: 20 * Math.cos((360 / this.lineNumber) * index * degToPI),
      }));
    }

    this.ctx.strokeStyle = Colors.rgba25503;
    this.points.forEach((point: Vector, index: number) => {
      this.ctx.beginPath();
      this.ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.fillStyle = Colors.white;
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(point.x, point.y);
      this.ctx.closePath();
      this.ctx.stroke();

      this.ctx.save();
      this.ctx.translate(point.x, point.y);
      this.ctx.beginPath();
      const x = 100 * Math.cos(index * 20 + this.time / 20);
      const y = 100 * Math.sin(index * 20 + this.time / 20);
      this.ctx.arc(x, y, 3, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(x, y);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.restore();
    });

    this.ctx.beginPath();
    this.points.forEach((point: Vector, index: number) => {
      if (index === 0) {
        this.ctx.moveTo(point.x, point.y);
      } else {
        this.ctx.lineTo(point.x, point.y);
      }
    });
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.restore();

    window.onmousemove = (e: any) => {
      this.mousePosition.set(e.offsetX, e.offsetY);
    };
  }

  render() {
    return (
      <Wrapper>
        <canvas id="polygon-canvas" />
      </Wrapper>
    );
  }
}

export default Polygon;
