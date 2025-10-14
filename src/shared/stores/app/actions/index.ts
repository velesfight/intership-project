import { jwtDecode } from 'jwt-decode';

import { queryClient } from '~/shared/configs/queryClient';

import { INITIAL_STATE, ONE_SECOND } from '../constants';
import { useAppStore } from '../hooks';
import { mapTokenPayload } from '../mappers';
import { TokenPayload } from '../types';

export const setAuth = (accessToken: string) => {
  const payload = jwtDecode<TokenPayload>(accessToken);
  const mappedPaylod = mapTokenPayload(payload);
  const tokenExpiry = payload.exp ? payload.exp * ONE_SECOND : 0;

  useAppStore.setState({
    user: {
      ...mappedPaylod,
      accessToken,
      tokenExpiry,
    },
  });
};

export const clearAppStore = () => {
  useAppStore.setState(INITIAL_STATE);
  queryClient.clear();
};
