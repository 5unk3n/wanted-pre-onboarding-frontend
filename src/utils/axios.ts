import axios, { InternalAxiosRequestConfig } from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

export const instance = axios.create({
  baseURL: BASE_URL,
});

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';

  return config;
};

instance.interceptors.request.use(authRequestInterceptor);

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

export const getErrorMessage = (error: unknown) => {
  if (axios.isAxiosError<ErrorResponse>(error)) {
    if (error.response) {
      return error.response.data.message;
    } else if (error.request) {
      return error.message;
    } else {
      return error.message;
    }
  }
  return '알 수 없는 오류';
};
