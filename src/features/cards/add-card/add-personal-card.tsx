import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppCongratulationModal } from "../../../components/modals/app-congratulation-modal/app-congratulation-modal";
import { CARDSPATH, SLASHPATH, CARDSETTINGSPATH } from "../../../constants/routes-constant";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { InfoFormTemplate } from "../../../templates/info-form/info-form";
import congrats from "../../../assets/images/card/congratulations.png";
import { ADDCARDDATA } from "./add-card-data";

export const AddPersonalCard = () => {
  const { cardType } = useParams()
  const navigate = useNavigate();
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading(cardType === "physical" ? "Request a Physical Card" : "Create Virtual Card");
    pageName("Cards")
  }, [bannerHeading]);

  const AddVirtualCardFormFieldsInput = ADDCARDDATA.AddVirtualCardFormFieldsInputFunction();
  const RequestPhysicalFormFieldsInput = ADDCARDDATA.RequestPhysicalFormFieldsInputFunction();
  const [showVirtualCardModal, setShowVirtualCardModal] = useState(false);
  const [showPhysicalCardModal, setShowPhysicalCardModal] = useState(false)
  return (
    <>
      <Row justify={"center"} className="py-10">
        <Col md={16} sm={20} xs={24} lg={10}>
          {cardType === 'virtual' && <InfoFormTemplate
            title="Note: Your credit card contains sensitive information. do not disclose information to anybody"
            headingClassName="text-2xl font-semibold text-center"
            titleClassName="text-base font-medium leading-6 text-center"
            formFields={AddVirtualCardFormFieldsInput}
            firstButtonText="Create"
            onSubmitSuccess={() => setShowVirtualCardModal(true)}
          />

          }
          {cardType === 'physical' && <InfoFormTemplate
            heading="Tell us about yourself"
            title="Confirm the address where you want to deliver your card"
            headingClassName="text-xl sm:text-2xl font-semibold text-center"
            titleClassName="text-sm sm:text-base font-medium text-center"
            formFields={RequestPhysicalFormFieldsInput}
            firstButtonText="Finish"
            onSubmitSuccess={() => setShowPhysicalCardModal(true)}
          />}
        </Col>
      </Row>

      {/*  modals*/}
      {showPhysicalCardModal && (
        <AppCongratulationModal
          modalWidth="w-full"
          isModalOpen={showPhysicalCardModal}
          handleCancel={() => setShowPhysicalCardModal?.(false)}
          heading="Congratulations"
          handleOk={() => setShowPhysicalCardModal?.(false)}
          // submitBtnFunction={() => navigate(`${CARDSPATH}${SLASHPATH}${CARDSETTINGSPATH}`)}
          headingClassName="my-3 font-bold text-3xl"
          subHeading="Your card is on the way. It will be delivered to Block 642, ecstasy road, street 4"
          subHeadingClassName="w-full max-w-xs mx-auto"
          avatarClassName="text-5xl"
          avatarSize={70}
          src={congrats}
          submitBtnClassName="w-48"
          firstButtonText="View Card"
        />
      )}
      {showVirtualCardModal && (
        <AppCongratulationModal
          modalWidth="w-full"
          isModalOpen={showVirtualCardModal}
          handleCancel={() => setShowVirtualCardModal?.(false)}
          handleOk={() => setShowVirtualCardModal?.(false)}
          submitBtnFunction={() =>  navigate(`${CARDSPATH}${SLASHPATH}${CARDSETTINGSPATH}`)}
          // submitBtnFunction={() => navigate(`${CARDSPATH}`)}
          heading="Congratulations"
          subHeading="Your virtual card has been created. Now you can use it for online transaction and also set limits of your card."
          src={congrats}
          firstButtonText="View Card"
        />
      )}</>
  )
}
