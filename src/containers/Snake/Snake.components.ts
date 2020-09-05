import styled from 'styled-components';
import { Colors } from '../../themes';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${Colors.regular};
  #sanke-canvas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .game-console {
    color: ${Colors.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
  }
`;

export const GameStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  padding: 8px 20px;
  border: 1px solid ${Colors.white};
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`;
