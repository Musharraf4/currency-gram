import { IAUTHSTATE } from "./auth-slice-interface";

// need to remove this also
export const setLoginSuccessReducer = (state: IAUTHSTATE, action: any) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.refreshToken = action.payload.refreshToken;
  state.error = "";
  state.success = action.payload.success;
  state.role = action.payload.role;
};

export const setRefreshTokenReducer = (state: any, action: any) => {
  const { payload } = action;
  console.log(payload);
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
};

export const setUploadProfileImageReducer = (state: IAUTHSTATE, action: any) => {
  state.setUploadProfileImage = action.payload;
};

export const setProfileImageReducer = (state: IAUTHSTATE, action: any) => {
  state.user!.profileImage = action.payload;
};

export const setUserDataReducer = (state: IAUTHSTATE, action: any) => {
  // state.user = action.payload;

  state.user!.userId = action.payload.userId;
  state.user!.gender = action.payload.gender;
  state.user!.country = action.payload.country;
  state.user!.dob = action.payload.dob;
  state.user!.city = action.payload.city;
  state.user!.address = action.payload.address;
  state.user!.aboutMe = "";
  state.user!.language = action.payload.language;
  state.user!.firstName = action.payload.firstName;
  state.user!.lastName = action.payload.lastName;
  state.user!.phoneNumber = action.payload.phoneNumber;
};
