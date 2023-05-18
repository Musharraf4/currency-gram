import { Modal, Spin, Avatar, Divider, Row, Col, Space } from "antd";
import masterCard from "../../../assets/images/add-money/logos_mastercard.svg";
import { AppButton } from "../../buttons/app-button/app-button";
import { AppTitle } from "../../data-display/app-title/app-title";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const AppMoneyAddedModal = (props: any) => {
  const { isModalOpen, handleCancel, loading, buttonFunction } = props;
  return (
    <Modal
      footer={null}
      centered
      open={isModalOpen}
      onCancel={handleCancel}
      closable={false}
      width={328}
    >
      {loading && (
        <div className="flex justify-center items-center h-full">
          <Spin size="large" />
        </div>
      )}
      {!loading && (
        <div className=" px-5 text-center">
          <Avatar
            size="large"
            className="bg-primary mb-2"
            icon={<ICONSCONSTANT.CheckOutlined className="mt-2 text-xl" />}
          />
          <AppTitle title="Success" className="font-medium" />
          <Divider />
          <div className="text-center">
            <AppTitle
              title="You have added £ 20.00 in your account (GBP)"
              className="text-xl font-semibold leading-none"
              Variant="span"
            />
            <AppTitle title="From" className="my-4" />
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
          <AppButton
            buttons={[
              {
                size: "large",
                className: " bg-primary text-white w-full ",
                onClick: buttonFunction,
                btnText: "Done",
              },
            ]}
          />
        </div>
      )}
    </Modal>
  );
};
