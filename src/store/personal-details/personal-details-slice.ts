import { createSlice } from "@reduxjs/toolkit";

const personalDetailsInitialState = {
  name: ``,
  profileImage: "",
  role: "",
  personalProfileInfo: [] as any,
};

export const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState: personalDetailsInitialState,
  reducers: {},
  extraReducers(builder) {},
});

// export const { } = personalDetailsSlice.actions;

export default personalDetailsSlice.reducer;
