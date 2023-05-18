import { createSlice } from "@reduxjs/toolkit";

import {
  clearCurrentStepReducer,
  clearIsProfileModalOpenReducer,
  clearIsQuestionModalOpenReducer,
  clearRestrictGoBackReducer,
  clearSidebarHideReducer,
  hideBannerReducer,
  setBannerHeadingReducer,
  setCurrentStepReducer,
  setGridDefaultReducer,
  setGridReducer,
  setIsProfileModalOpenReducer,
  setIsQuestionModalOpenReducer,
  setPageNameReducer,
  setPageStateReducer,
  setRestrictGoBackReducer,
  setSidebarHideReducer,
  showBannerReducer,
} from "./layout-reducers";

const layoutInitialState: any = {
  mobDrawer: false,
  openDrawer: true,
  offsetXs: 1,
  offsetMd: 2,
  offsetLg: 2,
  mainXs: 22,
  mainMd: 20,
  mainLg: 20,
  hideSidebar: false,
  showBanner: true,
  bannerHeading: "",
  pageName: "",
  currentStep: 0,
  previousStep: 0,
  restrictGoBack: false,
  isQuestionModalOpen: false,
  isProfileModalOpen: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState: layoutInitialState,
  reducers: {
    setGrid: setGridReducer,
    setGridDefault: setGridDefaultReducer,
    setSidebarHide: setSidebarHideReducer,
    setSidebarShow: clearSidebarHideReducer,
    hideBanner: hideBannerReducer,
    showBanner: showBannerReducer,
    setBannerHeading: setBannerHeadingReducer,
    setPageName: setPageNameReducer,
    setPageState: setPageStateReducer,
    setCurrentStep: setCurrentStepReducer,
    clearCurrentStep: clearCurrentStepReducer,
    setRestrictGoBack: setRestrictGoBackReducer,
    clearRestrictGoBack: clearRestrictGoBackReducer,
    setIsQuestionModalOpen: setIsQuestionModalOpenReducer,
    clearIsQuestionModalOpen: clearIsQuestionModalOpenReducer,
    setIsProfileModalOpen: setIsProfileModalOpenReducer,
    clearIsProfileModalOpen: clearIsProfileModalOpenReducer,
  },

  extraReducers(builder) {},
});

export const {
  setGrid,
  setGridDefault,
  setSidebarHide,
  setSidebarShow,
  hideBanner,
  showBanner,
  setBannerHeading,
  setPageName,
  setPageState,
  setCurrentStep,
  clearCurrentStep,
  setRestrictGoBack,
  clearRestrictGoBack,
  clearIsQuestionModalOpen,
  setIsQuestionModalOpen,
  setIsProfileModalOpen,
  clearIsProfileModalOpen,
} = layoutSlice.actions;

export default layoutSlice.reducer;
