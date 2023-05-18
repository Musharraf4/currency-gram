export const setReferenceDataReducer = (state: any, { payload }: any) => {
  state.mortgage = payload.mortgage;
  state.property = payload.property;
  state.otherData = payload.otherDatata;
};
