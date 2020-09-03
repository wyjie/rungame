import { createGlobalStyle } from 'styled-components';

import { Colors, Fonts } from './themes';

export default createGlobalStyle`
  @font-face {
    font-family: Roboto-Regular;
    src: url("${Fonts.type.RobotoRegular}") format("truetype");
  }

  @font-face {
    font-family: Roboto-Bold;
    src: url("${Fonts.type.RobotoBold}") format("truetype");
  }

  @font-face {
    font-family: Roboto-Black;
    src: url("${Fonts.type.RobotoBlack}") format("truetype");
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: Roboto-Regular;
    font-size: ${Fonts.size.regular};
    color: ${Colors.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
`;
