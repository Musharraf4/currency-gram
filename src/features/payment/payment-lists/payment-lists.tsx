import { NavigatabelCardWithTable } from "../../../templates/navigatable-card-with-table.tsx/navigatable-card-with-table";
import { PAYMENTLISTSDATA } from "./payment-lists-data";
import { usePaymentLists } from "./use-payment-lists";

export const PaymentLists = () => {
  const { PaymentListsCard, activeCard, navigate, colorPill, dropDownMenuItem } = usePaymentLists();
  return (
    <NavigatabelCardWithTable
      primaryCardData={PaymentListsCard}
      dataSource={
        activeCard === "Pending Payment"
          ? PAYMENTLISTSDATA.paymentListData
          : PAYMENTLISTSDATA.paymentScheduleListData
      }
      columns={PAYMENTLISTSDATA.paymentListColumns?.(navigate, (e: any) => colorPill?.(e))}
      activeCard={activeCard}
      dropdown={dropDownMenuItem}
      headXs={24}
      headMd={6}
      offsetMd={4}
      btnMd={14}
      filterHeading={"Recent Transactions"}
    />
  );
};
