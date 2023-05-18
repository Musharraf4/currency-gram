import { Row, Col, Divider, Space } from "antd";
import masterCard from "../../assets/images/add-money/logos_mastercard.svg";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const CardDetailsCard = (props: any) => {
  return (
    <div className="bg-tertiary-background p-3 rounded-lg">
      <div className="text-center">
        <AppTitle
          title="Card Details"
          Variant="span"
          className=" text-primary-text font-semibold text-base"
        />
      </div>
      <Divider className="my-1 bg-white" />
      <Row justify={"space-between"} align="middle" className="text-primary-text">
        <Col>
          <AppTitle className="font-semibold" title="Card Title" Variant="span" />
        </Col>
        <Col>
          <AppTitle title="John Vilson" Variant="span" />
        </Col>
      </Row>
      <Row justify={"space-between"} align="middle" className="text-primary-text my-3">
        <Col>
          <AppTitle className="font-semibold" title="Card No" Variant="span" />
        </Col>
        <Col>
          <Space wrap>
            <AppTitle title="..2345" />
            <img src={masterCard} alt="" />
          </Space>
        </Col>
      </Row>
    </div>
  );
};
