import { useEffect } from "react";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { PaymentDetailsPending } from "./payment-details-pending";
//TODO: backend dependent

export const PaymentDetail = () => {
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Manage Payments");
    pageName("Manage Payments");
  }, []);
  return <PaymentDetailsPending />;
};
