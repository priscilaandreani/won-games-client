import { screen } from '@testing-library/react';

import Button from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('<Button />', () => {
  it('should render the medium button by default', () => {
    renderWithTheme(<Button>Click me!</Button>);
    expect(screen.getByRole('button', { name: /click me!/i })).toHaveStyle({
      padding: '0.8rem 3.2rem',
      height: '4rem',
      fontSize: '1.4rem'
    });
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Click me!</Button>);
    expect(screen.getByRole('button', { name: /click me!/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem'
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Click me!</Button>);
    expect(screen.getByRole('button', { name: /click me!/i })).toHaveStyle({
      height: '5rem',
      fontSize: '1.6rem',
      padding: '0.8rem 4.0rem'
    });
  });
});
