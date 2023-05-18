import { useChangePassword } from "./use-change-password";
import { Col, Row } from "antd";
import { AppVerifyOtpInputModal } from "../../../components/modals/app-verify-otp-modal/app-verify-otp-modal";
import { InfoFormTemplate } from "../../../templates/info-form/info-form";
import { AppButtonLoader } from "../../../components/feedback/app-button-loader/app-button-loader";
import { GLOBALSERVERREQUESTPENDINGSTATEMESSAGE } from "../../../constants/views-constant";

export const ChangePassword = () => {
  const {
    changePasswordFormInputFields,
    submitChangePasswordFormHandler,
    submitChangePasswordFormFailed,
    onConfirmOTP,
    isOtpOpen,
    setIsOtpOpen,
    changePasswordStatus,
  }: any = useChangePassword();

  return (
    <>
      <Row>
        <Col xs={1} lg={3}></Col>
        <Col xs={22} lg={18}>
          <InfoFormTemplate
            heading="Change Password"
            title="Your new Password must be different from your previous password"
            formFields={changePasswordFormInputFields}
            onSubmitSuccess={(e: any) => submitChangePasswordFormHandler?.(e)}
            onSubmitFailed={(e: any) => submitChangePasswordFormFailed?.(e)}
            firstButtonText={
              changePasswordStatus?.isLoading ? (
                <AppButtonLoader loaderText={GLOBALSERVERREQUESTPENDINGSTATEMESSAGE} />
              ) : (
                "Change Password"
              )
            }
            submitBtnDisable={changePasswordStatus?.isLoading}
          />
        </Col>
        <Col xs={1} lg={3}></Col>
      </Row>
      {isOtpOpen && (
        <AppVerifyOtpInputModal
          isModalOpen={isOtpOpen}
          handleOk={() => setIsOtpOpen?.(false)}
          handleCancel={() => setIsOtpOpen?.(false)}
          sendOTP={(e: any) => onConfirmOTP?.(e)}
        />
      )}
    </>
  );
};
