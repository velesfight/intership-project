import { useNavigate } from 'react-router';

import { Route } from '~/shared/constants/routes';
import { useAppStore, clearAppStore } from '~/shared/stores/app';

interface AuthGuardProps {
  children?: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const user = useAppStore((state) => state.user);
  const navigate = useNavigate();

  if (!user.isAuthenticated) {
    navigate(Route.SignIn, { replace: true });
    return;
  }

  const now = Date.now();
  const expiryMs = user.tokenExpiry * 1000;
  if (user.tokenExpiry && now > expiryMs) {
    clearAppStore();
    navigate(Route.SignIn, { replace: true });
  }

  return children;
};
