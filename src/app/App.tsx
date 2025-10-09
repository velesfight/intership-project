import { QueryClientProvider } from '@tanstack/react-query';

import { LocaleProvider } from '~/shared/configs/i18n';
import { queryClient } from '~/shared/configs/queryClient';

import { Router } from './Router';

export const App = () => {
  return (
    <LocaleProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </LocaleProvider>
  );
};
