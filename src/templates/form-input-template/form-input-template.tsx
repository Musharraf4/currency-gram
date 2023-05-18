import { Col, Row } from "antd";
import React from "react";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppDynamicForm } from "../../components/form-elements/app-dynamic-form/app-dynamic-form";

export const FormInputTemplate = (props: any) => {
  const {
    firstTitle,
    secondTitle,
    firstButtonText,
    onFinish,
    FormFieldsInputArray,
    LastDescription,
    secondTitleClassName,
  } = props;
  return (
    <>
      <AppCardWhite cardClassName="px-14 py-16">
        <Row justify={"center"} className="py-10">
          <Col lg={8}>
            <div className={`flex space-x-1.5 ${secondTitleClassName}`}>
              <AppTitle title={firstTitle} className=" text-base font-medium" />
              <AppTitle
                title={secondTitle}
                className={`mb-8 text-base font-medium ${secondTitleClassName}`}
              />
            </div>
            <AppDynamicForm
              fieldMd={24}
              fieldXs={24}
              firstButtonText={firstButtonText}
              formFields={FormFieldsInputArray}
              onFinish={(e: any) => onFinish?.(e)}
              submitBtnClassName=" w-full"
            />
            <AppTitle title={LastDescription} className="mb-8 text-base" />
          </Col>
        </Row>
      </AppCardWhite>
    </>
  );
};
