import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import alertReducer from "./alert/alert-slice";
import breadcrumbReducer from "./breadcrumb/breadcrumb-slice";
import layoutReducer from "./layout/layout-slice";
import referenceDataReducer from "./reference-data/reference-data-slice";
import authReducer from "./auth/auth-slice";
import personalDetailsReducer from "./personal-details/personal-details-slice";
import beneficiaryReducer from "./beneficiary/beneficiary-slice";
import giftReducer from "./gift/gift-slice";
import sendMoneyReducer from "./send-money/send-money-slice";
import { baseAPI } from "../lib/rtk-query-data-fetch-lib";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    breadcrumb: breadcrumbReducer,
    layout: layoutReducer,
    referenceData: referenceDataReducer,
    auth: authReducer,
    personalDetails: personalDetailsReducer,
    beneficiary: beneficiaryReducer,
    gift: giftReducer,
    sendMoney: sendMoneyReducer,
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(baseAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
// Export a hook that can be reused to resolve types
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export default store;
