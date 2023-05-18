import { Col, Row } from "antd";
import { HorizontalLayoutTemplate } from "../../../templates/horizontal-layout/horizontal-layout";
import { TermsTemplate } from "../../../templates/terms/terms";
import { useSignUp } from "./use-signup";
import CurrentStep from "../../../assets/icons/go-back.svg";
import { termsAndConditionData } from "./signup-data";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
export const SignUpDelegateVerify = () => {
  const {
    onCheckboxChange,
    termsAndConditionDataButton,
    navigate,
    thankyouFunctionData,
    thankyouDataButton,
    step,
    isAgree,
  } = useSignUp();
  return (
    <Row>
      <Col xs={1} lg={4}></Col>
      <Col xs={22} lg={16}>
        {step === 0 ? (
          <TermsTemplate
            imgSrc={CurrentStep}
            mainTitle="Terms and conditions"
            navigation={() => navigate(-1)}
            heading="By Submitting this form!"
            data={termsAndConditionData}
            onCheckboxChange={(e: any) => onCheckboxChange?.(e)}
            checkboxLabel="I agree terms and condition"
            button={termsAndConditionDataButton}
            checked={isAgree}
          />
        ) : (
          <AppCardWhite cardClassName="px-14 py-10 mt-6">
            <HorizontalLayoutTemplate
              data={thankyouFunctionData}
              button={thankyouDataButton}
              contactText="if you have any Questions. please contact our"
              linkText=" Support Team"
              imageWrapperClassName="max-w-[12rem]"
            />
          </AppCardWhite>
        )}
      </Col>
      <Col xs={1} lg={4}></Col>
    </Row>
  );
};
