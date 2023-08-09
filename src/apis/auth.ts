import { instance } from 'utils/axios';

export const signUp = (email: string, password: string) => {
  return instance.post('/auth/signup', { email, password });
};

export const singIn = async (
  email: string,
  password: string
): Promise<{ access_token: string }> => {
  const { data } = await instance.post('/auth/signin', { email, password });
  return data;
};
