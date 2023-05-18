import { Col, Row } from "antd";
import { AppVerifyOtpInputModal } from "../../../components/modals/app-verify-otp-modal/app-verify-otp-modal";
import { InfoFormTemplate } from "../../../templates/info-form/info-form";
import { useTwoFactorAuthentication } from "./use-two-factor-authentication";

export const TwoFactorAuthentication = () => {
  const {
    onConfirmOTP,
    isOtpOpen,
    setIsOtpOpen,
    twoFactorAuthFormInputFields,
    submitTwoFactorAuthFormHandler,
    submitTwoFactorAuthFormFailed,
  }: any = useTwoFactorAuthentication();
  return (
    <>
      <Row>
        <Col xs={1} lg={3}></Col>
        <Col xs={22} lg={18}>
          <InfoFormTemplate
            heading="Two Factor Authentication"
            title="We’ll send you a security code by sms, which you can use to approve access."
            formFields={twoFactorAuthFormInputFields}
            onSubmitSuccess={(e: any) => submitTwoFactorAuthFormHandler?.(e)}
            onSubmitFailed={(e: any) => submitTwoFactorAuthFormFailed?.(e)}
            firstButtonText="Send OTP"
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
