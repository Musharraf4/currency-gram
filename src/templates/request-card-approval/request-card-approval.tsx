import { Col, Row } from "antd";
import { VerifyCloseAccountTemplate } from "../verify-close-account.tsx/verify-close-account";
import { ObjectDetails } from "../../components/data-display/app-object-details/app-object-details";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { InfoFormTemplate } from "../info-form/info-form";

export const RequestCardApprovalTemplate = (props: any) => {
  const {
    radioHeading,
    radioTitle,
    radioItems,
    requestInitiator,
    requestTitle,
    actionButton,
    formHeading,
    formTitle,
    formFields,
    onSubmitSuccess,
    onSubmitFailed,
  } = props;
  return (
    <Row>
      <Col xs={24} md={11}>
        <VerifyCloseAccountTemplate 
          heading={radioHeading}
          title={radioTitle}
          radioItems={radioItems}
          hasHr={false}
          radioRowClassName="bg-disabled mb-4 items-center flex p-4"
          radioLabelClassName="mb-0 font-semibold"
          headingClassName="mt-0 mb-2 lg:mb-6 "
          titleClassName="mb-2 lg:mb-6"
        />
        <ObjectDetails
          detailsToMap={requestInitiator}
          hasHr={false}
          mainTitle={requestTitle}
          mainclassName="bg-white shadow-none border-1 border-light-grey border-solid "
        />
        <AppButton buttons={actionButton} btnWrapperClassName="lg:mt-3" />
      </Col>
      <Col xs={24} md={1}></Col>
      <Col xs={24} md={11}>
        <InfoFormTemplate
          heading={formHeading}
          title={formTitle}
          formFields={formFields}
          onSubmitSuccess={(e: any) => onSubmitSuccess?.(e)}
          onSubmitFailed={(e: any) => onSubmitFailed?.(e)}
          globalFormItemClassName="mb-2"
        />
      </Col>
    </Row>
  );
};
