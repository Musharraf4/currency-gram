import { createSlice } from "@reduxjs/toolkit";

const giftSlice = createSlice({
  name: "gift",
  initialState: {
    giftDetails: {} as any,
  },
  reducers: {
    getGiftDetails: (state, action) => {
      state.giftDetails = action.payload;
      console.log("🚀 ~ file: gift-slice.ts:11 ~ state.giftDetails:", state.giftDetails);
    },
  },
});

export const { getGiftDetails } = giftSlice.actions;

export default giftSlice.reducer;
