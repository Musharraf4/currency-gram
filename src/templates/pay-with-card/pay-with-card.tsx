import { Row, Col, Space } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import visaImage from "../../assets/images/add-money/visa.png";
import masterCard from "../../assets/images/add-money/logos_mastercard.svg";

export const PayWithCard = (props: any) => {
  const { item, onClick } = props;
  return (
    <Row
      justify={"space-between"}
      align={"middle"}
      className="bg-primary-text p-4 px-8 rounded-xl mb-3 text-white cursor-pointer"
      onClick={onClick}
    >
      <Col>Pay with</Col>
      <Col>
        <Space size={10}>
          <AppTitle title={`...${item?.account_number.slice(-4)}`} />
          {item?.payWith ? (
            <img src={visaImage} width={20} alt="visa-card" />
          ) : (
            <div className="primary-background-color">
              <img src={masterCard} width={20} alt="master-card" />
            </div>
          )}
        </Space>
      </Col>
    </Row>
  );
};
