import { FC } from 'react';
import { Navigate, Outlet } from 'react-router';

import { Route } from '~/shared/constants/routes';
import { useAppStore } from '~/shared/stores/app';

import { AuthGuardProps } from '../types';

export const AuthGuard: FC<AuthGuardProps> = ({ access }) => {
  const { user } = useAppStore();

  if (access === 'public' && user.isAuthenticated) return <Navigate to={Route.App} replace />;
  if (access === 'private' && !user.isAuthenticated) return <Navigate to={Route.SignIn} replace />;

  return <Outlet />;
};
