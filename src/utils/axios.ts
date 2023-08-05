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
