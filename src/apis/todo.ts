import { instance } from 'utils/axios';
import { TodoType } from 'types';

export const createTodo = async (todo: string): Promise<TodoType> => {
  const { data } = await instance.post('/todos', { todo });
  return data;
};

export const getTodos = async (): Promise<TodoType[]> => {
  const { data } = await instance.get('/todos');
  return data;
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
): Promise<TodoType> => {
  const { data } = await instance.put(`/todos/${id}`, { todo, isCompleted });
  return data;
};

export const deleteTodo = (id: number) => {
  return instance.delete(`/todos/${id}`);
};
