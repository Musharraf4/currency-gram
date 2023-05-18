export const setAccountDetailsReducer = (state: any, { payload }: any) => {
  state.accountDetails = payload.accountDetails;
  state.sendAmount = payload.sendAmount;
  state.sendMoneyAddDetailsForm = payload.sendMoneyAddDetailsForm;
};

export const clearAccountDetailsReducer = (state: any) => {
  state.accountDetails = {};
  state.sendAmount = 0;
  state.sendMoneyAddDetailsForm = {};
};
export const setBulkPaymentEditFormReducer = (state: any, { payload }: any) => {
  state.bulkPaymentEditForm = payload.bulkPaymentEditForm;
};

export const clearBulkPaymentEditFormReducer = (state: any) => {
  state.bulkPaymentEditForm = {};
};

export const setBulkPaymentDeleteEntryReducer = (state: any, { payload }: any) => {
  state.deleteBulkEntry = payload.deleteBulkEntry;
};

export const clearBulkPaymentDeleteEntryReducer = (state: any) => {
  state.deleteBulkEntry = {};
};
