import { RequestsHorizontalTemplate } from "../../../templates/requests-horizontal/request-horizontal";
import { requestPendingFunction } from "./requests-data";
import { useRequests } from "./use-requests";

export const RequestsAll = () => {
  const { onRowClick, requestPending } = useRequests();
  return (
    <>
      <RequestsHorizontalTemplate
        requestData={requestPending}
        hasPending={true}
        onRowClick={() => onRowClick?.()}
      />
    </>
  );
};
