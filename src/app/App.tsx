import { QueryClientProvider } from '@tanstack/react-query';

import { LocaleProvider } from '~/shared/configs/i18n';
import { queryClient } from '~/shared/configs/queryClient';
import { useDevHelpers } from '~/shared/lib/devHelpers';

import { Router } from './Router';

const AppInner = () => {
  useDevHelpers();

  return <Router />;
};

export const App = () => {
  return (
    <LocaleProvider>
      <QueryClientProvider client={queryClient}>
        <AppInner />
      </QueryClientProvider>
    </LocaleProvider>
  );
};
