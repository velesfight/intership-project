import { useEffect } from 'react';

import { useSignOut } from './useSignOut';

export const useDevHelpers = () => {
  const { mutate: signOut } = useSignOut();

  useEffect(() => {
    if (import.meta.env.MODE == 'development' || import.meta.env.MODE == 'staging') {
      window._app = {
        ...window._app,
        signOut: useSignOut,
      };

      return () => {
        if (window._app?.signOut === signOut) {
          delete window._app;
        }
      };
    }
  }, [signOut]);
};
