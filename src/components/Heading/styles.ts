import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps } from '.';
import { DefaultTheme } from 'styled-components/dist/types';

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,

  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 5rem;
      border-bottom: 0.4rem solid ${theme.colors.primary};
    }
  `
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, $lineLeft, $lineBottom }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}

    ${$lineLeft && wrapperModifiers.lineLeft(theme)}
    ${$lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`;
