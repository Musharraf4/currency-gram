import {
  EMPTYMESSAGEFROMSERVER,
  INVALIDTOKENMESSAGEFROMSERVER,
  NULLMESSAGEFROMSERVER,
  UNAUTHORIZEDSERVERMESSAGE,
} from "../constants/api-messages-constant";

export const SERVERRESPONSEMESSAGESTONEGLECT = [
  INVALIDTOKENMESSAGEFROMSERVER,
  EMPTYMESSAGEFROMSERVER,
  NULLMESSAGEFROMSERVER,
  UNAUTHORIZEDSERVERMESSAGE,
];

export const showApiAlert = (apiMessage: any, alert: any, alertType = "error") => {
  if (SERVERRESPONSEMESSAGESTONEGLECT.includes(apiMessage)) return;
  alert(apiMessage, alertType);
};

export const asyncApiRequest = async (api: any, openAlert?: any) => {
  try {
    const successData: any = await api.unwrap();
    console.log(successData);
    showApiAlert(successData?.message, openAlert, "success");
    return { successData };
  } catch (errorData: any) {
    showApiAlert(errorData?.error, openAlert, "error");
    return { errorData };
  }
};
