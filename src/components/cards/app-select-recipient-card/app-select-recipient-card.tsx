import { Row, Col, Space, Avatar } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";
import rightArrow from "../../../assets/icons/right-arrow.svg";

export const AppSelectRecipientCard = (props: any) => {
  const { onClick, icon, heading, subHeading } = props;

  return (
    <Row
      onClick={() => onClick?.()}
      className="px-3 py-2  cursor-pointer rounded-lg bg-disabled"
      justify={"space-between"}
      align="middle"
    >
      <Col className="flex justify-center gap-3">
        <Avatar className="bg-primary" icon={icon} />
        <Space wrap direction="vertical" size={0}>
          <AppTitle
            title={heading}
            variant="span"
            className="font-medium text-sm text-primary-text"
          />
          <AppTitle
            title={subHeading}
            variant="span"
            className="text-xs primary-text-color font-normal"
          />
        </Space>
      </Col>
      <Col>
        <img src={rightArrow} alt="right-arrow" />
      </Col>
    </Row>
  );
};
