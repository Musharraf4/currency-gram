import { useChangeEmail } from "./use-change-email";
import { Col, Row } from "antd";
import { AppVerifyOtpInputModal } from "../../../components/modals/app-verify-otp-modal/app-verify-otp-modal";
import { InfoFormTemplate } from "../../../templates/info-form/info-form";

export const ChangeEmail = () => {
  const {
    changeEmailFormInputFields,
    submitChangeEmailFormHandler,
    submitChangeEmailFormHandlerFailed,
    onConfirmOTP,
    isOtpOpen,
    setIsOtpOpen,
  }: any = useChangeEmail();

  return (
    <>
      <Row>
        <Col xs={1} lg={3}></Col>
        <Col xs={22} lg={18}>
          <InfoFormTemplate
            heading="Change Email"
            title="Need to change your email address ?"
            formFields={changeEmailFormInputFields}
            onSubmitSuccess={(e: any) => submitChangeEmailFormHandler?.(e)}
            onSubmitFailed={(e: any) => submitChangeEmailFormHandlerFailed?.(e)}
            firstButtonText="Change Email"
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
