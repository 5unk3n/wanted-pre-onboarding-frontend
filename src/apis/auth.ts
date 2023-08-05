import { instance } from 'utils/axios';

export const signUp = async (email: string, password: string) => {
  await instance.post('/auth/signup', { email, password });
};

export const singIn = async (
  email: string,
  password: string
): Promise<{ access_token: string }> => {
  const { data } = await instance.post('/auth/signin', { email, password });
  return data;
};
