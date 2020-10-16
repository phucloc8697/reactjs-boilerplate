import { createGlobalStyle } from 'styled-components';

import '../fonts/_font.scss';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    font-family: 'SFProDisplay';
  }
`;

export default GlobalStyle;
