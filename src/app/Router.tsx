import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import { AppRoute } from '~/shared/constants/routes';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Navigate to={AppRoute.SignIn} replace />} />
      <Route path={AppRoute.SignIn} element='Sign In' />
      <Route path={AppRoute.SignUp} element='Sign Up' />
      <Route path={AppRoute.Recover} element='Recover' />
      <Route path={AppRoute.Otp} element='OTP' />
      <Route path={AppRoute.App}>
        <Route index element={<Navigate to={AppRoute.Feed} replace />} />
        <Route path={AppRoute.Feed} element='Feed' />
        <Route path={AppRoute.Questionnaire} element='Questionnaire' />
        <Route path={AppRoute.Likes} element='Likes' />
        <Route path={AppRoute.Profile} element='Profile' />
        <Route path={AppRoute.Chat} element='Chat' />
        <Route path={AppRoute.Tests} element='Tests' />
      </Route>
    </Routes>
  </BrowserRouter>
);
