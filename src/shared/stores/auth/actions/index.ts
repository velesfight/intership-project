import { jwtDecode } from 'jwt-decode';

import { SECONDS_TO_MILLISECONDS } from '~/shared/api/constants';

import { GUEST } from '../constants';
import { useAuthStore } from '../hooks';
import { mapUser } from '../mappers';
import { TokenPayload } from '../types';

export const setAuth = (accessToken: string) => {
  const payload = jwtDecode<TokenPayload>(accessToken);
  const user = mapUser(payload);
  const tokenExpiry = payload.exp ? payload.exp * SECONDS_TO_MILLISECONDS : 0;

  useAuthStore.setState({
    accessToken,
    tokenExpiry,
    user,
  });
};

export const clearAuth = () => {
  useAuthStore.setState({
    accessToken: null,
    tokenExpiry: 0,
    user: GUEST,
  });
};
