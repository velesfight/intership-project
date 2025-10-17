import { useMutation } from '@tanstack/react-query';

import { api } from '~/shared/api';
import { clearAppStore } from '~/shared/stores/app';

export const useSignOut = () => {
  return useMutation({
    mutationFn: () => api.authentication.authenticationControllerLogout(),
    onSuccess: () => {
      clearAppStore();
    },
  });
};
