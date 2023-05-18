import { RequestFormTemplate } from "../../../templates/request-form/request-form";
import { dataInitiator } from "./requests-details-data";
import { useRequestsDetails } from "./use-requests-details";

export const RequestsNewCard = () => {
  const { onPaymentApprove, paymentApprovalButton, requestNewCardFormInputFields } =
    useRequestsDetails();
  return (
    <RequestFormTemplate
      FormInputField={requestNewCardFormInputFields}
      buttons={paymentApprovalButton}
      requestInitiator={dataInitiator}
      mainTitle={"Request initiated By"}
    />
  );
};
