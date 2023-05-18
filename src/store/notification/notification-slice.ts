import { createSlice } from "@reduxjs/toolkit";

const notificationInitialState: any = {};

const notificationSlice = createSlice({
  name: "notification",
  initialState: notificationInitialState,
  reducers: {},
  extraReducers(builder) {},
});

export const {} = notificationSlice.actions;

export default notificationSlice.reducer;
