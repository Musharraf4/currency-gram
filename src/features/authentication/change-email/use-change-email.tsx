import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/store";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { CHANGEEMAILDATA } from "./change-email-data";

export const useChangeEmail = () => {
  const navigate = useNavigate();
  const { openAlert } = useAppAlert();
  const { auth } = useAppSelector((state) => state);
  const [showFields, setShowFields] = useState(false);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const changeEmailFormInputFields: any = CHANGEEMAILDATA.changeEmailFormInputFieldsFuntion();

  const changeEmailInitialValues = {
    currentPassword: "",
    newEmail: "",
  };

  const onConfirmOTP = (e: any) => {
    openAlert("Email Change Successfully", "success");
    setIsOtpOpen(false);
  };
  const submitChangeEmailFormHandler = (values: any) => {
    console.log(values);
    setIsOtpOpen(true);
    // const body = {
    //   password: values.currentPassword,
    //   newEmail: values.newEmail,
    // };
    // console.log({ body });
  };

  const intermediateButton = (formik: any) => {
    if (formik.values.currentEmail === "") {
      formik.setFieldTouched("currentEmail");
    } else {
      const body = {
        email: auth?.user?.email,
        password: formik.values.currentPassword,
      };
      console.log({ body });
    }
  };

  return {
    showFields,
    setShowFields,
    changeEmailFormInputFields,
    submitChangeEmailFormHandler,
    intermediateButton,
    changeEmailInitialValues,
    navigate,
    auth,
    onConfirmOTP,
    isOtpOpen,
    setIsOtpOpen,
  };
};
