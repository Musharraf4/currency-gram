import { Col, Row } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { REPORTCARDISSUE } from "./report-card-issue-imports";
import {REPORTCARDISSUEIMAGES} from "./report-card-issue-images"
import { InfoFormTemplate } from "../../../templates/info-form/info-form";
import { REPORTDELIVERYADDRESS } from "./replace-report-delivery-address-data";
import { AppVerifyOtpInputModal } from "../../../components/modals/app-verify-otp-modal/app-verify-otp-modal";
import { AppCongratulationModal } from "../../../components/modals/app-congratulation-modal/app-congratulation-modal";


export const ConfirmDeliveryAddress = () => {
  const navigate = useNavigate();
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const ReportDeliveryAddressFormFieldsInput = REPORTDELIVERYADDRESS.ReportDeliveryAddressFormFieldsInputFunction();

  return (
    <>
      <Row justify={"center"} className="py-8 ">
        <Col md={16} sm={20} xs={23} lg={10}>
          <InfoFormTemplate
            heading="Confirm delivery address"
            title="You will receive your replacement card to below registered address"
            headingClassName="text-2xl font-semibold text-center"
            titleClassName="leading-6 text-base text-center mt-2"
            formFields={ReportDeliveryAddressFormFieldsInput}
            firstButtonText="Continue"
            secondButtonText="Edit"
            cancelBtnClassName="border-sky-500"
            onSubmitSuccess={(e: any) => setIsOtpOpen(true)}
          />
        </Col>
      </Row>
      {isOtpOpen && (
        <AppVerifyOtpInputModal
          isModalOpen={isOtpOpen}
          handleOk={() => setIsOtpOpen?.(false)}
          handleCancel={() => setIsOtpOpen?.(false)}
          sendOTP={(e: any) => setShowModal(true)}
        />
      )}
      {showModal && (
        <AppCongratulationModal
          modalWidth="w-full"
          isModalOpen={showModal}
          handleCancel={() => setShowModal?.(false)}
          heading="Congratulations"
          handleOk={() => setShowModal?.(false)}
          submitBtnFunction={() =>  navigate(`${REPORTCARDISSUE.CARDSPATH}${REPORTCARDISSUE.SLASHPATH}${REPORTCARDISSUE.CARDSETTINGSPATH}`)}
          headingClassName="my-3 font-bold text-3xl"
          subHeading="Your card is on the way. It will be delivered to Block 642, ecstasy road, street 4"
          subHeadingClassName="w-full max-w-xs mx-auto"
          avatarClassName="text-5xl"
          avatarSize={70}
          src={REPORTCARDISSUEIMAGES.congrats}
          submitBtnClassName="w-48"
          firstButtonText="View Card"
        />
      )}
    </>
  );
};
