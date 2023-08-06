import React, { FormEvent, useEffect } from 'react';

import Button from 'components/Button/Button';
import TextInput from 'components/TextInput/TextInput';
import TodoItem from 'components/TodoItem/TodoItem';
import { createTodo, getTodos, updateTodo, deleteTodo } from 'apis/todo';
import { TodoType } from 'types';

import * as S from './Todo.styled';

const Todo = () => {
  const [todos, setTodos] = React.useState<TodoType[]>([]);
  const [newTodo, setNewTodo] = React.useState('');

  const fetchTodos = async () => {
    try {
      const todoDatas = await getTodos();
      setTodos(todoDatas);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const createdTodo = await createTodo(newTodo);
      setTodos((prev) => [...prev, createdTodo]);
      setNewTodo('');
    } catch (error) {
      console.error(error);
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
      console.error(error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <S.Wrapper>
      <h2>TODO</h2>
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
