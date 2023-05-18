import { createSlice } from "@reduxjs/toolkit";

import { hideBreadcrumbReducer, showBreadcrumbReducer } from "./breadcrumb-reducers";

import { IBREADCRUMBSTATE } from "./breadcrumb-slice-interface"; 


const breadcrumbInitialState : IBREADCRUMBSTATE  = {
    showBreadcrumb:false,
    breadcrumbData: null
}

const breadcrumbSlice = createSlice({
    name:'breadcrumb',
    initialState : breadcrumbInitialState,
    reducers:{
        showBreadcrumb: showBreadcrumbReducer,
        hideBreadcrumb: hideBreadcrumbReducer
    }
})

export const {showBreadcrumb , hideBreadcrumb} = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;