import theme from '@/styles/theme';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
