import { Button, Col, Row } from "antd";
import { AppDynamicSelectInputField } from "../app-dynamic-select-input-field/app-dynamic-select-input-field";
import { Form } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";
import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";
import { Fragment } from "react";

export const AppDynamicForm = (props: any) => {
  const {
    formFields = [],
    secondButtonText,
    firstButtonText,
    fieldXs,
    formName,
    formStyle,
    formClassName,
    initialValues,
    formAutoComplete,
    fieldsClassName,
    onFinish,
    onFinishFailed,
    formLayout,
    onValuesChange,
    onFieldsChange,
    cancelBtnClassName,
    submitBtnClassName,
    btnWrapperClassName,
    submitBtnStyle,
    cancelBtnStyle,
    globalClassName,
    cancelBtnSize = "large",
    submitBtnSize = "large",
    globalFormItemClassName,
    children,
    cancelBtnFunction,
    submitBtnType = "submit",
    submitBtnDisable,
    cancelBtnDisable,
    submitBtnFormClassName,
    isFormDisable,
    submitBtnFunction,
  } = props;
  const submitBtnClass = twMergeClass(`min-h-[3rem] h-fit  ${submitBtnClassName}`);
  const formItemClass = (singleFormField: any) =>
    twMergeClass(`${globalFormItemClassName} ${singleFormField?.formItemClassName}`);
  return (
    <>
      <Form
        name={formName}
        style={formStyle}
        className={formClassName}
        initialValues={initialValues}
        disabled={isFormDisable}
        layout={formLayout}
        onFinish={(e: any) => {
          onFinish?.(e);
        }}
        onFinishFailed={(e: any) => onFinishFailed?.(e)}
        onValuesChange={(e: any, f: any) => onValuesChange?.(e, f)}
        onFieldsChange={(e: any) => onFieldsChange?.(e)}
        autoComplete={formAutoComplete}
      >
        <>
          {!!formFields?.length &&
            formFields?.map((outerSingleFormField: any) => (
              <Fragment key={outerSingleFormField?.id}>
                <AppTitle
                  title={outerSingleFormField?.heading}
                  className={outerSingleFormField?.headingClassName}
                />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {!!outerSingleFormField?.fields?.length &&
                    outerSingleFormField?.fields?.map(
                      (singleFormField: any) =>
                        (singleFormField?.showField ?? true) && (
                          <Col
                            xs={fieldXs || 24}
                            lg={singleFormField?.fieldLg}
                            key={singleFormField?.id}
                          >
                            <div className={fieldsClassName} key={singleFormField?.id}>
                              <Form.Item
                                noStyle
                                shouldUpdate={(prevValues: any, currentValues: any) =>
                                  prevValues[singleFormField?.name] !==
                                  currentValues[singleFormField?.name]
                                }
                              >
                                {({ getFieldValue }: any) => {
                                  // console.log(getFieldValue(singleFormField?.name));
                                  return (
                                    <Form.Item
                                      required={singleFormField?.required}
                                      name={singleFormField?.name}
                                      rules={singleFormField?.rules}
                                      initialValue={singleFormField?.initialValue}
                                      help={singleFormField?.help}
                                      className={formItemClass?.(singleFormField)}
                                    >
                                      <AppDynamicSelectInputField
                                        label={singleFormField.label}
                                        showLabel={singleFormField?.showLabel}
                                        value={getFieldValue?.(singleFormField?.name)}
                                        name={singleFormField?.name}
                                        text={singleFormField?.text}
                                        textClassName={singleFormField?.textClassName}
                                        options={singleFormField?.options}
                                        type={singleFormField?.type}
                                        size={singleFormField?.size}
                                        required={singleFormField?.required}
                                        fieldType={singleFormField?.fieldType}
                                        fieldName={singleFormField?.fieldName}
                                        icon={singleFormField?.icon}
                                        disabled={singleFormField?.disabled}
                                        suffix={singleFormField?.suffix}
                                        className={singleFormField?.className}
                                        globalClassName={`bg-input-background rounded-lg px-3.5 py-2.5 text-sm ${globalClassName}`}
                                        switchBtnShape={singleFormField?.switchBtnShape}
                                        btnIcon={singleFormField?.btnIcon}
                                        buttonXs={singleFormField?.buttonXs}
                                        offsetXs={singleFormField?.offsetXs}
                                        switchXs={singleFormField?.switchXs}
                                        autoSize={singleFormField?.autoSize}
                                        suffixIcon={singleFormField?.suffixIcon}
                                        switchRowClassName={singleFormField?.switchRowClassName}
                                        switchBtnClassName={singleFormField?.switchBtnClassName}
                                        defaultChecked={singleFormField?.defaultChecked}
                                        min={singleFormField?.min}
                                        max={singleFormField?.max}
                                        onChange={(e: any) => singleFormField?.onChange?.(e)}
                                        onClick={(e: any) => singleFormField?.onClick?.(e)}
                                        fieldNameClassName={singleFormField?.fieldNameClassName}
                                        items={singleFormField?.items}
                                        {...singleFormField}
                                      />
                                    </Form.Item>
                                  );
                                }}
                              </Form.Item>
                            </div>
                          </Col>
                        )
                    )}
                </Row>
              </Fragment>
            ))}
        </>
        {children}
        <div className={btnWrapperClassName}>
          {!!firstButtonText && (
            <Form.Item className={submitBtnFormClassName}>
              <Button
                htmlType={submitBtnType}
                className={submitBtnClass}
                style={submitBtnStyle}
                disabled={submitBtnDisable}
                size={submitBtnSize}
                type="primary"
                onClick={(e: any) => submitBtnFunction?.(e)}
              >
                <AppTitle title={firstButtonText} />
              </Button>
            </Form.Item>
          )}
          {!!secondButtonText && (
            <Form.Item>
              <Button
                htmlType="button"
                type="text"
                style={cancelBtnStyle}
                className={`text-primary ${cancelBtnClassName}`}
                size={cancelBtnSize}
                disabled={cancelBtnDisable}
                onClick={(e: any) => cancelBtnFunction?.(e)}
              >
                <AppTitle title={secondButtonText} />
              </Button>
            </Form.Item>
          )}
        </div>
      </Form>
    </>
  );
};
