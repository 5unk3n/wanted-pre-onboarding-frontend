import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 20px;
`;

export const AddTodoForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px;

  & > *:first-child {
    flex-grow: 1;
  }
`;

export const TodoList = styled.ul`
  list-style: none;
  padding: 0;

  & > li {
    border-top: 1px solid #ccc;

    &:last-child {
      border-bottom: 1px solid #ccc;
    }
  }
`;
