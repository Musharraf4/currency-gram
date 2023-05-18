import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppLayout } from "../../../hooks/use-app-layout";
import {
  SENDMONEYPAYMENYTYPEPARAMSCONSTANTS,
  SENDMONEYTYPEPARAMSCONSTANTS,
} from "../../../constants/params-constant";
import {
  MONEYTRANSFERPAYMENTTYPESUCCESSPARAM,
  NOTFOUNDPATH,
  SENDMONEYPATH,
  SLASHPATH,
} from "../../../constants/routes-constant";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { MONEYTRANSFERTYPEDATA } from "./money-transfer-type-data";

//TODO: backend needed

export const useMoneyTransferType = () => {
  const { transferType } = useParams();
  const { bannerHeading, pageName } = useAppLayout();
  const [selectedPayMethod, setSelectedPayMethod] = useState("GBP");
  const [prevPayMethod, setPrevPayMethod] = useState("Euro");
  const availableBalance = "6542 GBP";
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const dispatch = useAppDispatch();
  const onConfirm = (e: any) => {
    setIsOtpOpen(false);
    navigate(
      `${SENDMONEYPATH}${SLASHPATH}${transferType}${SLASHPATH}${SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.single}${SLASHPATH}${MONEYTRANSFERPAYMENTTYPESUCCESSPARAM}`
    );
    // setPaymentSuccess(true);
    // dispatch(clearAccountDetails());
    // dispatch(clearCurrentStep());
  };
  const navigate = useNavigate();
  const { layout } = useAppSelector((state) => state);
  const changePayMethod = (prevPayMethod: any, selectedPayMethod: any) => {
    setSelectedPayMethod(prevPayMethod);
    setPrevPayMethod(selectedPayMethod);
  };

  const bannerHeadingFunction = (type: any) => {
    console.log(type);
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.CGTOCG) return "Within Currency Gram";
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.local) return "Local Bank Transfer";
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.international) return "International Transfer";
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.business) return "Send Money To Business";
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.link) return "Share Link";
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.donate) return "Send Money to Charity";
  };
  // console.log(transferType);
  // const value = bannerHeadingFunction?.(transferType);
  // console.log({ value });

  useEffect(() => {
    bannerHeading(bannerHeadingFunction?.(transferType));
    pageName("Send Money");
  }, [transferType]);

  useEffect(() => {
    if (!MONEYTRANSFERTYPEDATA.SENDMONEYTYPEPARAMSARRAY.includes(transferType as any))
      navigate(`${NOTFOUNDPATH}`);
  }, [transferType]);
  const paymentFormInputFields = MONEYTRANSFERTYPEDATA.paymentFormInputFieldsFuntion(
    selectedPayMethod,
    setSelectedPayMethod,
    prevPayMethod,
    setPrevPayMethod,
    changePayMethod,
    availableBalance
  );
  const onSharedLinkSuccess = (e: any) => {
    // console.log(e);
    setIsOtpOpen(true);
  };
  const onSharedLinkFailed = (e: any) => {
    // console.log(e);
  };
  const currencyGramToCurrencyGramListsCard =
    MONEYTRANSFERTYPEDATA.currencyGramToCurrencyGramListsCardFunction(navigate, transferType);
  const paymentTransferTypeTableFilterButton =
    MONEYTRANSFERTYPEDATA.paymentTransferTypeTableFilterButtonFunction(navigate, transferType);

  const conditionalRender = (transferTyped: any) => {
    if (MONEYTRANSFERTYPEDATA.SENDMONEYTYPEPARAMSARRAYFORMAINCARD.includes(transferType as any))
      return `Name, @username, email, mobile`;
    if (transferTyped === SENDMONEYTYPEPARAMSCONSTANTS.donate) return `Search Charity`;
    if (transferTyped === SENDMONEYTYPEPARAMSCONSTANTS.business) return `Search Business`;
    return;
  };
  return {
    transferType,
    paymentFormInputFields,
    onSharedLinkSuccess,
    onSharedLinkFailed,
    currencyGramToCurrencyGramListsCard,
    conditionalRender,
    paymentTransferTypeTableFilterButton,
    isOtpOpen,
    setIsOtpOpen,
    onConfirm,
  };
};
