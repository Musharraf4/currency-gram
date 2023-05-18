import { DynamicType } from "../../../templates/dynamic-type/dynamic-type";
import { BusinessDataFunction } from "./business-data";
import { Col, Row } from "antd";
import { BUSINESSIMAGES } from "./business-images";

export const Business = () => {
  const BusinessData = BusinessDataFunction();

  return (
    <Row>
      <Col xs={1}></Col>
      <Col xs={22}>
        <DynamicType
          mainHeading="Open a Currencygram business Account"
          mainDescription="This is a mobile wallet to pay and send money easily over the world. You can add money from your credit and debit cards."
          mainImgSrc={BUSINESSIMAGES.heroFeatureImage}
          data={BusinessData}
        />
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
};
