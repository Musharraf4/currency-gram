export const setBulkBeneficiaryEditFormReducer = (state: any, { payload }: any) => {
  state.bulkBeneficiaryEditForm = payload.bulkBeneficiaryEditForm;
};

export const clearBulkBeneficiaryEditFormReducer = (state: any) => {
  state.bulkBeneficiaryEditForm = {};
};
export const setBulkBeneficiaryDeleteEntryReducer = (state: any, { payload }: any) => {
  state.deleteBulkEntry = payload.deleteBulkEntry;
};

export const clearBulkBeneficiaryDeleteEntryReducer = (state: any) => {
  state.deleteBulkEntry = {};
};
