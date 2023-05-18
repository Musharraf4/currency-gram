import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { ADDCARDDATA } from "./add-card-data";
import { useNavigate, useParams } from "react-router-dom";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { ADDCARDIMPORTS } from "./add-card-imports"
import { InfoFormTemplate } from "../../../templates/info-form/info-form";
import { BusinessCardSettings } from "../card-settings/business-card-settings";

export const AddBusinessCard = () => {
  const navigate = useNavigate();
  const { cardType } = useParams();
  const { bannerHeading, pageName } = useAppLayout();

  useEffect(() => {
    bannerHeading(cardType === "physical" ? "Get Physical Card" : "Create Virtual Card");
    pageName("Cards")
  }, [bannerHeading, pageName, cardType]);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const closeAccountButton = ADDCARDDATA.closeAccountButtonFunction(setShowSuccessModal);
  const AddVirtualCardFormFieldsInput = ADDCARDDATA.AddVirtualCardFormFieldsInputFunction();
  const GetPhysicalFormFieldsInput = ADDCARDDATA.GetPhysicalFormFieldsInputFunction();
  const [showPhysicalCardSettings, setShowPhysicalCardSettings] = useState(false);
  const [showVirtualCardSettings, setShowVirtualCardSettings] = useState(false);

  return (
    <>
      <Row justify={"center"} className="py-10 ">
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          {/* physical business card */}
          {cardType === "physical" && (
            <>
              {!showPhysicalCardSettings && (
                <InfoFormTemplate
                  heading="Delivery Address"
                  title="Enter the address where you want to deliver team members card"
                  headingClassName="text-2xl font-semibold text-center"
                  titleClassName="text-base font-medium text-center"
                  formFields={GetPhysicalFormFieldsInput}
                  firstButtonText="Next"
                  onSubmitSuccess={() => setShowPhysicalCardSettings(true)}
                />
              )}
              {showPhysicalCardSettings && (
                <BusinessCardSettings
                title="Card Settings"
                  showSuccessModal={showSuccessModal}
                  buttons={closeAccountButton}
                  setShowSuccessModal={setShowSuccessModal}
                  submitBtnFunction={() => navigate(`${ADDCARDIMPORTS.CARDSPATH}`)}
                />
              )}
            </>
          )}

          {/* virtual business card */}
          {cardType === "virtual" && (
            <>
              {!showVirtualCardSettings && (
                <InfoFormTemplate
                  title="Note: Your credit card contains sensitive information. do not disclose information to anybody"
                  headingClassName="text-2xl font-semibold text-center"
                  titleClassName="text-base font-medium"
                  formFields={AddVirtualCardFormFieldsInput}
                  firstButtonText="Create"
                  onSubmitSuccess={() => setShowVirtualCardSettings(true)}
                />
              )}
            </>
          )}
          {showVirtualCardSettings && <BusinessCardSettings showSuccessModal={showSuccessModal}
            buttons={closeAccountButton}
            setShowSuccessModal={setShowSuccessModal}
            submitBtnFunction={() => navigate(`${ADDCARDIMPORTS.CARDSPATH}`)}
            modalSubHeading={"Your card is on the way. It will be delivered to I-9/3, street # 11 Islamabad within 7 working days.Inform the card owner to activate a card from their app when they receive their card."}

          />}

        </Col>
      </Row>
    </>
  );
};
