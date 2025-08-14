import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { DEVTOOLS_AUTH_NAME, GUEST, PERSIST_AUTH_NAME } from '../constants';
import { AuthStore } from '../types';

export const useAuthStore = create<AuthStore>()(
  persist(
    devtools(
      () => ({
        accessToken: null,
        tokenExpiry: 0,
        user: GUEST,
      }),
      DEVTOOLS_AUTH_NAME,
    ),
    PERSIST_AUTH_NAME,
  ),
);
