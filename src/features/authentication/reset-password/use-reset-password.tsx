import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { RESETPASSWORDDATA } from "./reset-password-data";
import { useResetPasswordMutation } from "../../../services/auth/auth-endpoints";
import { asyncApiRequest } from "../../../utils/api-utils";
import { SIGNINPATH } from "../../../constants/routes-constant";

export const useResetPassword = () => {
  const [showForm, setShowForm] = useState(true);
  const [email, setEmail] = useState(true);
  const [resetPasswordTrigger, resetPasswordStatus] = useResetPasswordMutation();
  const [isPasswordResetSuccess, setIsPasswordResetSuccess] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { auth } = useAppSelector((state) => state);
  const resetPasswordFormInputFields: any = RESETPASSWORDDATA.resetPasswordFormInputFieldsFuntion();
  const { openAlert } = useAppAlert();

  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const user = searchParams.get("user");

  // console.log({ code, user })
  console.log(auth?.isPasswordReset);

  const resetFormInitialValues: any = {
    password: "",
    confirmPassword: "",
  };

  const resetFormSubmitHandlerSuccess = async (values: any) => {
    const body = {
      userId: user,
      // email:'clientflash@yopmail.com',
      password: values.password,
      code,
    };
    const data = { body, setIsPasswordResetSuccess };

    // await asyncApiRequest(resetPasswordTrigger(data), openAlert);
  };

  const sendEmailAgain = (
    e: any,
    seconds: any,
    setMinutes: any,
    functionTimer: any,
    email: any
  ) => {
    console.log(e);
    if (e.seconds > 0) return;

    const userCredentials = {
      email: e.email,
    };
  };
  const onPasswordResetSuccessDone = () => {
    navigate(`${SIGNINPATH}`);
  };
  return {
    resetFormInitialValues,
    resetFormSubmitHandlerSuccess,
    auth,
    resetPasswordFormInputFields,
    resetPasswordStatus,
    showForm,
    email,
    sendEmailAgain,
    navigate,
    isPasswordResetSuccess,
    setIsPasswordResetSuccess,
    onPasswordResetSuccessDone,
  };
};
