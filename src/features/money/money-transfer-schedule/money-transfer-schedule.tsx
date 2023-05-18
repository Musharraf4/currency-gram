import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { AuthorizeBankPaymentTemplate } from "../../../templates/authorize-bank-payment/authorize-bank-payment";
import { AppVerifyOtpInputModal } from "../../../components/modals/app-verify-otp-modal/app-verify-otp-modal";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";

import {
  MONEYTRANSFERPAYMENTTYPESUCCESSPARAM,
  SENDMONEYPATH,
  SLASHPATH,
} from "../../../constants/routes-constant";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { clearRestrictGoBack, setRestrictGoBack } from "../../../store/layout/layout-slice";
import { MONEYTRANSFERSCHEDULEDATA } from "./money-transfer-schedule-data";

export const MoneyTransferSchedule = () => {
  const { transferType, paymentType } = useParams();
  const navigate = useNavigate();
  const FormInputField = MONEYTRANSFERSCHEDULEDATA.FormInputFieldsFuntion();
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const dispatch = useAppDispatch();
  const onConfirm = (e: any) => {
    setIsOtpOpen(false);
    navigate(
      `${SENDMONEYPATH}${SLASHPATH}${transferType}${SLASHPATH}${paymentType}${SLASHPATH}${MONEYTRANSFERPAYMENTTYPESUCCESSPARAM}`
    );
    // setPaymentSuccess(true);
    // dispatch(clearAccountDetails());
    // dispatch(clearCurrentStep());
  };
  const onScheduleSuccess = (e: any) => {
    setIsOtpOpen(true);
  };
  useEffect(() => {
    dispatch(setRestrictGoBack());
    return () => {
      dispatch(clearRestrictGoBack());
    };
  }, []);
  const onScheduleFailed = (e: any) => {};
  return (
    <>
      {" "}
      <AppCardWhite cardClassName="pt-4 pb-4">
        <Row>
          <Col xs={2} md={4} lg={8}></Col>
          <Col xs={20} md={16} lg={8}>
            <AuthorizeBankPaymentTemplate
              mainHeading="Authorize Online Banking Payment to"
              formFields={FormInputField}
              isPaymentSchedule={true}
              isOtpOpen={isOtpOpen}
              setIsOtpOpen={setIsOtpOpen}
              onFinish={(e: any) => onScheduleSuccess?.(e)}
              onFinishFailed={(e: any) => onScheduleFailed?.(e)}
            />
          </Col>
          <Col xs={2} md={4} lg={8}></Col>
        </Row>
      </AppCardWhite>
      {isOtpOpen && (
        <AppVerifyOtpInputModal
          isModalOpen={isOtpOpen}
          handleOk={() => setIsOtpOpen?.(false)}
          handleCancel={() => setIsOtpOpen?.(false)}
          sendOTP={(e: any) => onConfirm?.(e)}
        />
      )}
    </>
  );
};
