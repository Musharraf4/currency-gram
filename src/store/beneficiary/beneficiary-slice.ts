import { createSlice } from "@reduxjs/toolkit";
import {
  clearBulkBeneficiaryDeleteEntryReducer,
  clearBulkBeneficiaryEditFormReducer,
  setBulkBeneficiaryDeleteEntryReducer,
  setBulkBeneficiaryEditFormReducer,
} from "./beneficiary-reducers";

const beneficiaryInitialState = {
  beneficiaryLists: [] as any,
  singleBeneficiary: {} as any,
  bulkCsvAllData: [] as any,
  bulkCsvErrorData: [] as any,
  csvFilename: "",
  bulkBeneficiaryEditForm: {} as any,
  deleteBulkEntry: {} as any,
};

export const beneficiarySlice = createSlice({
  name: "beneficiary",
  initialState: beneficiaryInitialState,
  reducers: {
    setBulkBeneficiaryEditForm: setBulkBeneficiaryEditFormReducer,
    clearBulkBeneficiaryEditForm: clearBulkBeneficiaryEditFormReducer,
    setBulkBeneficiaryDeleteEntry: setBulkBeneficiaryDeleteEntryReducer,
    clearBulkBeneficiaryDeleteEntry: clearBulkBeneficiaryDeleteEntryReducer,
  },
  extraReducers(builder) {},
});

export const {
  setBulkBeneficiaryEditForm,
  clearBulkBeneficiaryEditForm,
  setBulkBeneficiaryDeleteEntry,
  clearBulkBeneficiaryDeleteEntry,
} = beneficiarySlice.actions;

export default beneficiarySlice.reducer;
