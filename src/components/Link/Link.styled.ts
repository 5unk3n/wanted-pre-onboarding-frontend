import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #888;
  }
`;
