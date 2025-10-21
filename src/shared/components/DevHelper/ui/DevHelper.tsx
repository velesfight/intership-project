import { useEffect } from 'react';

import { useSignOut } from '../hooks';

export const DevHelper = () => {
  const { mutate: signOut } = useSignOut();

  useEffect(() => {
    if (import.meta.env.MODE == 'development' || import.meta.env.MODE == 'staging') {
      window._app = {
        ...window._app,
        signOut,
      };

      return () => {
        delete window._app;
      };
    }
  }, [signOut]);

  return null;
};
