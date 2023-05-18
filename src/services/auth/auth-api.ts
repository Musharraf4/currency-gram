import {
  CHANGEEMAILAPI,
  CHANGEPASSWORDAPI,
  FORGOTPASSWORDAPI,
  HTTPMETHODS,
  LOGINAPI,
  LOGOUTAPI,
  RESENDEMAILAPI,
  RESETPASSWORDAPI,
  SIGNUPAPI,
  VERIFYEMAILAPI,
} from "../../constants/api-endpoints-constant";
import { GLOBALSERVERERRORMESSAGE } from "../../constants/api-messages-constant";
import { LOCALSTORAGEAUTHUSERINFO } from "../../constants/browser-storage-constant";
import { SIGNUPDELEGATEVERIFYPATH } from "../../constants/routes-constant";
import {
  removeDataFromLocalStorage,
  saveDataToLocalStorage,
} from "../../utils/browser-storage-utils";

export const loginApi = (builder: any) =>
  builder.mutation({
    query: (body: any) => {
      return {
        url: LOGINAPI,
        method: HTTPMETHODS.post,
        body: body,
      };
    },
    transformResponse(response: any) {
      const formatResponse = response?.data;
      const responseData = {
        token: formatResponse?.authToken, // store access token
        refreshToken: formatResponse?.refreshToken, // store refresh token
        user: formatResponse?.user, // store user details
        message: response?.message,
        role: [formatResponse?.user?.defaultRole],
      };
      saveDataToLocalStorage(LOCALSTORAGEAUTHUSERINFO, responseData);
      return responseData;
    },
    transformErrorResponse: (response: any) => {
      const errorData = {
        error: response?.data?.message || GLOBALSERVERERRORMESSAGE,
      };
      return errorData;
    },
  });

export const loginAsStudentApi = (builder: any) =>
  builder.mutation({
    query: (body: any) => {
      return {
        url: LOGINAPI,
        method: HTTPMETHODS.post,
        body: body,
      };
    },
    transformResponse(response: any) {
      const formatResponse = response?.data;
      const responseData = {
        token: formatResponse?.authToken, // store access token
        refreshToken: formatResponse?.refreshToken, // store refresh token
        user: formatResponse?.user, // store user details
        message: response?.message,
        role: [formatResponse?.user?.defaultRole],
      };
      saveDataToLocalStorage(LOCALSTORAGEAUTHUSERINFO, responseData);
      return responseData;
    },
    transformErrorResponse: (response: any) => {
      const errorData = {
        error: response?.data?.message || GLOBALSERVERERRORMESSAGE,
      };
      return errorData;
    },
  });
export const logoutApi = (builder: any) =>
  builder.mutation({
    query: (body?: any) => {
      return {
        url: LOGOUTAPI,
        method: HTTPMETHODS.put,
        body: body,
      };
    },
    transformResponse(response: any) {
      const responseData = {
        message: response?.message,
      };
      removeDataFromLocalStorage(LOCALSTORAGEAUTHUSERINFO);
      return responseData;
    },
    transformErrorResponse: (response: any) => {
      const errorData = {
        error: response?.data?.message || GLOBALSERVERERRORMESSAGE,
      };
      removeDataFromLocalStorage(LOCALSTORAGEAUTHUSERINFO);
      return errorData;
    },
  });

export const signupApi = (builder: any) =>
  builder.mutation({
    query: (body?: any) => {
      return {
        url: SIGNUPAPI,
        method: HTTPMETHODS.post,
        body: body,
      };
    },
    transformResponse(response: any, meta: any, arg: any) {
      const responseData = {
        user: response?.data?.user,
        message: response?.data?.message,
        userEmail: arg?.email,
      };
      return responseData;
    },
    transformErrorResponse: (response: any, meta: any, arg: any) => {
      const errorData = {
        error: response?.data?.message || GLOBALSERVERERRORMESSAGE,
        userEmail: arg.email,
      };
      return errorData;
    },
  });

export const signupDelegateApi = (builder: any) =>
  builder.mutation({
    query: (body?: any) => {
      return {
        url: SIGNUPAPI,
        method: HTTPMETHODS.post,
        body: body.body,
      };
    },
    transformResponse(response: any, meta: any, arg: any) {
      const responseData = {
        user: response?.data?.user,
        message: response?.data?.message,
        userEmail: arg?.email,
      };
      arg.navigate(`${SIGNUPDELEGATEVERIFYPATH}`);
      return responseData;
    },
    transformErrorResponse: (response: any, meta: any, arg: any) => {
      const errorData = {
        error: response?.data?.message || GLOBALSERVERERRORMESSAGE,
        userEmail: arg.email,
      };
      arg.navigate(`${SIGNUPDELEGATEVERIFYPATH}`);
      return errorData;
    },
  });

export const forgotPasswordApi = (builder: any) =>
  builder.mutation({
    query: (body?: any) => {
      return {
        url: FORGOTPASSWORDAPI,
        method: HTTPMETHODS.post,
        body: body?.body,
      };
    },
    transformResponse(response: any, meta: any, arg: any) {
      const responseData = {
        userEmail: arg?.email,
        message: response?.message,
      };
      return responseData;
    },
    transformErrorResponse: (response: any, meta: any, arg: any) => {
      const errorData = {
        error: response?.data?.message || GLOBALSERVERERRORMESSAGE,
        userEmail: arg?.email,
      };
      return errorData;
    },
  });

export const resetPasswordApi = (builder: any) =>
  builder.mutation({
    query: (body?: any) => {
      return {
        url: RESETPASSWORDAPI,
        method: HTTPMETHODS.post,
        body: body?.body,
      };
    },
    transformResponse(response: any, meta: any, arg: any) {
      const responseData = {
        message: response?.message,
        isPasswordReset:
          response?.message === "Your password have been successfully changed." ? true : false,
      };
      arg?.setIsPasswordResetSuccess?.(true);
      return responseData;
    },
    transformErrorResponse: (response: any, meta: any, arg: any) => {
      const errorData = {
        error: response?.data?.message || GLOBALSERVERERRORMESSAGE,
        isPasswordReset: false,
      };
      return errorData;
    },
  });

export const verifyEmailApi = (builder: any) =>
  builder.mutation({
    query: (body?: any) => {
      return {
        url: VERIFYEMAILAPI,
        method: HTTPMETHODS.get,
        body: body,
      };
    },
    transformResponse(response: any, meta: any, arg: any) {
      const responseData = {
        message: response.data.message,
        emailVerified:
          response.data.message === "Your email address is verified successfully." ? true : false,
      };
      return responseData;
    },
    transformErrorResponse: (response: any, meta: any, arg: any) => {
      const errorData = {
        error: response?.data?.message || GLOBALSERVERERRORMESSAGE,
        emailVerified: false,
        email: arg?.userId,
      };
      return errorData;
    },
  });

export const resendEmailApi = (builder: any) =>
  builder.mutation({
    query: (body?: any) => {
      return {
        url: RESENDEMAILAPI,
        method: HTTPMETHODS.post,
        body: body,
      };
    },
    transformResponse(response: any, meta: any, arg: any) {
      const responseData = {
        message: response.data.message,
        // message : response?.data?.message
      };
      return responseData;
    },
    transformErrorResponse: (response: any, meta: any, arg: any) => {
      const errorData = {
        error: response?.data?.message || GLOBALSERVERERRORMESSAGE,
        emailVerified: false,
        email: arg?.userId,
      };
      return errorData;
    },
  });
export const changePasswordApi = (builder: any) =>
  builder.mutation({
    query: (body?: any) => {
      return {
        url: CHANGEPASSWORDAPI,
        method: HTTPMETHODS.post,
        body: body?.body,
      };
    },
    transformResponse(response: any, meta: any, arg: any) {
      const responseData = {
        message: response?.message,
      };

      setTimeout(() => {
        removeDataFromLocalStorage(LOCALSTORAGEAUTHUSERINFO);
      }, 1000);
      return responseData;
    },
    transformErrorResponse: (response: any, meta: any, arg: any) => {
      const errorData = {
        error: response?.data?.message || GLOBALSERVERERRORMESSAGE,
      };
      return errorData;
    },
  });

export const changeEmailApi = (builder: any) =>
  builder.mutation({
    query: (body?: any) => {
      return {
        url: CHANGEEMAILAPI,
        method: HTTPMETHODS.post,
        body: body,
      };
    },
    transformResponse(response: any, meta: any, arg: any) {
      const responseData = {
        message: response?.data?.message,
      };
      setTimeout(() => {
        removeDataFromLocalStorage(LOCALSTORAGEAUTHUSERINFO);
      }, 1000);
      return responseData;
    },
    transformErrorResponse: (response: any, meta: any, arg: any) => {
      const errorData = {
        error: response?.data?.message || GLOBALSERVERERRORMESSAGE,
      };
      return errorData;
    },
  });
