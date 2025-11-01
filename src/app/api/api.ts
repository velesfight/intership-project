import axios from 'axios';

import { useAppStore, clearAppStore } from '~/shared/stores/app';

const BASE_URL = import.meta.env.VITE_API_URL_BASE;

export const publicApi = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

api.interceptors.request.use((config) => {
  const user = useAppStore.getState().user;
  if (!user.isAuthenticated) {
    return Promise.reject(new Error('Token expired'));
  }

  config.headers.Authorization = `Bearer ${user.accessToken}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearAppStore();
    }
    return Promise.reject(error);
  },
);
