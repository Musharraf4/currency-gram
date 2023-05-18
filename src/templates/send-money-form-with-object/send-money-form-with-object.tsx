import { Button, Col, Row } from "antd";
import { AppDynamicForm } from "../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { ObjectDetails } from "../../components/data-display/app-object-details/app-object-details";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const SendMoneyFormWithObject = (props: any) => {
  const {
    FormInputField,
    isOtpOpen,
    setIsOtpOpen,
    secondButtonText,
    firstButtonText,
    onFinish,
    onFinishFailed,
    initialValues,
    objectInfo,
    buttonText,
    buttonClassName,
    buttonFunction,
  } = props;
  console.log(props);
  return (
    <>
      <Row>
        <Col xs={24} md={4} lg={7}></Col>
        <Col xs={24} md={16} lg={10} className="pt-4 pb-8">
          <div className="">
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
            ></AppDynamicForm>
          </div>
        </Col>
        <Col xs={24} md={4} lg={7}></Col>
      </Row>
      {!!objectInfo?.length &&
        objectInfo?.map((x: any) => (
          <div className="mb-5">
            <ObjectDetails
              detailsToMap={x?.data}
              hasHr={x?.hasHr}
              mainTitle={x?.mainTitle}
              hrClassName={x?.hrClassName}
              mainclassName={x?.mainclassName}
              mainTitleClassName={x?.mainTitleClassName}
            />
          </div>
        ))}
      <Row>
        <Col xs={24} md={4} lg={7}></Col>
        <Col xs={24} md={16} lg={10} className="pt-4 pb-8">
          {!!buttonText && (
            <Button
              className={`mb-3 h-fit w-full ${buttonClassName}`}
              onClick={(e: any) => buttonFunction?.(e)}
              size={"large"}
              type="primary"
            >
              <AppTitle title={buttonText} />
            </Button>
          )}
        </Col>
        <Col xs={24} md={4} lg={7}></Col>
      </Row>
    </>
  );
};
