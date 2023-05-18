import { Alert, Col, Modal, Row } from "antd";
import { AppButton } from "../../buttons/app-button/app-button";
import { AppDynamicForm } from "../../form-elements/app-dynamic-form/app-dynamic-form";
import { AppProfileImage } from "../../form-elements/app-profile-image/app-profile-image";

export const AppProfileModal = (props: any) => {
  const {
    isModalOpen,
    handleOk,
    handleCancel,
    modalWidth,
    closable,
    closeIcon,
    personName,
    button,
    formFields,
    onFinish,
  } = props;

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      centered
      closable={closable ?? true}
      width={modalWidth || "800px"}
      closeIcon={closeIcon}
    >
      <div>
        <Row>
          <Col xs={1} lg={3}></Col>
          <Col xs={22} lg={18}>
            <Alert
              type="info"
              message="This profile will be visible to your currencygram community"
              showIcon
              closable={false}
              className="my-8 p-3"
            />
            <AppProfileImage personName={personName} size={130} />
            <AppButton buttons={button} btnWrapperClassName="mt-2 lg:mt-2 text-center" />
            <AppDynamicForm
              formFields={formFields}
              onFinish={(e: any) => onFinish?.(e)}
              // firstButtonText="Continue"
              fieldMd={24}
              fieldXs={24}
              formClassName={"mt-5"}
              submitBtnClassName="w-full"
            />
          </Col>
          <Col xs={1} lg={3}></Col>
        </Row>
      </div>
    </Modal>
  );
};
