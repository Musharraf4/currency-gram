import { DynamicType } from "../../../templates/dynamic-type/dynamic-type";
import { PersonalDataFunction } from "./personal-data";
import { Col, Row } from "antd";
import { PERSONALIMAGES } from "./personal-images";

export const Personal = () => {
  const PersonalData = PersonalDataFunction();
  return (
    <Row>
      <Col xs={1}></Col>
      <Col xs={22}>
        <DynamicType
          mainHeading="Open a Currencygram personal Account"
          mainDescription="This is a mobile wallet to pay and send money easily over the world. You can add money from your credit and debit cards."
          mainImgSrc={PERSONALIMAGES.heroFeatureImage}
          data={PersonalData}
          mainFeatures="Learn more about our Currencygram Features"
          src={PERSONALIMAGES.videoImage}
        />
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
};
