import { createSlice } from "@reduxjs/toolkit";
import { setReferenceDataReducer } from "./reference-data-reducer";

const referenceDataInitialState: any = {};

export const referenceDataSlice = createSlice({
  name: "referenceData",
  initialState: referenceDataInitialState,
  reducers: {
    setReferenceData: setReferenceDataReducer,
  },
  extraReducers(builder) {},
});

export const { setReferenceData } = referenceDataSlice.actions;

export default referenceDataSlice.reducer;
