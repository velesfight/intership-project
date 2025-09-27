export type AuthGuardAccess = 'public' | 'private';

export interface AuthGuardProps {
  access: AuthGuardAccess;
}
