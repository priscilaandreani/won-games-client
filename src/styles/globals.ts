'use client';

import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /* poppins-300 - latin */
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/poppins-v21-latin-300.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

  /* poppins-regular - latin */
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/poppins-v21-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* poppins-600 - latin */
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/poppins-v21-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale
  }

  ${({ theme }) => css`
    html {
      font-size: 62, 5%; // 1rem = 10px
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}



`;

export default GlobalStyles;
