import type { FC } from 'react';

import { useNavigate, Outlet } from 'react-router';

import { Route } from '~/shared/constants/routes';
import { useAppStore } from '~/shared/stores/app';

import { AuthGuardProps } from '../types';

export const AuthGuard: FC<AuthGuardProps> = ({ access }) => {
  const user = useAppStore((state) => state.user);
  const navigate = useNavigate();

  if (access === 'public' && user.isAuthenticated) {
    navigate(Route.App, { replace: true });
  }
  if (access === 'private' && !user.isAuthenticated) {
    navigate(Route.SignIn, { replace: true });
  }

  return <Outlet />;
};
