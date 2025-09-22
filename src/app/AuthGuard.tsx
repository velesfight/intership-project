import { FC } from 'react';
import { Navigate, Outlet } from 'react-router';

import { AppRoute } from '~/shared/constants/routes';
import { useAuthStore } from '~/shared/stores/auth';

export type AccessType = 'public' | 'private';

export interface AuthGuardProps {
  access: AccessType;
}

export const AuthGuard: FC<AuthGuardProps> = ({ access }) => {
  const { user } = useAuthStore();

  if (access === 'public')
    return !user.isAuthenticated ? <Outlet /> : <Navigate to={AppRoute.App} replace />;
  if (access === 'private')
    return user.isAuthenticated ? <Outlet /> : <Navigate to={AppRoute.SignIn} replace />;

  return <Outlet />;
};
