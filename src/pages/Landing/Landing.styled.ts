import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;
