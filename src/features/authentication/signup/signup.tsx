import { AuthWrapperTemplate } from "../../../templates/auth-wrapper/auth-wrapper";
import { useSignUp } from "./use-signup";
import { SIGNINPATH } from "../../../constants/routes-constant";

export const SignUp = () => {
  const { signupInitialValues, navigate, signupSubmitHandler, signupFormInputFields }: any =
    useSignUp();

  return (
    <AuthWrapperTemplate
      formFields={signupFormInputFields}
      initialValues={signupInitialValues}
      formSubmitHandler={signupSubmitHandler}
      // FORMVALIDATIONSCHEMA={SIGNUPFORMVALIDATIONSCHEMA}
      leftTitle="Let's Create"
      leftTitleOrange="Your"
      leftTitle2="Account"
      formSubmitButtonText="Sign Up"
      linkText2Route={() => navigate(`${SIGNINPATH}`)}
      linkText2="Sign In"
      haveAccount="Already have an account?"
      showSignUpOptions={true}
    />
  );
};
