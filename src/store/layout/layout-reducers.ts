export const setPageStateReducer = (state: any, { payload }: any) => {
  state.restrictGoBack = payload.restrictGoBack;
};

export const setPageNameReducer = (state: any, { payload }: any) => {
  state.pageName = payload.pageName;
};
export const setBannerHeadingReducer = (state: any, { payload }: any) => {
  state.bannerHeading = payload.heading;
};
export const showBannerReducer = (state: any) => {
  state.showBanner = true;
};
export const hideBannerReducer = (state: any) => {
  state.showBanner = false;
};

export const setCurrentStepReducer = (state: any, { payload }: any) => {
  console.log(payload);
  state.currentStep = payload.currentStep;
  state.previousStep = payload.previousStep;
};
export const clearCurrentStepReducer = (state: any) => {
  state.currentStep = 0;
  state.previousStep = 0;
};

export const setRestrictGoBackReducer = (state: any) => {
  state.restrictGoBack = true;
};
export const clearRestrictGoBackReducer = (state: any) => {
  state.restrictGoBack = false;
};

export const setIsQuestionModalOpenReducer = (state: any) => {
  state.isQuestionModalOpen = true;
};
export const clearIsQuestionModalOpenReducer = (state: any) => {
  state.isQuestionModalOpen = false;
};

export const setIsProfileModalOpenReducer = (state: any) => {
  state.isProfileModalOpen = true;
};
export const clearIsProfileModalOpenReducer = (state: any) => {
  state.isProfileModalOpen = false;
};

export const setSidebarHideReducer = (state: any) => {
  state.hideSidebar = true;
};
export const clearSidebarHideReducer = (state: any) => {
  state.hideSidebar = false;
};

export const setGridDefaultReducer = (state: any) => {
  state.offsetXs = 1;
  state.offsetMd = 2;
  state.offsetLg = 2;
  state.mainXs = 22;
  state.mainMd = 20;
  state.mainLg = 20;
};

export const setGridReducer = (state: any, { payload }: any) => {
  state.offsetXs = payload.offsetXs;
  state.offsetMd = payload.offsetMd;
  state.offsetLg = payload.offsetLg;
  state.mainXs = payload.mainXs;
  state.mainMd = payload.mainMd;
  state.mainLg = payload.mainLg;
};
