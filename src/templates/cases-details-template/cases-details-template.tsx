import { Row, Col } from "antd";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppCommentsCard } from "../../components/cards/app-comments-card/app-comments-card";
import { AppInfoCard } from "../../components/cards/app-info-card/app-info-card";
import { ProblemCard } from "../../components/cards/problem-card/problem-card";
import { AppConfirmationCard } from "../../components/cards/app-confirmation-card/app-confirmation-card";

export const CasesDetailsTemplate = (props: any) => {
  const {
    caseDetails,
    infoCardHeading,
    problemDetails,
    openTransactionModal,
    showAllFunction,
    commentsCardData,
    confirmationCardHeading,
    icon,
    confirmationBtnFunction1,
    confirmationBtnFunction2,
  } = props;
  return (
    <div>
      <AppCardWhite cardClassName="p-2 min-h-full">
        {/* TODO: add status resolved condition during backend integration*/}
        <Row className="justify-center">
          <Col
            lg={18}
            className="bg-primary text-white rounded-lg p-3 flex items-center justify-between"
          >
            <AppConfirmationCard
              title={confirmationCardHeading}
              icon={icon}
              btnFunction1={confirmationBtnFunction1}
              btnFunction2={confirmationBtnFunction2}
            />
          </Col>
        </Row>
        <Row gutter={[30, 30]} className="my-5" justify={"center"}>
          <Col xs={22} md={11}>
            <div className="border border-solid border-light-grey text-primary-text leading-8 rounded-lg  box-border p-5">
              <AppInfoCard dataToDisplay={caseDetails} infoCardHeading={infoCardHeading} />
            </div>
          </Col>
          <Col xs={22} md={11}>
            <div className="border border-solid border-light-grey text-primary-text leading-8 rounded-lg box-border p-5">
              <ProblemCard data={problemDetails} openTransactionModal={openTransactionModal} />
            </div>
          </Col>
        </Row>
        <Row gutter={[30, 30]} className="my-8" justify={"center"}>
          <Col xs={22} md={11}>
            <div className="border border-solid border-light-grey text-primary-text rounded-lg min-h-full box-border p-5">
              <AppCommentsCard data={commentsCardData} showAllFunction={showAllFunction} />
            </div>
          </Col>
          <Col xs={22} md={11}>
            <div className="border border-solid border-light-grey text-primary-text rounded-lg min-h-full box-border p-5">
              <AppCommentsCard data={commentsCardData} showAllFunction={showAllFunction} />
            </div>
          </Col>
        </Row>
      </AppCardWhite>
    </div>
  );
};
