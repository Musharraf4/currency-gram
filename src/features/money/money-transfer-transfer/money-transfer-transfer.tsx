import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { AuthorizeBankPaymentTemplate } from "../../../templates/authorize-bank-payment/authorize-bank-payment";
import { AppVerifyOtpInputModal } from "../../../components/modals/app-verify-otp-modal/app-verify-otp-modal";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { useNavigate, useParams } from "react-router-dom";
import {
  SENDMONEYPAYMENYTYPEPARAMSCONSTANTS,
  SENDMONEYTYPEPARAMSCONSTANTS,
} from "../../../constants/params-constant";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { clearAccountDetails } from "../../../store/send-money/send-money-slice";
import {
  MONEYTRANSFERPAYMENTTYPESUCCESSPARAM,
  SENDMONEYPATH,
  SLASHPATH,
} from "../../../constants/routes-constant";
import {
  clearCurrentStep,
  clearRestrictGoBack,
  setRestrictGoBack,
} from "../../../store/layout/layout-slice";
import { AppModal } from "../../../components/modals/app-modal/app-modal";

import logo from "../../../assets/logo/logo.svg";
import { ICONSCONSTANT } from "../../../constants/icons-constant";
export const MoneyTransferTransfer = () => {
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { transferType, paymentType } = useParams();
  console.log({ transferType, paymentType });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { sendMoney } = useAppSelector((state) => state);
  const { auth } = useAppSelector((state) => state);
  const [isAdded, setIsAdded] = useState(false);
  const amountScheduleForm = [
    SENDMONEYTYPEPARAMSCONSTANTS.business,
    SENDMONEYTYPEPARAMSCONSTANTS.donate,
  ];
  const onConfirmAdd = (e: any) => {
    // console.log(e);
    navigate(
      `${SENDMONEYPATH}${SLASHPATH}${transferType}${SLASHPATH}${SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.single}${SLASHPATH}${MONEYTRANSFERPAYMENTTYPESUCCESSPARAM}`
    );
  };
  const onConfirm = (e: any) => {
    setIsOtpOpen(false);
    if (amountScheduleForm.includes(transferType as any)) {
      setIsAdded(true);
      return;
    }
    setPaymentSuccess(true);
    // dispatch(clearAccountDetails());
    // dispatch(clearCurrentStep());
  };
  const onViewReceipt = (e: any) => {
    console.log(e);
    setPaymentSuccess(false);
    dispatch(clearAccountDetails());
    dispatch(clearCurrentStep());
    navigate(
      `${SENDMONEYPATH}${SLASHPATH}${transferType}${SLASHPATH}${SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.single}${SLASHPATH}${MONEYTRANSFERPAYMENTTYPESUCCESSPARAM}`
    );
  };

  const onHideActivity = (e: any) => {
    setPaymentSuccess(false);
    dispatch(clearAccountDetails());
    dispatch(clearCurrentStep());
    navigate(`${SENDMONEYPATH}${SLASHPATH}${transferType}`);
  };
  const onDone = (e: any) => {
    setPaymentSuccess(false);
    dispatch(clearAccountDetails());
    dispatch(clearCurrentStep());
    navigate(`${SENDMONEYPATH}${SLASHPATH}${transferType}`);
  };
  useEffect(() => {
    dispatch(setRestrictGoBack());
    return () => {
      dispatch(clearRestrictGoBack());
    };
  }, []);
  return (
    <>
      {" "}
      <AppCardWhite cardClassName="pt-16 pb-32">
        <Row>
          <Col xs={2} md={4} lg={8}></Col>
          <Col xs={20} md={16} lg={8}>
            <AuthorizeBankPaymentTemplate
              mainHeading="Authorize Online Banking Payment to"
              isOtpOpen={isOtpOpen}
              setIsOtpOpen={setIsOtpOpen}
              senderImage={auth?.user?.profileImage || ""}
              isSinglePayment={paymentType === SENDMONEYPAYMENYTYPEPARAMSCONSTANTS?.single}
              receiverName={sendMoney.accountDetails?.["Account Title"]}
              receiverId={`xxxxxx ${sendMoney.accountDetails?.["Account No"]?.slice(-3)}`}
              senderId={auth?.user?.id || "xxxxxxxx"}
              senderName={`${auth?.user?.firstName || "John"} ${auth?.user?.lastName || "Smilga"}`}
              totalpayment={sendMoney?.sendAmount}
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
      {paymentSuccess && (
        <AppModal
          closable={false}
          isModalOpen={paymentSuccess}
          handleOk={() => setPaymentSuccess?.(false)}
          handleCancel={() => setPaymentSuccess?.(false)}
          submitBtnFunction={(e: any) => onViewReceipt?.(e)}
          heading="Success"
          subHeading={`$ ${sendMoney?.sendAmount}`}
          subHeadingClassName="my-2 text-xl"
          descriptionClassName="mt-4"
          description="04-3030203202302323"
          dividerText="Paid"
          mainTitleAvatarClassName="bg-tertiary-background"
          mainTitleSrc={logo}
          mainTitle={"John wilson"}
          avatarClassName="text-2xl"
          avatarSize={60}
          mainTitleAvatarSize={"small"}
          src={<ICONSCONSTANT.CheckCircleFilled className="text-primary text-5xl" />}
          headingClassName="my-1"
          firstButtonText="View Receipt"
          secondButtonText="Done"
          midButtonText="Hide Activity"
          cancelBtnFunction={(e: any) => onDone?.(e)}
          midBtnFunction={(e: any) => onHideActivity?.(e)}
        />
      )}
      {isAdded && (
        <AppModal
          isModalOpen={isAdded}
          handleOk={() => setIsAdded?.(false)}
          handleCancel={() => setIsAdded?.(false)}
          submitBtnFunction={(e: any) => onConfirmAdd?.(e)}
          heading="Payment Successful"
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
