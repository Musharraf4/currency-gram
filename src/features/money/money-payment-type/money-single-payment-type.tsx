import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SENDMONEYTYPEPARAMSCONSTANTS } from "../../../constants/params-constant";
import { clearCurrentStep } from "../../../store/layout/layout-slice";
import { clearAccountDetails } from "../../../store/send-money/send-money-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { MoneyTransferReview } from "../money-review-transfer/money-review-transfer";
import { MoneyTransferAccountDetails } from "../money-transfer-account-details/money-transfer-account-details";
import { MoneyTransferAddDetails } from "../money-transfer-add-details/money-transfer-add-details";
import { MoneyTransferTransfer } from "../money-transfer-transfer/money-transfer-transfer";
import { useAppLayout } from "../../../hooks/use-app-layout";

export const MoneySinglePaymentType = () => {
  const { layout } = useAppSelector((state) => state);
  const { transferType } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearAccountDetails());
      dispatch(clearCurrentStep());
    };
  }, []);
  const { pageName } = useAppLayout();

  useEffect(() => {
    pageName("Single Payment");
  }, []);

  return (
    <>
      {transferType === SENDMONEYTYPEPARAMSCONSTANTS.international ? (
        <>
          {layout.currentStep === 0 ? (
            <MoneyTransferAddDetails />
          ) : layout.currentStep === 1 ? (
            <MoneyTransferAccountDetails />
          ) : layout.currentStep === 2 ? (
            <MoneyTransferReview />
          ) : (
            <MoneyTransferTransfer />
          )}
        </>
      ) : (
        <>
          {layout.currentStep === 0 ? (
            <MoneyTransferAddDetails />
          ) : layout.currentStep === 1 ? (
            <MoneyTransferAccountDetails />
          ) : (
            <MoneyTransferTransfer />
          )}
        </>
      )}
    </>
  );
};
