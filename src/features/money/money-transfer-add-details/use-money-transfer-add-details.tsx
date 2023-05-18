import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppLayout } from "../../../hooks/use-app-layout";
import {
  SENDMONEYPAYMENYTYPEPARAMSCONSTANTS,
  SENDMONEYTYPEPARAMSCONSTANTS,
} from "../../../constants/params-constant";
import { setCurrentStep } from "../../../store/layout/layout-slice";
import { setAccountDetails } from "../../../store/send-money/send-money-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { MONEYTRANSFERADDDETAILSDATA } from "./money-transfer-add-details-data";

export const useMoneyTransferAddDetails = (props?: any) => {
  console.log({ props });
  const { transferType, paymentType } = useParams();
  console.log({ transferType, paymentType });
  const [isSchedule, setIsSchedule] = useState(false);
  const [saveBeneficiary, setSaveBeneficiary] = useState(true);

  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const { layout } = useAppSelector((state) => state);
  const { sendMoney } = useAppSelector((state) => state);
  const [csvData, setCsvData] = useState<any>("");
  const [fileUploadSuccess, setFileUploadSuccess] = useState(false);
  const [fileInfo, setFileInfo] = useState<any>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { bannerHeading } = useAppLayout();
  const toggleSchedule = (e: any) => {
    console.log(e);
    setIsSchedule(e);
  };
  useEffect(() => {
    bannerHeading("Add Details");
  }, []);
  const toggleSaveBeneficiary = (e: any) => {
    console.log(e);
    setSaveBeneficiary(e);
  };
  const intraCurrencyGramFormInputFields =
    MONEYTRANSFERADDDETAILSDATA.intraCurrencyGramFormInputFieldsFuntion(
      isSchedule,
      toggleSchedule,
      saveBeneficiary,
      toggleSaveBeneficiary
    );
  const localTransferFormInputFields =
    MONEYTRANSFERADDDETAILSDATA.localTransferFormInputFieldsFuntion(
      isSchedule,
      toggleSchedule,
      saveBeneficiary,
      toggleSaveBeneficiary
    );
  const charityAndBusinessFormInputFields =
    MONEYTRANSFERADDDETAILSDATA.charityAndBusinessFormInputFieldsFuntion(
      transferType === SENDMONEYTYPEPARAMSCONSTANTS.donate
    );
  const internationalTransferCompanyFormInputFields =
    MONEYTRANSFERADDDETAILSDATA.internationalTransferCompanyFormInputFieldsFuntion(
      transferType === SENDMONEYTYPEPARAMSCONSTANTS.donate
    );
  const internationalTransferindividualFormInputFields =
    MONEYTRANSFERADDDETAILSDATA.internationalTransferindividualFormInputFieldsFuntion(
      transferType === SENDMONEYTYPEPARAMSCONSTANTS.donate
    );
  const onFinish = (e: any) => {
    console.log(e);
    const accountTitle = `${e.firstName} ${e.lastName}`;
    const accountDetails = [
      {
        data: {
          "Account Title": accountTitle,
          "Account No": e.accountNo,
          "Sort code": e.sortCode,
        },
      },
    ];
    console.log(accountDetails);
    dispatch(
      setAccountDetails<any>({
        accountDetails,
        sendAmount: 0,
        sendMoneyAddDetailsForm: e,
      })
    );

    dispatch(
      setCurrentStep<any>({
        currentStep: 1,
        previousStep: layout.currentStep,
      })
    );
    // navigate(
    //   `${SENDMONEYPATH}${SLASHPATH}${transferType}${SLASHPATH}${paymentType}${SLASHPATH}${MONEYTRANSFERPAYMENTTYPEACCOUNTDETAILSPARAM}`
    // );
  };
  const onFinishFailed = (e: any) => {
    console.log(e);
    // dispatch(
    //   setCurrentStep<any>({
    //     currentStep: 1,
    //   })
    // );
    // navigate(
    //   `${SENDMONEYPATH}${SLASHPATH}${transferType}${SLASHPATH}${paymentType}${SLASHPATH}${MONEYTRANSFERPAYMENTTYPEACCOUNTDETAILSPARAM}`
    // );
  };

  const getForm = (transferType: any, paymentType: any) => {
    if (paymentType === SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.bulk) return;
    if (transferType === SENDMONEYTYPEPARAMSCONSTANTS.CGTOCG)
      return intraCurrencyGramFormInputFields;
    if (transferType === SENDMONEYTYPEPARAMSCONSTANTS.local) return localTransferFormInputFields;
    if (transferType === SENDMONEYTYPEPARAMSCONSTANTS.business)
      return charityAndBusinessFormInputFields;
    if (transferType === SENDMONEYTYPEPARAMSCONSTANTS.donate)
      return charityAndBusinessFormInputFields;
  };

  return {
    isSchedule,
    setIsSchedule,
    intraCurrencyGramFormInputFields,
    localTransferFormInputFields,
    charityAndBusinessFormInputFields,
    getForm,
    onFinish,
    onFinishFailed,
    internationalTransferCompanyFormInputFields,
    internationalTransferindividualFormInputFields,
    layout,
    csvData,
    setCsvData,
    fileUploadSuccess,
    setFileUploadSuccess,
    fileInfo,
    setFileInfo,
    sendMoney,
  };
};
