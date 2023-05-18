import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/store";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { useLoginMutation } from "../../../services/auth/auth-endpoints";
import { asyncApiRequest } from "../../../utils/api-utils";
import { SIGNINDATA } from "./signin-data";

export const useSignIn = () => {
  const [studentLogin, setStudentLogin] = useState(false);
  const [loginTrigger, loginStatus] = useLoginMutation();
  const [isSubmitBtnDisable, SetIsSubmitBtnDisable] = useState(true);
  const [isStudentSubmitBtnDisable, SetIsStudentSubmitBtnDisable] = useState(true);
  const navigate = useNavigate();
  const { auth } = useAppSelector((state) => state);
  const { openAlert } = useAppAlert();

  const signinFormInputFields: any = SIGNINDATA.signinFormInputFieldsFuntion();
  const signinFormStudentInputFields: any = SIGNINDATA.signinFormStudentInputFieldsFuntion();

  const changeForm = (e: any) => {
    setStudentLogin(e);
  };

  const onValuesChange = (changedValues: any, allValues: any) => {
    console.log(allValues);
    studentLogin
      ? SetIsStudentSubmitBtnDisable(!(allValues.emailStudent !== ""))
      : SetIsSubmitBtnDisable(!(allValues.email !== "" && allValues.password !== ""));
  };

  const signinInitialValues: any = {
    email: "",
    password: "",
  };

  const signinSubmitHandlerSuccess = async (values: any) => {
    const body = {
      email: values.email,
      password: values.password,
    };
    await asyncApiRequest(loginTrigger(body), openAlert);
  };

  const signinSubmitHandlerDelegateSuccess = async (values: any) => {
    const body = {
      email: values.email,
      password: values.password,
    };
    await asyncApiRequest(loginTrigger(body), openAlert);
  };

  const signinSubmitHandlerError = (values: any) => {
    // console.log(values);
    // const userCredentials = {
    //   email: values.email,
    //   password: values.password,
    // };
  };

  return {
    signinInitialValues,
    signinSubmitHandlerSuccess,
    signinSubmitHandlerDelegateSuccess,
    auth,
    navigate,
    changeForm,
    signinFormInputFields,
    studentLogin,
    signinFormStudentInputFields,
    signinSubmitHandlerError,
    loginStatus,
    onValuesChange,
    isSubmitBtnDisable,
    isStudentSubmitBtnDisable,
  };
};
