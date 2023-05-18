import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { RequestCardApprovalTemplate } from "../../../templates/request-card-approval/request-card-approval";
import { dataInitiator } from "./requests-details-data";
import { useRequestsDetails } from "./use-requests-details";

export const RequestReplaceCard = () => {
  const { replaceCardRadioData, paymentApprovalButton, deliveryAddressFormInputFields } =
    useRequestsDetails();
  return (
    <RequestCardApprovalTemplate
      radioItems={replaceCardRadioData}
      radioHeading="Select Reason"
      radioTitle="Select the reason from below why you want to cancel an existing card?"
      actionButton={paymentApprovalButton}
      requestInitiator={dataInitiator}
      requestTitle={"Request initiated By"}
      formHeading="Delivery Address"
      formTitle="You will receive your replacement card to below registered address"
      formFields={deliveryAddressFormInputFields}
    />
  );
};
