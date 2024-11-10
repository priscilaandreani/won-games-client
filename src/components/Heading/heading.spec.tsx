import { screen } from '@testing-library/dom';
import { renderWithTheme } from '@/utils/tests/helpers';
import 'jest-styled-components';
import Heading from '.';

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>Most popular</Heading>);

    expect(screen.getByRole('heading')).toHaveStyle({
      color: '#030517'
    });
  });

  it('should render a white heading when color is specified', () => {
    renderWithTheme(<Heading color="white">Most popular</Heading>);

    expect(screen.getByRole('heading')).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('should render a left line when specified', () => {
    renderWithTheme(<Heading $lineLeft>Most popular</Heading>);

    expect(screen.getByRole('heading')).toHaveStyle({
      paddingLeft: '0.8rem',
      borderLeft: '0.7rem solid #3CD3C1'
    });
  });

  it('should render a bottom line when specified', () => {
    renderWithTheme(<Heading $lineBottom>Most popular</Heading>);

    expect(screen.getByRole('heading')).toHaveStyleRule(
      'border-bottom',
      '0.4rem solid #F231A5',
      {
        modifier: '::after'
      }
    );
  });
});
