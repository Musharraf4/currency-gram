import { baseAPI } from "../../lib/rtk-query-data-fetch-lib";
import {
  changeEmailApi,
  changePasswordApi,
  forgotPasswordApi,
  loginApi,
  loginAsStudentApi,
  logoutApi,
  resendEmailApi,
  resetPasswordApi,
  signupApi,
  signupDelegateApi,
  verifyEmailApi,
} from "./auth-api";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: loginApi(builder),
    loginAsStudent: loginAsStudentApi(builder),
    logout: logoutApi(builder),
    signup: signupApi(builder),
    resetPassword: resetPasswordApi(builder),
    forgotPassword: forgotPasswordApi(builder),
    changePassword: changePasswordApi(builder),
    changeEmail: changeEmailApi(builder),
    resendEmail: resendEmailApi(builder),
    verifyEmail: verifyEmailApi(builder),
    signupDelegate: signupDelegateApi(builder),
  }),
});

export const {
  useLoginMutation,
  useLoginAsStudentMutation,
  useLogoutMutation,
  useSignupMutation,
  useSignupDelegateMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useChangeEmailMutation,
  useChangePasswordMutation,
  useResendEmailMutation,
  useVerifyEmailQuery,
} = authAPI;
