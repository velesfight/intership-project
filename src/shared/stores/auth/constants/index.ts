import { Guest } from '../types';

export const DEVTOOLS_AUTH_NAME = {
  name: 'AuthStore',
};

export const PERSIST_AUTH_NAME = {
  name: 'nude-auth-storage',
};

export const GUEST: Guest = {
  isAuthenticated: false,
  status: 'guest',
};
