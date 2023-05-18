import { AuthWrapperTemplate } from "../../../templates/auth-wrapper/auth-wrapper";
import { useForgotPassword } from "./use-forgot-password";

import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { AppButtonLoader } from "../../../components/feedback/app-button-loader/app-button-loader";
import { GLOBALSERVERREQUESTPENDINGSTATEMESSAGE } from "../../../constants/views-constant";
import { COMMONASSETSCONSTANT } from "../../../constants/common-assets-constant";

export const ForgotPassword = () => {
  const {
    forgotFormInitialValues,
    forgotFormSubmitHandler,
    forgotPasswordFormInputFields,
    showForm,
    email,
    sendEmailAgain,
    navigate,
    forgotPasswordButton,
    forgotPasswordStatus,
  }: any = useForgotPassword();

  return (
    <>
      {
        <AuthWrapperTemplate
          formFields={forgotPasswordFormInputFields}
          formInitialValues={forgotFormInitialValues}
          onFinish={(e: any) => forgotFormSubmitHandler?.(e)}
          showLeft={false}
          showMiddle={false}
          col1Xl={8}
          col2Xl={8}
          col3Xl={8}
          formLg={22}
          formText={
            <div className="text-start">
              <AppTitle title="I’ve forgotten my password" />
              <AppTitle
                title="Enter the email address you signed up with"
                className="text-base font-normal my-3"
              />
              <AppTitle
                title="We'll send you an email that will let you choose another password"
                className="text-base font-normal"
              />
            </div>
          }
          formSubmitButtonText={
            forgotPasswordStatus?.isLoading ? (
              <AppButtonLoader loaderText={GLOBALSERVERREQUESTPENDINGSTATEMESSAGE} />
            ) : (
              "Reset Password"
            )
          }
          submitBtnDisable={forgotPasswordStatus?.isLoading}
          formContainerClassName="mx-auto"
          globalClassName={false}
          showForm={showForm}
          email={email}
          statusLoading={forgotPasswordStatus.isLoading}
          goBackImgSrc={COMMONASSETSCONSTANT.goBackImage}
          navigation={() => navigate(-1)}
          noFormButton={forgotPasswordButton}
          noFormHeading="I’ve forgotten my password"
          noFormData="If you’re logged out and can’t remember your password. we can send you an email with a link to reset it"
          goBackTitle="Forgot Password"
          resetLinkFunction={(e: any) => {
            sendEmailAgain?.(e);
          }}
        />
      }
    </>
  );
};
