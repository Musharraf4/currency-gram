import { Col, Row } from "antd";
import { useState } from "react";
import { DynamicType } from "../../../templates/dynamic-type/dynamic-type";
import { HorizontalLayoutTemplate } from "../../../templates/horizontal-layout/horizontal-layout";
import { VerifyCloseAccountTemplate } from "../../../templates/verify-close-account.tsx/verify-close-account";
import {
  beforeCloseCautionFunction,
  closeAccountButtonFunction,
  closeAccountRadioDataFunction,
  finalVerifyBeforeCloseCautionFunction,
  warning1BeforeCloseCautionFunction,
  warning2BeforeCloseCautionFunction,
} from "./close-account-data";

export const CloseAccount = () => {
  const [selectedReason, setSelectedReason] = useState("");
  const [step, setStep] = useState(0);
  const radioOnChange = (e: any) => {
    console.log(e);
    setSelectedReason(e?.target?.value);
  };
  const goForward = () => {
    console.log("h");
    // if (!!!step) return;
    if (step < 4) setStep((prev) => prev + 1);
    console.log(step);
  };
  const closeAccountRadioData = closeAccountRadioDataFunction(radioOnChange, selectedReason);
  const closeAccountButton = closeAccountButtonFunction(goForward);
  const beforeCloseCaution = beforeCloseCautionFunction();
  const warning1BeforeCloseCaution = warning1BeforeCloseCautionFunction();
  const warning2BeforeCloseCaution = warning2BeforeCloseCautionFunction();
  const finalVerifyBeforeCloseCaution = finalVerifyBeforeCloseCautionFunction();

  const generateData: any = {
    1: warning1BeforeCloseCaution,
    2: warning2BeforeCloseCaution,
    3: beforeCloseCaution,
    4: finalVerifyBeforeCloseCaution,
  };
  const datatoShow = (current: any) => {
    return generateData?.[current];
  };
  return (
    <Row>
      <Col xs={1} lg={3}></Col>
      <Col xs={22} lg={18}>
        {step === 0 ? (
          <VerifyCloseAccountTemplate
            heading="Before you go, tell us why you’re leaving"
            title="Choose one of the options"
            radioItems={closeAccountRadioData}
            buttons={closeAccountButton}
          />
        ) : (
          <HorizontalLayoutTemplate data={datatoShow?.(step)} button={closeAccountButton} />
        )}
      </Col>
      <Col xs={1} lg={3}></Col>
    </Row>
  );
};
