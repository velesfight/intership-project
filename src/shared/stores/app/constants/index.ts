import { AppState } from '../types';

export const DEVTOOLS_NAME = 'nude-app-store';
export const STORAGE_NAME = 'nude-app-store';
export const ONE_SECOND = 1000;

export const INITIAL_STATE: AppState = {
  user: {
    isAuthenticated: false,
    status: 'guest',
  },
};
