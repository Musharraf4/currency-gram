import { Col, Row } from "antd";
import { VerifyCloseAccountTemplate } from "../verify-close-account.tsx/verify-close-account";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { ObjectDetails } from "../../components/data-display/app-object-details/app-object-details";

export const CancelCardTemplate = (props: any) => {
  const {
    radioHeading,
    radioTitle,
    radioItems,
    requestInitiator,
    requestTitle,
    actionButton,
    cardDetails,
    cardTitle,
  } = props;
  return (
    <>
      <Row>
        <Col xs={24} md={11}>
          <ObjectDetails
            detailsToMap={cardDetails}
            hasHr={false}
            mainTitle={cardTitle}
            mainclassName="bg-white shadow-none border-1 border-light-grey border-solid "
          />
        </Col>
        <Col xs={24} md={1}></Col>
        <Col xs={24} md={11}>
          <ObjectDetails
            detailsToMap={requestInitiator}
            hasHr={false}
            mainTitle={requestTitle}
            mainclassName="bg-white shadow-none border-1 border-light-grey border-solid "
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={11} className="mt-2 lg:mt-6">
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
          <AppButton buttons={actionButton} btnWrapperClassName="lg:mt-3" />
        </Col>
      </Row>
    </>
  );
};
