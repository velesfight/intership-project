export enum Route {
  Root = '/',

  SignIn = '/sign-in',
  SignUp = '/sign-up',
  Recover = '/recover',
  Otp = `${SignUp}/confirm`,

  App = '/app',
  Feed = `${App}/feed`,
  Questionnaire = `${App}/questionnaire`,
  Chat = `${App}/chat`,
  Likes = `${Chat}/likes`,
  Profile = `${App}/profile`,
  Tests = `${App}/tests`,
}
