import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { PAYMENTLISTSDATA } from "./payment-lists-data";

export const usePaymentLists = () => {
  const [activeCard, setActiveCard] = useState("Pending Payment");

  const PaymentListsCard = PAYMENTLISTSDATA.PaymentListsCardFunction(setActiveCard);
  const dropDownMenuItem = PAYMENTLISTSDATA.dropDownMenuItemFunction();
  const navigate = useNavigate();
  const colorPill = (e: any) => {
    // console.log(e);
    if (e === "Awaiting funds") return "text-danger bg-background-error";
    if (e === "Limit exceed") return "text-success bg-background-success";
    if (e === "Cancelled") return "text-primary-text bg-grey";
    if (e === "Awaiting date") return "text-warning bg-background-warning";
  };
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Manage Payments");
    pageName("Manage Payments");
  }, []);
  return { PaymentListsCard, activeCard, setActiveCard, navigate, colorPill, dropDownMenuItem };
};
