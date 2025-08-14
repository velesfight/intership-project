import { isAxiosError, InternalAxiosRequestConfig } from 'axios';

import { HttpStatus } from '~/shared/constants';
import { clearAuth, useAuthStore } from '~/shared/stores/auth';

import { Api } from '../artifacts';
import { DEFAULT_API_TIMEOUT } from '../constants';

export const publicApi = new Api({
  baseURL: import.meta.env.VITE_API_URL_BASE,
  withCredentials: true,
  timeout: DEFAULT_API_TIMEOUT,
});

export const api = new Api({
  baseURL: import.meta.env.VITE_API_URL_BASE,
  withCredentials: true,
  timeout: DEFAULT_API_TIMEOUT,
});

const requestAuthInterceptor = (config: InternalAxiosRequestConfig) => {
  const { accessToken, tokenExpiry } = useAuthStore.getState();

  if (tokenExpiry <= Date.now()) clearAuth();

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

const responseAuthInterceptor = (error: unknown) => {
  if (isAxiosError(error) && error.response?.status === HttpStatus.Unauthorized) clearAuth();

  return Promise.reject(error);
};

api.instance.interceptors.request.use(requestAuthInterceptor);
api.instance.interceptors.response.use((res) => res, responseAuthInterceptor);
