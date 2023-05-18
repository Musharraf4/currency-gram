import { Col, Row } from "antd";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { AccountDetailsTemplate } from "../../../templates/account-details/account-details";
import { useMoneyTransferAccountDetails } from "./use-money-transfer-account-details";
export const MoneyTransferAccountDetails = () => {
  const {
    selectedPayMethod,
    setSelectedPayMethod,
    prevPayMethod,
    setPrevPayMethod,
    dispatch,
    transferType,
    paymentType,
    navigate,
    changePayMethod,
    paymentFormInputFields,
    onFinish,
    onFinishFailed,
    sendMoney,
    setForm,
  } = useMoneyTransferAccountDetails();

  return (
    <AppCardWhite cardClassName="pt-4 pb-4">
      <Row>
        <Col xs={2} md={4} lg={8}></Col>
        <Col xs={20} md={16} lg={8}>
          <div className="text-center">
            <AccountDetailsTemplate
              mainTitle="Account Details"
              accountInfo={sendMoney?.accountDetails}
              formFields={setForm?.(transferType, paymentType)}
              hasPayment={true}
              firstButtonText="Next"
              onFinish={(e: any) => onFinish?.(e)}
              onFinishFailed={(e: any) => onFinishFailed?.(e)}
            />
          </div>
        </Col>
        <Col xs={2} md={4} lg={8}></Col>
      </Row>
    </AppCardWhite>
  );
};
