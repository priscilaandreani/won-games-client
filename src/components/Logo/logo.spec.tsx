import { screen } from '@testing-library/dom';
import Logo from '.';
import { renderWithTheme } from '@/utils/tests/helpers';
import 'jest-styled-components';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/).parentElement).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/).parentElement).toHaveStyle({
      color: '#030517'
    });
  });

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/).parentElement).toHaveStyle({
      width: '20rem',
      height: '5.9rem'
    });
  });

  it('should render a normal logo by default ', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/).parentElement).toHaveStyle({
      width: '8rem',
      height: '3.3rem'
    });
  });

  it('should render a bigger logo without text if hideOnMobile is true ', () => {
    renderWithTheme(<Logo $hideOnMobile />);

    expect(screen.getByLabelText(/Won Games/).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width:  768px)'
      }
    );
  });
});
