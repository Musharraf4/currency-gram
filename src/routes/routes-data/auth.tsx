import { lazy } from "react";
import {
  AUTHENTICATIONPATH,
  EMAILVERIFICATIONPATH,
  FORGOTPASSWORDPATH,
  RESETPASSWORDPATH,
  SENTEMAILPATH,
  SIGNINDELEGATEPATH,
  SIGNINPATH,
  SIGNUPDELEGATEPATH,
  SIGNUPDELEGATEVERIFYPATH,
  SLASHPATH,
} from "../../constants/routes-constant";
import { PublicRoutesGuard } from "../../guards/public-routes-guard";

const Signin = lazy(() => import("../../pages/authentication/signin"));
const SignInDelegatePage = lazy(() => import("../../pages/authentication/signin-delegate"));
const SignUpDelegatePage = lazy(() => import("../../pages/authentication/signup-delegate"));
const SignUpDelegateVerifyPage = lazy(
  () => import("../../pages/authentication/signup-delegate-verify")
);

// const Signup = lazy(() => import("../../pages/authentication/signup")); TODO: may be if signup is on web as well
const Resetpassword = lazy(() => import("../../pages/authentication/reset-password"));
const Forgotpassword = lazy(() => import("../../pages/authentication/forgot-password"));
const Emailverification = lazy(() => import("../../pages/authentication/email-verification"));
const Sentemail = lazy(() => import("../../pages/authentication/sent-email"));

export const authRoutes = [
  {
    id: 1,
    pathLink: SIGNINPATH,
    guard: PublicRoutesGuard,
    componentName: <Signin />,
  },
  // {
  //   id: 2,
  //   pathLink: SIGNUPPATH,
  //   guard: PublicRoutesGuard,
  //   componentName: <Signup />,
  // },
  {
    id: 3,
    pathLink: RESETPASSWORDPATH,
    guard: PublicRoutesGuard,
    componentName: <Resetpassword />,
  },
  {
    id: 4,
    pathLink: FORGOTPASSWORDPATH,
    guard: PublicRoutesGuard,
    componentName: <Forgotpassword />,
  },
  {
    id: 5,
    pathLink: EMAILVERIFICATIONPATH,
    guard: PublicRoutesGuard,
    componentName: <Emailverification />,
  },

  {
    id: 6,
    pathLink: `${AUTHENTICATIONPATH}${SLASHPATH}${SENTEMAILPATH}`,
    guard: PublicRoutesGuard,
    componentName: <Sentemail />,
  },
  {
    id: 7,
    pathLink: SIGNINDELEGATEPATH,
    guard: PublicRoutesGuard,
    componentName: <SignInDelegatePage />,
  },
  {
    id: 8,
    pathLink: SIGNUPDELEGATEPATH,
    guard: PublicRoutesGuard,
    componentName: <SignUpDelegatePage />,
  },
  {
    id: 8,
    pathLink: SIGNUPDELEGATEVERIFYPATH,
    guard: PublicRoutesGuard,
    componentName: <SignUpDelegateVerifyPage />,
  },
  // {
  //   id: 7,
  //   pathLink: CHANGEEMAILVERIFICATIONPATH,
  //   guard: PublicRoutesGuard,
  //   componentName: <Changeemailverificationpage />,
  // },
  // {
  //   id: 10000,
  //   index: true,
  //   guard: PublicRoutesGuard,
  //   componentName: <Navigate to={HOMEPATH} />,
  // },
];
