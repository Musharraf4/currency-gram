import { Col, Row } from "antd";
import { useEffect } from "react";
import { UPSERTLIMITDATA } from "./upsert-limit-data";
import { useAppSelector } from "../../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import { UPSERTLIMITSIMPORTS } from "./upsert-limit-imports"
import { useAppLayout } from "../../../hooks/use-app-layout";
import { InfoFormTemplate } from "../../../templates/info-form/info-form";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
export const UpsertCardLimit = () => {
  const { bannerHeading, pageName } = useAppLayout();
  const { auth } = useAppSelector((state) => state);
  useEffect(() => {
    bannerHeading("Set Limit");
    pageName("Cards");
  }, [bannerHeading]);
  const navigate = useNavigate()
  const LimitCardFormFieldsInput = UPSERTLIMITDATA.UpsertCardLimitFormFieldsInputFunction();
  const { cardType } = useParams()

  const onFinish = (e: any) => {
    console.log(e);
    navigate(`${UPSERTLIMITSIMPORTS.CARDSPATH}${UPSERTLIMITSIMPORTS.SLASHPATH}${UPSERTLIMITSIMPORTS.LIMITVIEWPARAM}${UPSERTLIMITSIMPORTS.SLASHPATH}${cardType}`)
  };

  return (
    <>
        <AppCardWhite cardClassName="px-3 sm:px-14 py-16 -mt-16">
          <Row justify={"center"} className="py-10 ">
            <Col md={16} sm={20} xs={23} lg={12}>
              <InfoFormTemplate formFields={LimitCardFormFieldsInput} firstButtonText="Save" onSubmitSuccess={onFinish} />
            </Col>
          </Row>
        </AppCardWhite>
      
    </>
  );
};
