import { TokenPayload } from '../types';

export const mapTokenPayload = (payload: TokenPayload) => {
  const { email, role, status, sub } = payload;

  return {
    isAuthenticated: true as const,
    id: sub,
    email,
    role,
    status,
  };
};
