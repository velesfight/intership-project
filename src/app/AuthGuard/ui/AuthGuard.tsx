import { FC } from 'react';
import { Navigate, Outlet } from 'react-router';

import { AppRoute } from '~/shared/constants/routes';
import { useAuthStore } from '~/shared/stores/auth';

import { AuthGuardProps } from '../types';

export const AuthGuard: FC<AuthGuardProps> = ({ access }) => {
  const { user } = useAuthStore();

  if (access === 'public' && user.isAuthenticated) return <Navigate to={AppRoute.App} replace />;
  if (access === 'private' && !user.isAuthenticated)
    return <Navigate to={AppRoute.SignIn} replace />;

  return <Outlet />;
};
