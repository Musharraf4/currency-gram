import { AuthWrapperTemplate } from "../../../templates/auth-wrapper/auth-wrapper";
import { useResetPassword } from "./use-reset-password";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { AppButtonLoader } from "../../../components/feedback/app-button-loader/app-button-loader";
import { GLOBALSERVERREQUESTPENDINGSTATEMESSAGE } from "../../../constants/views-constant";
import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { COMMONASSETSCONSTANT } from "../../../constants/common-assets-constant";

export const ResetPassword = () => {
  const {
    resetFormInitialValues,
    resetFormSubmitHandlerSuccess,
    resetPasswordFormInputFields,
    showForm,
    email,
    sendEmailAgain,
    navigate,
    resetPasswordStatus,
    isPasswordResetSuccess,
    setIsPasswordResetSuccess,
    onPasswordResetSuccessDone,
  }: any = useResetPassword();

  return (
    <>
      {
        <AuthWrapperTemplate
          formFields={resetPasswordFormInputFields}
          formInitialValues={resetFormInitialValues}
          onFinish={(e: any) => resetFormSubmitHandlerSuccess?.(e)}
          showLeft={false}
          showMiddle={false}
          col1Xl={8}
          col2Xl={8}
          col3Xl={8}
          formLg={22}
          formText={
            <>
              <AppTitle title="Create New Password" className="text-start" />
            </>
          }
          formSubmitButtonText={
            resetPasswordStatus?.isLoading ? (
              <AppButtonLoader loaderText={GLOBALSERVERREQUESTPENDINGSTATEMESSAGE} />
            ) : (
              "Reset Password"
            )
          }
          submitBtnDisable={resetPasswordStatus?.isLoading}
          statusLoading={resetPasswordStatus?.isLoading}
          formContainerClassName="mx-auto"
          globalClassName={false}
          showForm={showForm}
          email={email}
          goBackImgSrc={COMMONASSETSCONSTANT.goBackImage}
          navigation={() => navigate(-1)}
          noFormButton=""
          goBackTitle="Create New Password"
          resetLinkFunction={(e: any) => {
            sendEmailAgain?.(e);
          }}
        />
      }
      {isPasswordResetSuccess && (
        <AppModal
          isModalOpen={isPasswordResetSuccess}
          handleOk={() => setIsPasswordResetSuccess?.(false)}
          handleCancel={() => setIsPasswordResetSuccess?.(false)}
          submitBtnFunction={(e: any) => onPasswordResetSuccessDone?.(e)}
          heading="Password Changed Successfully"
          avatarClassName="text-5xl"
          headingClassName="my-3"
          avatarSize={70}
          src={<ICONSCONSTANT.CheckCircleFilled className="text-success text-5xl" />}
          firstButtonText="Done"
        />
      )}
    </>
  );
};
