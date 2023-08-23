import React, { useState, MouseEvent } from 'react';

import Button from 'components/Button/Button';
import TextInput from 'components/TextInput/TextInput';
import { TodoType } from 'types';

import * as S from './TodoItem.styled';

interface TodoItemProps {
  todo: TodoType;
  onEditTodo: (id: number, todo: string, isCompleted: boolean) => Promise<void>;
  onDelteTodo: (id: number) => Promise<void>;
}

const TodoItem = ({ todo, onEditTodo, onDelteTodo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleCheckClick = async (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    await onEditTodo(todo.id, todo.todo, !todo.isCompleted);
  };

  return (
    <S.TodoDiv>
      <label htmlFor='checkbox'>
        <input
          id={`checkbox-${todo.id}`}
          type='checkbox'
          checked={todo.isCompleted}
          onClick={handleCheckClick}
          readOnly
        />
      </label>
      {isEditing ? (
        <>
          <TextInput label='Edit Todo' $isLabelHidden>
            <TextInput.TextField
              id={`input-${todo.id}`}
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
              data-testid='modify-input'
            />
          </TextInput>
          <Button
            $size='sm'
            onClick={() => {
              setIsEditing(!isEditing);
              onEditTodo(todo.id, editedTodo, todo.isCompleted);
            }}
            data-testid='submit-button'
          >
            제출
          </Button>
          <Button
            $size='sm'
            onClick={() => {
              setIsEditing(!isEditing);
              setEditedTodo(todo.todo);
            }}
            data-testid='cancel-button'
          >
            취소
          </Button>
        </>
      ) : (
        <>
          <span>{editedTodo}</span>
          <Button
            $size='sm'
            onClick={() => setIsEditing(!isEditing)}
            data-testid='modify-button'
          >
            수정
          </Button>
          <Button
            $size='sm'
            onClick={() => onDelteTodo(todo.id)}
            data-testid='delete-button'
          >
            삭제
          </Button>
        </>
      )}
    </S.TodoDiv>
  );
};

export default TodoItem;
