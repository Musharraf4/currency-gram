import { createSlice } from "@reduxjs/toolkit";

import {
  setLoginSuccessReducer,
  setProfileImageReducer,
  setUploadProfileImageReducer,
  setUserDataReducer,
  setRefreshTokenReducer,
} from "./auth-reducers";

import { IAUTHSTATE } from "./auth-slice-interface";
import { authAPI } from "../../services/auth/auth-endpoints";
import { loginApiSuccess } from "./auth-extra-reducers";

const authInitialState: IAUTHSTATE = {
  user: null,
  error: "",
  token: "",
  refreshToken: "",
  success: "",
  role: [],
  setUploadProfileImage: false,
  message: "",
  userEmail: "",
  emailVerified: false,
  isPasswordReset: false,
  isEmailChanged: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState: authInitialState,

  reducers: {
    // no more reducers can be made here. only these two if needed i will make.
    setUploadProfileImage: setUploadProfileImageReducer,
    setProfileImage: setProfileImageReducer,
    setRefreshToken: setRefreshTokenReducer,
    setLoginSuccess: setLoginSuccessReducer,
    setUserData: setUserDataReducer,
  },

  extraReducers(builder) {
    builder.addMatcher(authAPI.endpoints.login.matchFulfilled, loginApiSuccess);
  },
});

export const {
  setLoginSuccess,
  setProfileImage,
  setUserData,
  setUploadProfileImage,
  setRefreshToken,
} = authSlice.actions;

export default authSlice.reducer;
