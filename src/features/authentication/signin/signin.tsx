import { SIGNINREQUESTLOADERMESSAGE } from "../../../constants/views-constant";
import { AuthWrapperTemplate } from "../../../templates/auth-wrapper/auth-wrapper";
import { useSignIn } from "./use-signin";

export const SignIn = () => {
  const {
    signinSubmitHandlerSuccess,
    signinFormInputFields,
    changeForm,
    studentLogin,
    signinFormStudentInputFields,
    signinSubmitHandlerError,
    loginStatus,
    signinInitialValues,
    onValuesChange,
    isSubmitBtnDisable,
    isStudentSubmitBtnDisable,
  }: any = useSignIn();

  return (
    <AuthWrapperTemplate
      formFields={studentLogin ? signinFormStudentInputFields : signinFormInputFields}
      onFinish={(e: any) => signinSubmitHandlerSuccess?.(e)}
      onFinishFailed={(e: any) => signinSubmitHandlerError?.(e)}
      onValuesChange={(e: any, f: any) => onValuesChange?.(e, f)}
      initialValues={signinInitialValues}
      leftXs={1}
      switchText="Login as Student"
      leftTitle="Scan the QR code to "
      leftTitleOrange="Create an Account"
      formText="Log in to Currency Gram"
      loaderText={SIGNINREQUESTLOADERMESSAGE}
      formSubmitButtonText={"Login"}
      statusLoading={loginStatus?.isLoading}
      submitBtnDisable={
        (studentLogin ? isStudentSubmitBtnDisable : isSubmitBtnDisable) || loginStatus?.isLoading
      }
      QrValue="www.google.com"
      linkText="Forgot Password"
      linkText2="Sign Up"
      haveAccount="Don't have an account?"
      setFormFields={(e: any) => changeForm(e)}
      qrValue="www.google.com"
    />
  );
};
