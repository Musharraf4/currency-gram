import { createSlice } from "@reduxjs/toolkit";

import { hideAlertMessageReducer, showAlertMessageReducer } from "./alert-reducers";

import { IALERTSTATE } from "./alert-slice-interface";


const alertInitialState: IALERTSTATE = {
    showAlert: false,
    alertMessage: '',
    showIcon: false,
    alertType: ''
    
} 

const alertSlice = createSlice({

    name: 'alert',

    initialState : alertInitialState as any,

    reducers: {

        showAlertMessage: showAlertMessageReducer,       
        hideAlertMessage: hideAlertMessageReducer
    }
})

export const { showAlertMessage, hideAlertMessage } = alertSlice.actions;

export default alertSlice.reducer