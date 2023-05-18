import { useParams } from "react-router-dom";
import { SENDMONEYPAYMENYTYPEPARAMSCONSTANTS } from "../../../constants/params-constant";
import { MoneyBulkPaymentType } from "./money-bulk-payment-type";
import { MoneySinglePaymentType } from "./money-single-payment-type";

export const MoneyPaymentType = () => {
  const { paymentType } = useParams();
  return (
    <>
      {paymentType === SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.single && <MoneySinglePaymentType />}
      {paymentType === SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.bulk && <MoneyBulkPaymentType />}
    </>
  );
};
