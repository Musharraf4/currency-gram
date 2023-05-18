import { Col, Row } from "antd";
import { useState } from "react";
import { HorizontalLayoutTemplate } from "../../../templates/horizontal-layout/horizontal-layout";
import { SendMoneyForm } from "../../../templates/send-money-form/send-money-form";

import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { MONEYRECEIVEDVIALINKDATA } from "./money-received-via-link-data";

export const MoneyReceivedViaLink = () => {
  const [step, setStep] = useState(0);
  const sharedLinkerName = MONEYRECEIVEDVIALINKDATA.sharedLinkerNameFunction();
  const sharedLinkerNameButton = MONEYRECEIVEDVIALINKDATA.sharedLinkerNameButtonFunction(setStep);
  const sharedLinkInputData = MONEYRECEIVEDVIALINKDATA.sharedLinkInputDataFunction();
  const onAddDetailsSuccess = (e: any) => {
    console.log(e);
  };
  const onAddDetailsFailed = (e: any) => {
    console.log(e);
  };
  return (
    <AppCardWhite>
      <Row>
        <Col xs={1} lg={3}></Col>
        <Col xs={22} lg={18}>
          {step === 0 ? (
            <div className="min-h-[70vh] grid place-content-center text-center">
              <HorizontalLayoutTemplate data={sharedLinkerName} button={sharedLinkerNameButton} />
            </div>
          ) : (
            <SendMoneyForm
              FormInputField={sharedLinkInputData}
              onFinish={(e: any) => onAddDetailsSuccess?.(e)}
              onFinishFailed={(e: any) => onAddDetailsFailed?.(e)}
              firstButtonText="ADD"
            />
          )}
        </Col>
        <Col xs={1} lg={3}></Col>
      </Row>
    </AppCardWhite>
  );
};
