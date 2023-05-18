export const loginApiSuccess = (state: any, action: any) => {
  const { payload } = action;
  console.log(action.payload);
  state.user = payload?.user;
  state.token = payload?.token;
  state.success = payload?.success;
  state.role = payload?.role;
};

export const logoutApiSuccess = (state: any, action: any) => {
  const { payload } = action;
  console.log(action.payload);
  state.user = null;
  state.token = "";
  state.success = "";
  state.role = [];
};
