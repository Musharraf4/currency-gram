import { Col, Row } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CHANGEPINDATA } from "./change-pin-data";
import { CHANGEPINIMPORT } from "./change-pin-import";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { InfoFormTemplate } from "../../../templates/info-form/info-form";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";

export const ChangePin = () => {
  const navigate = useNavigate()
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Change PIN");
    pageName("Cards")
  }, [bannerHeading, pageName]);


  const ChangePinFormFieldsInput = CHANGEPINDATA.ChangePinFormFieldsInputFunction();

  const onSubmitSuccess = (e: any) => {
    navigate(`${CHANGEPINIMPORT.CARDSPATH}${CHANGEPINIMPORT.SLASHPATH}${CHANGEPINIMPORT.CARDSETTINGSPATH}`)
  };
  return (
    <>
      <AppCardWhite cardClassName="p-4 sm:p-14 mt-8">
        <Row justify={"center"} className="py-10 ">
          <Col md={16} sm={20} xs={23} lg={10}>
            <InfoFormTemplate
              heading="Set 4-Digit card PIN for ATM card Transactions"
              headingClassName="text-lg sm:text-2xl font-semibold text-center"
              titleClassName="text-base font-medium"
              formFields={ChangePinFormFieldsInput}
              firstButtonText="Finish"
              onSubmitSuccess={onSubmitSuccess}
            />
            <AppTitle
              className="text-center text-base sm:text-left leading-6"
              title="Note: Create a unique PIN for your ATM. Avoid any reputative and sequential digits and never share your PIN with anyone."
            />
          </Col>
        </Row>
      </AppCardWhite>
    </>
  );
};
