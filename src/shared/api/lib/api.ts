import axios from 'axios';

import { HttpStatus } from '~/shared/constants';
import { useAppStore, clearAppStore } from '~/shared/stores/app';

import { DEFAULT_TIMEOUT, BASE_URL } from '../constans';

export const publicApi = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

api.interceptors.request.use(async (config) => {
  const user = useAppStore.getState().user;
  if (!user.isAuthenticated) {
    if (!user.isAuthenticated) return config;
  }

  config.headers = config.headers ?? {};

  config.headers['Authorization'] = `Bearer ${user.accessToken}`;

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === HttpStatus.Unauthorized) {
      clearAppStore();
    }
    throw error;
  },
);
