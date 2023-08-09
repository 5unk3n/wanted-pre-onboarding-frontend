import React, { FormEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button/Button';
import TextInput from 'components/TextInput/TextInput';
import TodoItem from 'components/TodoItem/TodoItem';
import { createTodo, getTodos, updateTodo, deleteTodo } from 'apis/todo';
import { TodoType } from 'types';
import { getErrorMessage } from 'utils/axios';
import { ToastContext } from 'context/ToastContext';

import * as S from './Todo.styled';

const Todo = () => {
  const [todos, setTodos] = React.useState<TodoType[]>([]);
  const [newTodo, setNewTodo] = React.useState('');
  const navigate = useNavigate();
  const { addToast } = useContext(ToastContext);

  const fetchTodos = async () => {
    try {
      const todoDatas = await getTodos();
      setTodos(todoDatas);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      addToast(errorMessage);
    }
  };

  const handleCreateTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const createdTodo = await createTodo(newTodo);
      setTodos((prev) => [...prev, createdTodo]);
      setNewTodo('');
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      addToast(errorMessage);
    }
  };

  const handleUpdateTodo = async (
    id: number,
    todo: string,
    isCompleted: boolean
  ) => {
    try {
      const updatedTodo = await updateTodo(id, todo, isCompleted);
      setTodos((prevTodos) =>
        prevTodos.map((prevTodo) =>
          prevTodo.id === id ? updatedTodo : prevTodo
        )
      );
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      addToast(errorMessage);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      addToast(errorMessage);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <h2>TODO</h2>
        <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
      </S.Header>
      <S.AddTodoForm onSubmit={handleCreateTodo}>
        <TextInput label='New Todo' $isLabelHidden>
          <TextInput.TextField
            id='addTodo'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            data-testid='new-todo-input'
          />
        </TextInput>
        <Button type='submit' $size='sm' data-testid='new-todo-add-button'>
          추가
        </Button>
      </S.AddTodoForm>
      <S.TodoList>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              onEditTodo={handleUpdateTodo}
              onDelteTodo={handleDeleteTodo}
            />
          </li>
        ))}
      </S.TodoList>
    </S.Wrapper>
  );
};

export default Todo;
