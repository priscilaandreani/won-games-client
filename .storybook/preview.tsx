import React from 'react';
import GlobalStyles from '../src/styles/globals';
import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
