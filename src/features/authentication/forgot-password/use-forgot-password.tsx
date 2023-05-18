import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { FORGOTPASSWORDDATA } from "./forgot-password-data";
import { useForgotPasswordMutation } from "../../../services/auth/auth-endpoints";
// import { asyncApiRequest } from "../../../utils/api-utils";

export const useForgotPassword = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState(true);
  const [forgotPasswordTrigger, forgotPasswordStatus] = useForgotPasswordMutation();

  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { auth } = useAppSelector((state) => state);
  const forgotPasswordFormInputFields: any =
    FORGOTPASSWORDDATA.forgotPasswordFormInputFieldsFuntion();
  const { openAlert } = useAppAlert();
  const forgotPasswordButton = FORGOTPASSWORDDATA.forgotPasswordButtonFunction(setShowForm);
  const forgotFormInitialValues: any = {
    email: "",
  };

  const forgotFormSubmitHandler = async (values: any) => {
    const body = {
      email: values.email,
    };
    const data = { body };

    // await asyncApiRequest(forgotPasswordTrigger(data), openAlert);
  };

  const sendEmailAgain = (
    e: any,
    seconds: any,
    setMinutes: any,
    functionTimer: any,
    email: any
  ) => {
    console.log({ e, seconds, setMinutes, functionTimer, email });
    if (e?.seconds > 0) return;

    const userCredentials = {
      email: e?.email,
    };
  };

  return {
    forgotFormInitialValues,
    forgotFormSubmitHandler,
    auth,
    forgotPasswordFormInputFields,
    showForm,
    setShowForm,
    email,
    sendEmailAgain,
    forgotPasswordButton,
    navigate,
    forgotPasswordStatus,
  };
};
