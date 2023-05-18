import { useEffect, useState } from "react";
import { Col, Row, TabsProps } from "antd";
import { useNavigate } from "react-router-dom";
import { RequestCard } from "../../../templates/request-card/request-card";
import { CARDTYPEPARAMSCONSTANTS } from "../../../constants/params-constant";
import { ActiveQrCodeCard } from "../active-qr-code-card/active-qr-code-card";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { ADDCARDPARAM, CARDSPATH, SLASHPATH } from "../../../constants/routes-constant";
import { RequestSubmitTemplate } from "../../../templates/request-submit/request-submit";
import { TabsSwitch } from "../../../components/navigations/app-tabs-switch/app-tabs-switch";
import { REQUESTACTIVECARDTYPEDATA } from "./request-active-card-type-data";
import { useAppLayout } from "../../../hooks/use-app-layout";

export const RequestActiveCardType = () => {
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Request a Card");
    pageName("Cards")
  }, [bannerHeading]);
  const [showQrCode, setShowQrCode] = useState(false)
  const requestSubmitButtons = REQUESTACTIVECARDTYPEDATA.activeCardButtonFunction(setShowQrCode);

  const navigate = useNavigate()
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Physical`,
      children: (
        <div className="mt-10">
          {!showQrCode &&
            <RequestSubmitTemplate
              variantOne="span"
              variantTwo="span"
              titleOne="Activate Your Card"
              buttons={requestSubmitButtons}
              RequestSubmitDividerClass="hidden"
              RequestSubmitTemplateMainDivClass="text-center"
              discription="To access all the services. If you dont activate your card within 30 days. your card may be blocked"
            />

          }
          {showQrCode && <ActiveQrCodeCard />}
        </div>
      ),
    },
    {
      key: "2",
      label: `Virtual`,
      children: (
        <AppCardWhite cardClassName="mt-10">

          {
            REQUESTACTIVECARDTYPEDATA.RequesteCardArray.map((item: any) => (
              <RequestCard
                xs={{ span: 24 }}
                lg={{ span: 24 }}
                xl={{ span: 24 }}
                data={item.data}
                textAndButtonTitle={item.title}
                textAndButtonText="Create"
                textAndButtontype="primary"
                btnLink={() => navigate(`${CARDSPATH}${SLASHPATH}${ADDCARDPARAM}${SLASHPATH}${CARDTYPEPARAMSCONSTANTS.virtual}`)}
                TextButtonAndDividerClass="bg-slate-50 px-7 pt-5"
              />
            ))
          }
        </AppCardWhite>
      ),
    },
  ];

  return (
    <Row className="flex justify-center">
      <Col xs={24} sm={24} md={24} lg={8}>
        <TabsSwitch defaultActiveKey="1" items={items} />
      </Col>
    </Row>

  );
};
