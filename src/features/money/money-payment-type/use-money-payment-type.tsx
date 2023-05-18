import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { SENDMONEYTYPEPARAMSCONSTANTS } from "../../../constants/params-constant";

import { setCurrentStep } from "../../../store/layout/layout-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { beneficiaryInputDataFunction } from "../../beneficiary/add-beneficiary/add-beneficiary-data";
import { MONEYPAYMENTTYPEIMPORT } from "./money-payment-type-import";
import { MONEYPAYMENTTYPEDATA } from "./money-payment-type-data";

export const useMoneyPaymentType = () => {
  const { transferType, paymentType } = useParams();
  const [isSchedule, setIsSchedule] = useState(false);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const { layout } = useAppSelector((state) => state);
  const { sendMoney } = useAppSelector((state) => state);
  const [csvData, setCsvData] = useState<any>("");
  const [csvErrorData, setCsvErrorData] = useState<any>("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [fileUploadSuccess, setFileUploadSuccess] = useState(false);
  const [fileInfo, setFileInfo] = useState<any>("");
  const [isAdded, setIsAdded] = useState(false);
  const { openAlert } = useAppAlert();
  const { bannerHeading, pageName } = useAppLayout();

  const onConfirmAdd = (e: any) => {
    navigate(
      `${MONEYPAYMENTTYPEIMPORT.SENDMONEYPATH}${MONEYPAYMENTTYPEIMPORT.SLASHPATH}${transferType}${MONEYPAYMENTTYPEIMPORT.SLASHPATH}${paymentType}${MONEYPAYMENTTYPEIMPORT.SLASHPATH}${MONEYPAYMENTTYPEIMPORT.MONEYTRANSFERPAYMENTTYPETRANSFERPARAM}`
    );
  };
  const bannerHeadingFunction = (type?: any) => {
    console.log(type);
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.CGTOCG) return "Within Currency Gram";
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.local) return "Local Bank Transfer";
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.international) return "International Transfer";
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.business) return "Send Money To Business";
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.link) return "Share Link";
    if (type === SENDMONEYTYPEPARAMSCONSTANTS?.donate) return "Send Money to Charity";
  };
  useEffect(() => {
    bannerHeading("Upload Payment File");
    pageName("Bulk Payment");
  }, []);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onConfirmDelete = (e: any) => {
    // console.log(e);
    const editcsvData = csvData.filter(
      (x: any) => x?.["Account no"] !== sendMoney?.deleteBulkEntry?.["Account no"]
    );
    const editErrorcsvData = csvErrorData.filter(
      (x: any) => x?.["Account no"] !== sendMoney?.deleteBulkEntry?.["Account no"]
    );
    setCsvData(editcsvData);
    setCsvErrorData(editErrorcsvData);
    setIsDeleting(false);
    openAlert("Record Deleted", "error");
  };
  const toggleSchedule = (e: any) => {
    console.log(e);
    setIsSchedule(e);
  };
  const onEditSuccess = (values: any) => {
    console.log(values);
    const editRow = {
      "First name": values.firstName,
      "Last name": values.lastName,
      "Nick name": values.nickName,
      "Account no": values.accountNo,
      "Sort code": values.sortCode,
      Reference: values.reference,
    };
    const editcsvData = csvData.filter(
      (x: any) => x?.["Account no"] !== sendMoney?.bulkPaymentEditForm?.accountNo
    );
    const editErrorcsvData = csvErrorData.filter(
      (x: any) => x?.["Account no"] !== sendMoney?.bulkPaymentEditForm?.accountNo
    );
    // setCsvData(editcsvData.push(editRow));
    setCsvErrorData(editErrorcsvData);
    // console.log({ editcsvData, editErrorcsvData });
    dispatch(
      setCurrentStep<any>({
        currentStep: 0,
        previousStep: 0,
      })
    );
    // dispatch(
    //   setCurrentStep<any>({
    //     currentStep: 1,
    //     previousStep: layout.currentStep,
    //   })
    // );
    // navigate(
    //   `${SENDMONEYPATH}${SLASHPATH}${transferType}${SLASHPATH}${paymentType}${SLASHPATH}${MONEYTRANSFERPAYMENTTYPEACCOUNTDETAILSPARAM}`
    // );
  };
  const onEditFailed = (e: any) => {
    console.log(e);
    // dispatch(
    //   setCurrentStep<any>({
    //     currentStep: 1,
    //     previousStep: layout.currentStep,
    //   })
    // );
    // navigate(
    //   `${SENDMONEYPATH}${SLASHPATH}${transferType}${SLASHPATH}${paymentType}${SLASHPATH}${MONEYTRANSFERPAYMENTTYPEACCOUNTDETAILSPARAM}`
    // );
  };

  const bulkPaymentTableFilterButton = MONEYPAYMENTTYPEDATA.bulkPaymentTableFilterButtonFunction?.(
    navigate,
    csvData,
    dispatch,
    layout,
    transferType,
    paymentType,
    setIsAdded
  );
  const bulkPaymentViewAllTableFilterButton =
    MONEYPAYMENTTYPEDATA.bulkPaymentViewAllTableFilterButtonFunction?.(
      navigate,
      transferType,
      paymentType,
      setIsAdded
    );
  const beneficiaryInputData = beneficiaryInputDataFunction();
  return {
    isSchedule,
    setIsSchedule,
    onEditSuccess,
    onEditFailed,
    bulkPaymentTableFilterButton,
    layout,
    csvData,
    setCsvData,
    bulkPaymentViewAllTableFilterButton,
    fileUploadSuccess,
    setFileUploadSuccess,
    fileInfo,
    setFileInfo,
    csvErrorData,
    setCsvErrorData,
    dispatch,
    beneficiaryInputData,
    sendMoney,
    isDeleting,
    setIsDeleting,
    onConfirmDelete,
    openAlert,
    isAdded,
    setIsAdded,
    onConfirmAdd,
    transferType,
  };
};
