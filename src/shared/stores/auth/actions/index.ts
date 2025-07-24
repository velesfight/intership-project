import { jwtDecode } from 'jwt-decode';

import { GUEST } from '../constants';
import { useAuthStore } from '../hooks';
import { mapUser } from '../mappers';
import { TokenPayload } from '../types';

export const setAuth = (accessToken: string) => {
  const payload = jwtDecode<TokenPayload>(accessToken);
  const user = mapUser(payload);

  useAuthStore.setState({
    accessToken,
    user,
  });
};

export const clearAuth = () => {
  useAuthStore.setState({
    accessToken: null,
    user: GUEST,
  });
};
