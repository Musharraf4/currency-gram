import { AuthWrapperTemplate } from "../../../templates/auth-wrapper/auth-wrapper";
import { useSignUp } from "./use-signup";

export const SignUpDelegate = () => {
  const {
    signupSubmitDelegateHandlerSuccess,
    changeForm,
    signupSubmitDelegateHandlerError,
    signupDelegateFormInputFields,
    signUpDelegateInitialValue,
  }: any = useSignUp();

  return (
    <AuthWrapperTemplate
      formFields={signupDelegateFormInputFields}
      initialValues={signUpDelegateInitialValue}
      onFinish={(e: any) => signupSubmitDelegateHandlerSuccess?.(e)}
      onFinishFailed={(e: any) => signupSubmitDelegateHandlerError?.(e)}
      showLeft={false}
      showMiddle={false}
      col1Xl={8}
      col2Xl={8}
      col3Xl={8}
      formLg={22}
      formText="Applicant Details"
      formSubmitButtonText="Next"
      formContainerClassName="margin-top-2 mx-auto"
      setFormFields={(e: any) => changeForm?.(e)}
      globalClassName={false}
    />
  );
};
