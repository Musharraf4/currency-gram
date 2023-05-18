export const showBreadcrumbReducer = (state: any, action: any) => {
    state.breadcrumbData = action.payload;
    state.showBreadcrumb = true;
}

export const hideBreadcrumbReducer = (state: any) => {
    state.breadcrumbData = null
    state.showBreadcrumb = false
}