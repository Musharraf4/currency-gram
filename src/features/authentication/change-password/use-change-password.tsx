import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { useAppSelector } from "../../../store/store";
import { CHANGEPASSWORDDATA } from "./change-password-data";
import { useChangePasswordMutation } from "../../../services/auth/auth-endpoints";
import { asyncApiRequest } from "../../../utils/api-utils";

export const useChangePassword = () => {
  const navigate = useNavigate();
  const { openAlert } = useAppAlert();
  const { auth } = useAppSelector((state) => state);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [changePasswordTrigger, changePasswordStatus] = useChangePasswordMutation();

  const changePasswordFormInputFields: any =
    CHANGEPASSWORDDATA.changePasswordFormInputFieldsFuntion();

  //TODO: use that funtion once OTP functionality implemented
  const onConfirmOTP = (e: any) => {
    openAlert("Password Change Successfully", "success");
    setIsOtpOpen(false);
  };

  const changePasswordInitialValues = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const submitChangePasswordFormHandler = async (values: any) => {
    console.log(values);
    const body = {
      oldPassword: values.currentPassword,
      newPassword: values.newPassword,
    };
    const data = {
      body,
      setIsOtpOpen,
    };
    await asyncApiRequest(changePasswordTrigger(data), openAlert);
  };

  const submitChangePasswordFormFailed = (values: any) => {};

  return {
    changePasswordFormInputFields,
    changePasswordInitialValues,
    submitChangePasswordFormHandler,
    navigate,
    auth,
    submitChangePasswordFormFailed,
    onConfirmOTP,
    isOtpOpen,
    setIsOtpOpen,
    changePasswordStatus,
  };
};
