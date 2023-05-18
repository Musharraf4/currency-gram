import { AppButton } from "../buttons/app-button/app-button";
import { AppTitle } from "../data-display/app-title/app-title";
import { Col, Row } from "antd";

export const NoItemCreated = (props: any) => {
  const { title, button, src } = props;

  return (
    <>
      <Row className="h-screen flex flex-col items-center bg-smoke-white">
        <Col xs={2} lg={8}></Col>
        <Col xs={20} lg={8} className="text-center grow">
          <div className="max-w-md">
            <img className="w-full" src={src} alt="empty-menu-img" />
          </div>
          <AppTitle className="font-medium my-4 lg:my-16" title={title} />
          <AppButton buttons={button} btnWrapperClassName="" />
        </Col>
        <Col xs={2} lg={8}></Col>
      </Row>
    </>
  );
};
