import { TokenPayload, AuthenticatedUser } from '../types';

export const mapUser = (payload: TokenPayload): AuthenticatedUser => {
  const { email, role, status, sub } = payload;

  return {
    isAuthenticated: true,
    id: sub,
    email,
    role,
    status,
  };
};
