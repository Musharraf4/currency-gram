import { Col, Row } from "antd";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { HeadingAndTitle } from "../../skeleton/heading-and-title/heading-and-title";

const DashboardUserDetails = (props: any) => {
  const {
    heading,
    headingClassName,
    titleClassName,
    title,
    rowClassName,
    btnWrapperClassName,
    buttonsData,
  } = props;

  return (
    <div className="flex justify-between mt-2">
      <Row gutter={[2, { xs: 8, sm: 4 }]} className="w-full items-center">
        <Col xs={24} md={12} lg={12} xl={12}>
          <HeadingAndTitle
            title={title}
            heading={heading}
            rowClassName={rowClassName}
            titleClassName={titleClassName}
            headingClassName={headingClassName}
          />
        </Col>

        <Col xs={24} md={12} lg={12} xl={12} className="text-center sm:text-end">
          <AppButton buttons={buttonsData} btnWrapperClassName={btnWrapperClassName} />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardUserDetails;
