import { Row, Col } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { AppDynamicForm } from "../../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { ADDCASEDATA } from "./add-case-data";

export const AddCase = () => {
  const [showTransactionIdField, setShowTransactionIdField] = useState("");
  const navigate = useNavigate();
  const addCaseFormFields = ADDCASEDATA.addCaseDataFunction(setShowTransactionIdField);
  const addCaseFormFields2 = ADDCASEDATA.addCaseDataWithTransactionIdFunction(
    setShowTransactionIdField,
    navigate
  );

  return (
    <AppCardWhite>
      <Row justify="center">
        <Col xs={24} md={16} lg={10} className="py-10 px-4">
          <AppTitle
            title="Sorry for inconvenience! Lodge a complaint and we will resolve it immediately"
            className="font-medium text-center"
          />
          <AppDynamicForm
            formFields={
              showTransactionIdField === "transaction" ? addCaseFormFields2 : addCaseFormFields
            }
            firstButtonText={"Submit"}
            fieldMd={24}
            fieldXs={24}
            globalFormItemClassName="mb-2.5"
            //   initialValues={initialValues}
            formClassName="mt-8"
            formAutoComplete="off"
            //   onFinish={(e: any) => onFinish?.(e)}
            //   onFinishFailed={(e: any) => onFinishFailed(e)}
            fieldsClassName="mb-2 text-start"
            submitBtnClassName="w-full mt-3"
            submitBtnSize="large"
            btnWrapperClassName="mb-8"
          />
        </Col>
      </Row>
    </AppCardWhite>
  );
};
