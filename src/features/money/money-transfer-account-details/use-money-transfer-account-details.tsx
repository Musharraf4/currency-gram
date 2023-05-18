import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppLayout } from "../../../hooks/use-app-layout";

import { SENDMONEYTYPEPARAMSCONSTANTS } from "../../../constants/params-constant";
import { setCurrentStep } from "../../../store/layout/layout-slice";
import { setAccountDetails } from "../../../store/send-money/send-money-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { MONEYTRANSFERACCOUNTDETAILSDATA } from "./money-transfer-account-details-data";

export const useMoneyTransferAccountDetails = () => {
  const { transferType, paymentType } = useParams();
  console.log({ transferType, paymentType });
  const [selectedPayMethod, setSelectedPayMethod] = useState("GBP");
  const [prevPayMethod, setPrevPayMethod] = useState("Euro");
  const { sendMoney } = useAppSelector((state) => state);
  const { layout } = useAppSelector((state) => state);
  const [isSchedule, setIsSchedule] = useState(false);
  const dispatch = useAppDispatch();
  const { bannerHeading } = useAppLayout();
  // const { transferType, paymentType } = useParams();
  const navigate = useNavigate();
  const changePayMethod = (prevPayMethod: any, selectedPayMethod: any) => {
    setSelectedPayMethod(prevPayMethod);
    setPrevPayMethod(selectedPayMethod);
  };
  useEffect(() => {
    bannerHeading(
      transferType === SENDMONEYTYPEPARAMSCONSTANTS?.international
        ? "Transfer Internationally"
        : "Send Money"
    );
  }, []);
  const toggleSchedule = (e: any) => {
    console.log(e);
    setIsSchedule(e);
  };
  const paymentFormInputFields = MONEYTRANSFERACCOUNTDETAILSDATA.paymentFormInputFieldsFuntion(
    selectedPayMethod,
    setSelectedPayMethod,
    prevPayMethod,
    setPrevPayMethod,
    changePayMethod
  );
  const scheduleAccountFormInputFields =
    MONEYTRANSFERACCOUNTDETAILSDATA.scheduleAccountFormInputFieldsFuntion(
      selectedPayMethod,
      setSelectedPayMethod,
      prevPayMethod,
      setPrevPayMethod,
      changePayMethod,
      isSchedule,
      setIsSchedule,
      toggleSchedule
    );
  const internationalpaymentFormInputFields =
    MONEYTRANSFERACCOUNTDETAILSDATA.scheduleAccountFormInputFieldsFuntion(
      selectedPayMethod,
      setSelectedPayMethod,
      prevPayMethod,
      setPrevPayMethod,
      changePayMethod,
      isSchedule,
      setIsSchedule,
      toggleSchedule
    );
  const amountForm = [SENDMONEYTYPEPARAMSCONSTANTS.CGTOCG, SENDMONEYTYPEPARAMSCONSTANTS.local];
  const amountScheduleForm = [
    SENDMONEYTYPEPARAMSCONSTANTS.business,
    SENDMONEYTYPEPARAMSCONSTANTS.donate,
  ];
  const setForm = (transferType: any, paymentType: any) => {
    // if (paymentType === SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.bulk) return;
    if (transferType === SENDMONEYTYPEPARAMSCONSTANTS.international)
      return internationalpaymentFormInputFields;
    if (amountForm.includes(transferType)) return paymentFormInputFields;
    if (amountScheduleForm.includes(transferType)) return scheduleAccountFormInputFields;
  };

  const onFinish = (e: any) => {
    console.log(e);
    dispatch(
      setAccountDetails<any>({
        accountDetails: sendMoney?.accountDetails,
        sendAmount: e?.sendAmount,
      })
    );
    dispatch(
      setCurrentStep<any>({
        currentStep: 2,
        previousStep: layout.currentStep,
      })
    );
  };
  const onFinishFailed = (e: any) => {
    console.log(e);
  };
  return {
    selectedPayMethod,
    setSelectedPayMethod,
    prevPayMethod,
    setPrevPayMethod,
    dispatch,
    transferType,
    paymentType,
    navigate,
    changePayMethod,
    paymentFormInputFields,
    onFinish,
    onFinishFailed,
    sendMoney,
    setForm,
  };
};
