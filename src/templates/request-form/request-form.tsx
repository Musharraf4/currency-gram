import { Col, Row } from "antd";
import { AppDynamicForm } from "../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { ObjectDetails } from "../../components/data-display/app-object-details/app-object-details";

export const RequestFormTemplate = (props: any) => {
  const {
    FormInputField,
    isOtpOpen,
    setIsOtpOpen,
    secondButtonText,
    firstButtonText,
    onFinish,
    onFinishFailed,
    initialValues,
    mainTitle,
    requestInitiator,
    buttons,
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
              formClassName="mt-8"
              formAutoComplete="off"
              onFinish={(e: any) => onFinish?.(e)}
              onFinishFailed={(e: any) => onFinishFailed?.(e)}
              fieldsClassName="mb-2 text-start"
            />
          </div>
          <div>
            <ObjectDetails
              detailsToMap={requestInitiator}
              hasHr={false}
              mainTitle={mainTitle}
              mainclassName="bg-white shadow-none border-1 border-light-grey border-solid "
            />
          </div>
          <AppButton buttons={buttons} btnWrapperClassName="mt-2" />
        </Col>
        <Col xs={24} md={4} lg={7}></Col>
      </Row>
    </>
  );
};
