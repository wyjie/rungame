import Vector from './vector';
import { Colors } from '../themes';

export default (position: Vector, ctx: any) => {
  ctx.beginPath();
  ctx.moveTo(position.x, position.y - 20);
  ctx.lineTo(position.x, position.y + 20);
  ctx.moveTo(position.x - 20, position.y);
  ctx.lineTo(position.x + 20, position.y);
  ctx.strokeStyle = Colors.red;
  ctx.stroke();
  ctx.closePath();
};
