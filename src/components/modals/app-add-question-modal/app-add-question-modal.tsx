import { Col, Modal, Row } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";
import { AppDynamicForm } from "../../form-elements/app-dynamic-form/app-dynamic-form";

export const AppAddQuestionModal = (props: any) => {
  const {
    isModalOpen,
    handleOk,
    handleCancel,
    modalWidth,
    closable,
    closeIcon,
    firstButtonText,
    formFields,
    onFinish,
    mainTitle,
  } = props;
  console.log(props);
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      centered
      closable={closable ?? true}
      width={modalWidth || "500px"}
      closeIcon={closeIcon}
    >
      <div>
        <Row>
          <Col xs={1} lg={3}></Col>
          <Col xs={22} lg={18}>
            <AppTitle title={mainTitle} className="text-xl font-bold text-primary-text" />
            <AppDynamicForm
              formFields={formFields}
              onFinish={(e: any) => onFinish?.(e)}
              firstButtonText={firstButtonText}
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
