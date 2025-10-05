import { isAxiosError, InternalAxiosRequestConfig } from 'axios';

import { HttpStatus } from '~/shared/constants';
import { useAppStore, clearAppStore } from '~/shared/stores/app';

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

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const { user } = useAppStore.getState();

  if (user.isAuthenticated) {
    if (user.tokenExpiry <= Date.now()) clearAppStore();
    config.headers.Authorization = `Bearer ${user.accessToken}`;
  }

  return config;
};

const responseInterceptor = (error: unknown) => {
  if (isAxiosError(error) && error.response?.status === HttpStatus.Unauthorized) clearAppStore();

  return Promise.reject(error);
};

api.instance.interceptors.request.use(requestInterceptor);
api.instance.interceptors.response.use((res) => res, responseInterceptor);
