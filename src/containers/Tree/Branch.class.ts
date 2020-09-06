import Vector from '../../helpers/vector';
import { Colors } from '../../themes';

class Branch {
  time: number;

  position: Vector;

  speed: number;

  angle: number;

  width: number;

  ctx: any;

  constructor(time: number, position: Vector, speed: number, angle: number, width: number, ctx: any) {
    this.position = position;
    this.speed = speed;
    this.angle = angle;
    this.width = width;
    this.time = time;
    this.ctx = ctx;
  }

  draw() {
    if (this.width > 0) {
      this.ctx.beginPath();
      this.ctx.arc(this.position.x, this.position.y, this.width, 0, Math.PI * 2);
      this.ctx.fillStyle = Colors.white;
      this.ctx.fill();
    }
  }
}

export default Branch;
