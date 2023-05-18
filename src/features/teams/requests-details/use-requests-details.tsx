import { useState } from "react";
import {
  deliveryAddressFormInputFieldsFunction,
  paymentApprovalButtonFunction,
  replaceCardRadioDataFunction,
  requestBeneficiaryColumnsFunction,
  requestBeneficiaryInputDataFunction,
  requestNewCardFormInputFieldsFunction,
} from "./requests-details-data";

export const useRequestsDetails = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const onPaymentApprove = (e: any) => {
    console.log("approve");
  };
  const [selectedReason, setSelectedReason] = useState("cardLost");
  const radioOnChange = (e: any) => {
    console.log(e);
    setSelectedReason(e?.target?.value);
  };
  const requestBeneficiaryInputData = requestBeneficiaryInputDataFunction();
  const paymentApprovalButton = paymentApprovalButtonFunction();
  const requestBeneficiaryColumns = requestBeneficiaryColumnsFunction(setIsDeleting);
  const replaceCardRadioData = replaceCardRadioDataFunction(radioOnChange, selectedReason);
  const deliveryAddressFormInputFields = deliveryAddressFormInputFieldsFunction();
  const requestNewCardFormInputFields = requestNewCardFormInputFieldsFunction();
  return {
    onPaymentApprove,
    paymentApprovalButton,
    requestBeneficiaryInputData,
    requestBeneficiaryColumns,
    replaceCardRadioData,
    deliveryAddressFormInputFields,
    requestNewCardFormInputFields,
  };
};
