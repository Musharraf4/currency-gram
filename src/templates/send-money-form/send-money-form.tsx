import { Col, Row } from "antd";
import { AppDynamicForm } from "../../components/form-elements/app-dynamic-form/app-dynamic-form";

export const SendMoneyForm = (props: any) => {
  const {
    FormInputField,
    isOtpOpen,
    setIsOtpOpen,
    secondButtonText,
    firstButtonText,
    onFinish,
    onFinishFailed,
    initialValues,
  } = props;

  return (
    <>
      <Row>
        <Col xs={24} md={4} lg={7}></Col>
        <Col xs={24} md={16} lg={10} className="pt-4 pb-8">
          <div className="text-center">
            <AppDynamicForm
              formFields={FormInputField}
              isOtpOpen={isOtpOpen}
              setIsOtpOpen={setIsOtpOpen}
              secondButtonText={secondButtonText}
              firstButtonText={firstButtonText}
              fieldMd={24}
              fieldXs={24}
              globalFormItemClassName="mb-2.5"
              initialValues={initialValues}
              // formStyle={{ maxWidth: 600, margin: "auto" }}
              formClassName="mt-8"
              formAutoComplete="off"
              onFinish={(e: any) => onFinish?.(e)}
              onFinishFailed={(e: any) => onFinishFailed?.(e)}
              fieldsClassName="mb-2 text-start"
              submitBtnClassName="w-full"
              cancelBtnClassName="w-full"
              cancelBtnsize="large"
              submitBtnSize="large"
              btnWrapperClassName="mb-8"
            />
          </div>
        </Col>
        <Col xs={24} md={4} lg={7}></Col>
      </Row>
    </>
  );
};
