import { UserRole } from '~/shared/constants/statuses';

export type AuthenticatedUserStatus = 'verified' | 'incomplete' | 'active' | 'suspended';
export type GuestStatus = 'guest';

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

export interface AuthenticatedUser {
  isAuthenticated: true;
  id: number;
  email: string;
  role: UserRole;
  status: AuthenticatedUserStatus;
  accessToken: string;
  tokenExpiry: number;
}

export type User = AuthenticatedUser | Guest;

export interface AppState {
  user: User;
}
