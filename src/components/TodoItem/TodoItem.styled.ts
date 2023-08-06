import styled from 'styled-components';

export const TodoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;

  & > * {
    flex-shrink: 0;
  }

  & > *:nth-child(2) {
    flex-shrink: 1;
    flex-grow: 1;
  }
`;
