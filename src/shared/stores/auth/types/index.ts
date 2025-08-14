import { UserRole } from '~/shared/constants/statuses';

export type AuthenticatedUserStatus = 'verified' | 'incomplete' | 'active' | 'suspended';
export type GuestStatus = 'guest';

export interface AuthenticatedUser {
  isAuthenticated: true;
  id: number;
  email: string;
  role: UserRole;
  status: AuthenticatedUserStatus;
}

export interface TokenPayload {
  sub: number;
  email: string;
  role: UserRole;
  status: AuthenticatedUserStatus;
  exp: number;
}

export type Guest = {
  isAuthenticated: false;
  status: GuestStatus;
};

export type User = AuthenticatedUser | Guest;

export interface AuthStore {
  accessToken: null | string;
  tokenExpiry: number;
  user: User;
}
