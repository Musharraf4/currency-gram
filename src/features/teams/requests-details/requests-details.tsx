import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
// import { RequestsBulkBeneficiary } from "./requests-bulk-beneficiary";
// import { RequestCancelCard } from "./requests-cancel-card";
// import { RequestsDetailsPayment } from "./requests-details-payment";
import { RequestsNewCard } from "./requests-new-card";
// import { RequestReplaceCard } from "./requests-replace-card";
// import { RequestsSingleBeneficiary } from "./requests-single-beneficiary";

//TODO: Backend needed to procedd further

export const RequestsDetails = () => {
  return (
    <>
      <AppCardWhite cardClassName="pt-2 pb-2 lg:pb-24 lg:pt-8 px-6">
        {/* <RequestsDetailsPayment /> */}
        {/* <RequestsSingleBeneficiary /> */}
        {/* <RequestReplaceCard /> */}
        {/* <RequestCancelCard /> */}
        <RequestsNewCard />
      </AppCardWhite>
      {/* <RequestsBulkBeneficiary /> */}
    </>
  );
};
