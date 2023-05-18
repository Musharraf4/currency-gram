import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/store";
import { SIGNUPIMPORT } from "./signup-import";
import { useSignupDelegateMutation } from "../../../services/auth/auth-endpoints";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
// import { asyncApiRequest } from "../../../utils/api-utils";

export const useSignUp = () => {
  const [step, setStep] = useState(0);
  const [isAgree, setIsAgree] = useState(false);
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [signupDelegateTrigger, signupDelegateStatus] = useSignupDelegateMutation();
  const { auth } = useAppSelector((state) => state);
  const { openAlert } = useAppAlert();
  const navigate = useNavigate();
  const signupDelegateFormInputFields = SIGNUPIMPORT.signupDelegateFormInputFieldsFuntion();
  const signUpDelegateInitialValue = SIGNUPIMPORT.signUpDelegateInitialValueFunction();

  const changeScreen = (e: any) => {
    setStep(1);
  };

  const onCheckboxChange = (e: any) => {
    setIsAgree(e?.target.checked);
    setIsButtonDisable(!e?.target.checked);
  };

  const termsAndConditionDataButton = SIGNUPIMPORT.termsAndConditionDataButtonFunction(
    isButtonDisable,
    changeScreen
  );
  const thankyouDataButton = SIGNUPIMPORT.thankyouDataButtonFunction(isButtonDisable, changeScreen);
  const thankyouFunctionData = SIGNUPIMPORT.thankyouDataFunction();

  const signupSubmitHandler = (values: any) => {};
  const signupSubmitDelegateHandlerSuccess = async (values: any) => {
    const body = {
      firstName: values?.firstName,
      lastName: values?.lastName,
      email: values?.email,
      dob: values?.joiningDate,
      address: values?.address,
      password: "Admin@123",
      defaultRole: "BUSINESS",
    };
    const data = {
      body,
      navigate,
    };
    // await asyncApiRequest(signupDelegateTrigger(data), openAlert);
  };

  const signupSubmitHandlerError = (values: any) => {};

  const signupSubmitDelegateHandlerError = (values: any) => {};

  return {
    navigate,
    signupSubmitHandler,
    signupSubmitHandlerError,
    auth,
    signupDelegateFormInputFields,
    onCheckboxChange,
    termsAndConditionDataButton,
    thankyouFunctionData,
    thankyouDataButton,
    step,
    setStep,
    isAgree,
    setIsAgree,
    signUpDelegateInitialValue,
    signupSubmitDelegateHandlerSuccess,
    signupSubmitDelegateHandlerError,
  };
};
