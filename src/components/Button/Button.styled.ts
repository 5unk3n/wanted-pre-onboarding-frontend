import { css, styled } from 'styled-components';

import { ButtonProps } from './Button';

const sizes = {
  lg: css`
    width: 100%;
  `,
  sm: css`
    width: 56px;
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ $size }) => sizes[$size || 'lg']}
  padding: 4px;
`;
