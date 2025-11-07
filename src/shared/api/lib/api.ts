import { HttpStatus } from '~/shared/constants';
import { useAppStore, clearAppStore } from '~/shared/stores/app';

import { Api } from '../artifacts/generated';
import { DEFAULT_TIMEOUT, BASE_URL } from '../constans';

export const publicApi = new Api({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

export const api = new Api({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

api.instance.interceptors.request.use(async (config) => {
  const user = useAppStore.getState().user;
  if (!user.isAuthenticated) {
    return config;
  }
  const nowMs = Date.now();
  if (user.tokenExpiry < nowMs) {
    clearAppStore();
    window.location.href = '/sign‑in';
    return Promise.reject(new Error('Access token expired'));
  } else {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
    return config;
  }
});

api.instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === HttpStatus.Unauthorized) {
      clearAppStore();
      window.location.href = '/sign‑in';
      return Promise.reject(error);
    }
  },
);
