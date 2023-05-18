import { RequestBulkTemplate } from "../../../templates/request-bulk/request-bulk";
import { dataInitiator } from "./requests-details-data";
import { useRequestsDetails } from "./use-requests-details";

export const RequestsBulkBeneficiary = (props: any) => {
  const {} = props;
  const {
    onPaymentApprove,
    paymentApprovalButton,
    requestBeneficiaryInputData,
    requestBeneficiaryColumns,
  } = useRequestsDetails();
  return (
    <>
      <RequestBulkTemplate
        buttons={paymentApprovalButton}
        requestInitiator={dataInitiator}
        mainTitle={"Request initiated By"}
        columns={requestBeneficiaryColumns}
      />
    </>
  );
};
