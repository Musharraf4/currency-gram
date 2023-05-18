import { Col, Row } from "antd";
import { useState } from "react";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { AppDynamicForm } from "../../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { GeneratedLinkTemplate } from "../../../templates/generated-link-template/generated-link-template";
import { ADDMONEYDATA } from "./add-money-data";

export const AddMoneyUsingSharedLink = () => {
  const [showComponent, setShowComponent] = useState(true);
  const { openAlert } = useAppAlert();
  const [prevPayMethod, setPrevPayMethod] = useState("Euro");
  const [selectedPayMethod, setSelectedPayMethod] = useState("GBP");
  const changePayMethod = (prevPayMethod: any, selectedPayMethod: any) => {
    setSelectedPayMethod(prevPayMethod);
    setPrevPayMethod(selectedPayMethod);
  };

  const sharedLinkFields = ADDMONEYDATA.sharedLinkFieldFuntion(
    prevPayMethod,
    selectedPayMethod,
    changePayMethod
  );

  const onFinish = (values: any) => {
    console.log("🚀 ~ file: add-money-using-shared-link.tsx:25 ~ onFinish ~ values:", values);
    setShowComponent(false);
  };
  return (
    <Row justify="center" className="px-2">
      {showComponent && (
        <Col md={{ span: 14 }} xs={{ span: 24 }}>
          <AppDynamicForm
            formFields={sharedLinkFields}
            onFinish={(e: any) => onFinish?.(e)}
            firstButtonText="Add Money"
            fieldMd={24}
            fieldXs={24}
            formClassName={"mt-5"}
            submitBtnClassName="w-full"
          />
        </Col>
      )}

      {!showComponent && (
        <Col md={14} xs={24}>
          <GeneratedLinkTemplate
            title="You're all set to share our link to anyone"
            inputValue="link"
            mainClassName="my-10"
            btnText="Copy Link"
            btnClick={() => {
              navigator.clipboard.writeText("abc");
              openAlert(`text copied`, "success");
            }}
          />
        </Col>
      )}
    </Row>
  );
};
