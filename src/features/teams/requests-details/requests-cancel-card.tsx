import { CancelCardTemplate } from "../../../templates/cancel-card/cancel-card";
import { cardDetails, dataInitiator } from "./requests-details-data";
import { useRequestsDetails } from "./use-requests-details";

export const RequestCancelCard = () => {
  const { replaceCardRadioData, paymentApprovalButton, deliveryAddressFormInputFields } =
    useRequestsDetails();
  return (
    <CancelCardTemplate
      radioItems={replaceCardRadioData}
      radioHeading="Select Reason"
      radioTitle="Select the reason from below why you want to cancel an
                    existing card?"
      actionButton={paymentApprovalButton}
      requestInitiator={dataInitiator}
      requestTitle={"Request initiated By"}
      cardDetails={cardDetails}
      cardTitle="Card Details"
    />
  );
};
