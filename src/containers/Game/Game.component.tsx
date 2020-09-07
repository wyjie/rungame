class Game {
  ID: string;

  constructor(args: any) {
    const props = {

    };
    Object.assign(props, args);
    Object.assign(this, props);
    this.ID = '';
  }
}

export default Game;
