import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { twoFactorAuthFormInputFieldsFuntion } from "./two-factor-authentication-data";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { useAppDispatch, useAppSelector } from "../../../store/store";

export const useTwoFactorAuthentication = () => {
  const navigate = useNavigate();
  const { openAlert } = useAppAlert();
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const twoFactorAuthFormInputFields: any = twoFactorAuthFormInputFieldsFuntion(
    showFields,
    setShowFields
  );

  const onConfirmOTP = (e: any) => {
    openAlert("Password Change Successfully", "success");
    setIsOtpOpen(false);
  };
  const changePasswordInitialValues = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  const submitTwoFactorAuthFormHandler = (values: any) => {
    console.log(values);
    const body = {
      oldPassword: values.currentPassword,
      newPassword: values.newPassword,
    };
    setIsOtpOpen(true);
    // console.log({ body });
  };

  const submitTwoFactorAuthFormFailed = (values: any) => {
    console.log(values);
  };

  const intermediateButton = (formik: any) => {
    if (formik.values.currentPassword === "") {
      formik.setFieldTouched("currentPassword");
    } else {
      setShowFields(true);
    }
  };

  return {
    showFields,
    setShowFields,
    showOldPassword,
    setShowOldPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    twoFactorAuthFormInputFields,
    submitTwoFactorAuthFormHandler,
    submitTwoFactorAuthFormFailed,
    intermediateButton,
    navigate,
    auth,
    onConfirmOTP,
    isOtpOpen,
    setIsOtpOpen,
  };
};
