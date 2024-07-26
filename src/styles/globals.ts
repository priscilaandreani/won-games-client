'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62,5%; // 1rem = 10px
  }

  html, border-style, #__next {
    height: 100%;
  }
`;

export default GlobalStyles;
