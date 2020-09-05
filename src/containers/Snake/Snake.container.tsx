import React from 'react';
import { connect } from 'react-redux';

import Snake from './Snake.component';
import { SankeProps, ChangeDirectionState } from './Snake.types';
import {
  changeDirectionAction,
  changeSnakeAction,
  snakeEatAction,
  gameStartAction,
} from './Snake.action';

const SnakeContainer = (props: SankeProps) => <Snake {...props} />;

const mapStateToProps = (state: any) => {
  const { snake } = state;
  return {
    ...snake,
  };
};

const mapDispatchToProps = (dispatch: Function) => ({
  changeDirection: (payload: ChangeDirectionState) => dispatch(changeDirectionAction(payload)),
  changeSnake: () => dispatch(changeSnakeAction()),
  snakeEat: () => dispatch(snakeEatAction()),
  gameStart: () => dispatch(gameStartAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SnakeContainer);
