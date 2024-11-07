'use client';

import { createGlobalStyle, css } from 'styled-components';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  display: 'swap',
  weight: ['300', '400', '600'],
  style: 'normal',
  subsets: ['latin']
});

const GlobalStyles = createGlobalStyle`
    font-family: ${poppins};
   
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
