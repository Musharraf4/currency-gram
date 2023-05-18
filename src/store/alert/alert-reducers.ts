export const showAlertMessageReducer = (state:any, {payload}:any) => ({

    ...state,
    alertMessage : payload.alertMessage,
    showAlert : true,
    alertType : payload.alertType,
    showIcon : payload.showIcon,
})

export const hideAlertMessageReducer = (state: any) => ({
    ...state,
    alertMessage: '',
    showAlert: false,
    alertType: '',
    showIcon: ''
})