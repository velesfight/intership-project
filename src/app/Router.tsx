import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import { ConfirmEmailPage } from '~/pages/ConfirmEmailPage';
import { SignInPage } from '~/pages/SignInPage';
import { SignUpPage } from '~/pages/SignUpPage';
import { Route as Path } from '~/shared/constants/routes';

import { AppLayout } from './layouts/AppLayout';
import { AuthLayout } from './layouts/AuthLayout';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={Path.Root} element={<Navigate to={Path.SignIn} replace />} />
      <Route element={<AuthLayout />}>
        <Route path={Path.SignIn} element={<SignInPage />} />
        <Route path={Path.SignUp} element={<SignUpPage />} />
        <Route path={Path.Recover} element='Recover' />
        <Route path={Path.Otp} element={<ConfirmEmailPage />} />
      </Route>
      <Route path={Path.App} element={<AppLayout />}>
        <Route index element={<Navigate to={Path.Feed} replace />} />
        <Route path={Path.Feed} element='Feed' />
        <Route path={Path.Likes} element='Likes' />
        <Route path={Path.Profile} element='Profile' />
        <Route path={Path.Chat} element='Chat' />
        <Route path={Path.Tests} element='Tests' />
      </Route>
      <Route path={Path.Questionnaire} element='Questionnaire' />
    </Routes>
  </BrowserRouter>
);
