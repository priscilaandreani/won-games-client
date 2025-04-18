import { screen } from '@testing-library/react';

import Button from '.';
import { renderWithTheme } from '@/utils/tests/helpers';
import { AddShoppingCart } from '@styled-icons/material-outlined';

describe('<Button />', () => {
  it('should render the medium button by default', () => {
    const { container } = renderWithTheme(<Button>Click me!</Button>);
    expect(screen.getByRole('button', { name: /click me!/i })).toHaveStyle({
      padding: '0.8rem 3.2rem',
      height: '4rem',
      fontSize: '1.4rem'
    });

    expect(container).toMatchSnapshot();
  });

  it('should render the small size', () => {
    renderWithTheme(<Button $size="small">Click me!</Button>);
    expect(screen.getByRole('button', { name: /click me!/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem'
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button $size="large">Click me!</Button>);
    expect(screen.getByRole('button', { name: /click me!/i })).toHaveStyle({
      height: '5rem',
      fontSize: '1.6rem',
      padding: '0.8rem 4.0rem'
    });
  });

  it('should render a full width version', () => {
    renderWithTheme(<Button $fullWidth>Click me!</Button>);
    expect(screen.getByRole('button', { name: /click me!/i })).toHaveStyle({
      width: '100%'
    });
  });

  it('should render an icon version', () => {
    renderWithTheme(
      <Button $icon={<AddShoppingCart data-testid="icon" />}>Click me!</Button>
    );
    expect(
      screen.getByRole('button', { name: /click me!/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
