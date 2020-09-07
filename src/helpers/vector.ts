interface VectorPropTypes {
  x: number,
  y: number
}

class Vector {
  x: number;

  y: number;

  constructor(props: VectorPropTypes) {
    const { x, y } = props;
    this.x = x;
    this.y = y;
  }

  add(vector: Vector) {
    return (new Vector({
      x: this.x + vector.x,
      y: this.y + vector.y,
    }));
  }

  move(vector: Vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }

  sub(vector: Vector) {
    return (new Vector({
      x: this.x - vector.x,
      y: this.y - vector.y,
    }));
  }

  multiply(number: number) {
    return (new Vector({
      x: this.x * number,
      y: this.y * number,
    }));
  }

  angle() {
    return Math.atan2(this.y, this.x);
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return (new Vector({
      x: this.x,
      y: this.y,
    }));
  }

  toString() {
    return `{x: ${this.x},  y: ${this.y}}`;
  }
}

export default Vector;
