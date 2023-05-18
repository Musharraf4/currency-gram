import { Space, Avatar, Row, Col } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";

export const AppConfirmationCard = (props: any) => {
  const { icon, title, btnFunction1, btnFunction2 } = props;
  return (
    <Row className="justify-between items-center flex flex-1">
      <Col>
        <Space>
          <Avatar icon={icon} />
          <AppTitle Variant="span" title={title} />
        </Space>
      </Col>
      <Col className="w-full lg:w-auto flex justify-end">
        <Space size={10}>
          <AppTitle
            Variant="span"
            className=" border border-solid border-white p-2 rounded cursor-pointer whitespace-nowrap"
            title="Yes"
            onClick={() => btnFunction1?.()}
          />
          <AppTitle
            Variant="span"
            title="No"
            className="cursor-pointer whitespace-nowrap"
            onClick={() => btnFunction2?.()}
          />
        </Space>
      </Col>
    </Row>
  );
};
