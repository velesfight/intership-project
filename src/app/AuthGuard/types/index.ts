export interface AuthGuardProps {
  access: AuthGuardAccess;
}

export type AuthGuardAccess = 'private' | 'public';
