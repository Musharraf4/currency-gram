import { AuthWrapperTemplate } from "../../../templates/auth-wrapper/auth-wrapper";
import { SIGNINIMPORT } from "./signin-import";
import { useSignIn } from "./use-signin";

export const SignInDelegate = () => {
  const {
    navigate,
    signinSubmitHandlerDelegateSuccess,
    signinFormInputFields,
    changeForm,
    signinSubmitHandlerError,
  }: any = useSignIn();

  return (
    <AuthWrapperTemplate
      formFields={signinFormInputFields}
      onFinish={(e: any) => signinSubmitHandlerDelegateSuccess?.(e)}
      onFinishFailed={(e: any) => signinSubmitHandlerError?.(e)}
      cancelBtnFunction={() => navigate(`${SIGNINIMPORT.FORGOTPASSWORDPATH}`)}
      showLeft={false}
      showMiddle={false}
      col1Xl={8}
      col2Xl={8}
      col3Xl={8}
      formLg={22}
      formText="Log in to Currency Gram"
      formSubmitButtonText="Login"
      secondButtonText="Reset Password"
      makeAccountRoute={(e: any) => navigate?.(`${SIGNINIMPORT.SIGNUPDELEGATEPATH}`)}
      NoAccountTitle="if you don't have an account ?"
      makeAccountTitle="Register Now"
      linkText="Forgot Password"
      linkText2="Register"
      haveAccount="Don't have an account?"
      formContainerClassName="mx-auto"
      setFormFields={(e: any) => changeForm?.(e)}
    />
  );
};
