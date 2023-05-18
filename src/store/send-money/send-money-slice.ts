import { createSlice } from "@reduxjs/toolkit";
import {
  clearAccountDetailsReducer,
  clearBulkPaymentDeleteEntryReducer,
  clearBulkPaymentEditFormReducer,
  setAccountDetailsReducer,
  setBulkPaymentDeleteEntryReducer,
  setBulkPaymentEditFormReducer,
} from "./send-money-reducers";

const sendMoneyInitialState = {
  sendMoneyLists: [] as any,
  singleSendMoney: {} as any,
  accountDetails: {} as any,
  sendAmount: 0,
  sendMoneyAddDetailsForm: {} as any,
  bulkPaymentEditForm: {} as any,
  deleteBulkEntry: {} as any,
};

export const sendMoneySlice = createSlice({
  name: "sendMoney",
  initialState: sendMoneyInitialState,
  reducers: {
    setAccountDetails: setAccountDetailsReducer,
    clearAccountDetails: clearAccountDetailsReducer,
    setBulkPaymentEditForm: setBulkPaymentEditFormReducer,
    clearBulkPaymentEditForm: clearBulkPaymentEditFormReducer,
    setBulkPaymentDeleteEntry: setBulkPaymentDeleteEntryReducer,
    clearBulkPaymentDeleteEntry: clearBulkPaymentDeleteEntryReducer,
  },
  extraReducers(builder) {},
});

export const {
  setAccountDetails,
  clearAccountDetails,
  setBulkPaymentEditForm,
  clearBulkPaymentEditForm,
  setBulkPaymentDeleteEntry,
  clearBulkPaymentDeleteEntry,
} = sendMoneySlice.actions;

export default sendMoneySlice.reducer;
