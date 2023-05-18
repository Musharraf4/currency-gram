import { RequestFormTemplate } from "../../../templates/request-form/request-form";
import { dataInitiator } from "./requests-details-data";
import { useRequestsDetails } from "./use-requests-details";

export const RequestsSingleBeneficiary = () => {
  const { onPaymentApprove, paymentApprovalButton, requestBeneficiaryInputData } =
    useRequestsDetails();
  return (
    <RequestFormTemplate
      FormInputField={requestBeneficiaryInputData}
      buttons={paymentApprovalButton}
      requestInitiator={dataInitiator}
      mainTitle={"Request initiated By"}
    />
  );
};
