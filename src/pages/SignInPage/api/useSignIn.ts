import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { publicApi } from '~/shared/api';
import { HttpStatus } from '~/shared/constants';
import { setAuth } from '~/shared/stores/app/';

import { SignInFields } from '../types';

export const useSignIn = () => {
  const { t } = useTranslation();
  return useMutation({
    mutationFn: (dto: SignInFields) => publicApi.authentication.authenticationControllerSignIn(dto),
    onSuccess: ({ accessToken }: { accessToken: string }) => {
      setAuth(accessToken);
    },
    onError: (error) => {
      const status = error?.response?.status;
      if (status === HttpStatus.Unauthorized)
        console.log(t('notifications.invalidCredentials.text1'), status);
      if (status === HttpStatus.TooManyRequests)
        console.log(t('notifications.rateLimitExceeded.text1'), status);
      if (status !== undefined && status >= HttpStatus.InternalServerError)
        console.log(t('notifications.internalServer.text1'), status);
      if (status !== HttpStatus.TooManyRequests && status !== HttpStatus.Unauthorized)
        console.log(t('notifications.unknownError.text1'), error.message);
    },
  });
};
