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
  const [prevTodo, setPrevTodo] = useState(todo);
  const [isEditting, setIsEditting] = useState(false);
  const [edittedTodo, setEdittedTodo] = useState(prevTodo.todo);

  const handleCheckClick = async (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    await onEditTodo(prevTodo.id, prevTodo.todo, !prevTodo.isCompleted);
    setPrevTodo((prev) => ({ ...prev, isCompleted: !prev.isCompleted }));
  };

  return (
    <S.TodoDiv>
      <label htmlFor='checkbox'>
        <input
          id={`checkbox-${prevTodo.id}`}
          type='checkbox'
          checked={prevTodo.isCompleted}
          onClick={handleCheckClick}
          readOnly
        />
      </label>
      {isEditting ? (
        <>
          <TextInput label='Edit Todo' $isLabelHidden>
            <TextInput.TextField
              id={`input-${prevTodo.id}`}
              value={edittedTodo}
              onChange={(e) => setEdittedTodo(e.target.value)}
              data-testid='modify-input'
            />
          </TextInput>
          <Button
            $size='sm'
            onClick={() => {
              setIsEditting(!isEditting);
              onEditTodo(prevTodo.id, edittedTodo, prevTodo.isCompleted);
            }}
            data-testid='submit-button'
          >
            제출
          </Button>
          <Button
            $size='sm'
            onClick={() => {
              setIsEditting(!isEditting);
              setEdittedTodo(prevTodo.todo);
            }}
            data-testid='cancel-button'
          >
            취소
          </Button>
        </>
      ) : (
        <>
          <span>{edittedTodo}</span>
          <Button
            $size='sm'
            onClick={() => setIsEditting(!isEditting)}
            data-testid='modify-button'
          >
            수정
          </Button>
          <Button
            $size='sm'
            onClick={() => onDelteTodo(prevTodo.id)}
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
