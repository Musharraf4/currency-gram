import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";

import { clearCurrentStep, setCurrentStep } from "../../../store/layout/layout-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { beneficiaryInputDataFunction } from "../add-beneficiary/add-beneficiary-data";

import { BENEFICIARYPATH } from "../../../constants/routes-constant";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { BULKADDBENEFICIARYIMPORT } from "./bulk-add-beneficiary-import";
import { BULKADDBENEFICIARYDATA } from "./bulk-add-beneficiary-data";

export const useBulkAddBeneficiary = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { beneficiary } = useAppSelector((state) => state);
  const { layout } = useAppSelector((state) => state);
  const [csvData, setCsvData] = useState<any>("");
  const [fileUploadSuccess, setFileUploadSuccess] = useState(false);
  const [fileInfo, setFileInfo] = useState<any>("");
  const [csvErrorData, setCsvErrorData] = useState<any>("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { openAlert } = useAppAlert();
  const onConfirmAdd = (e: any) => {
    // console.log(e);
    navigate(`${BENEFICIARYPATH}`);
  };
  const bulkbeneficiaryViewAllTableFilterButton =
    BULKADDBENEFICIARYDATA.bulkbeneficiaryViewAllTableFilterButtonFunction(navigate, setIsAdded);
  const bulkbeneficiaryTableFilterButton =
    BULKADDBENEFICIARYDATA.bulkbeneficiaryTableFilterButtonFunction(
      navigate,
      csvData,
      dispatch,
      layout,
      setIsAdded
    );
  const beneficiaryInputData = beneficiaryInputDataFunction();
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Add Beneficiary");
    pageName(layout.currentStep === 1 ? "Bulk Payment" : "Beneficiary");
  }, [layout.currentStep]);
  const onEditSuccess = (values: any) => {
    // console.log(values);
    // console.log(csvData);
    const editRow = {
      "First name": values.firstName,
      "Last name": values.lastName,
      "Nick name": values.nickName,
      "Account no": values.accountNo,
      "Sort code": values.sortCode,
      Reference: values.reference,
    };
    // const editcsvData = csvData.filter(
    //   (x: any) => x?.["Account no"] !== beneficiary?.bulkBeneficiaryEditForm?.accountNo
    // );
    const editErrorcsvData = csvErrorData.filter(
      (x: any) => x?.["Account no"] !== beneficiary?.bulkBeneficiaryEditForm?.accountNo
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
  };

  const onEditFailed = (e: any) => {
    // console.log(e);
  };
  const onConfirmDelete = (e: any) => {
    // console.log(beneficiary?.deleteBulkEntry);
    const editcsvData = csvData.filter(
      (x: any) => x?.["Account no"] !== beneficiary?.deleteBulkEntry?.["Account no"]
    );
    const editErrorcsvData = csvErrorData.filter(
      (x: any) => x?.["Account no"] !== beneficiary?.deleteBulkEntry?.["Account no"]
    );
    setCsvData(editcsvData);
    setCsvErrorData(editErrorcsvData);
    console.log({ editcsvData, editErrorcsvData });
    setIsDeleting(false);
    openAlert("Record Deleted", "error");
    dispatch(BULKADDBENEFICIARYIMPORT.clearBulkBeneficiaryDeleteEntry());
  };
  useEffect(() => {
    return () => {
      dispatch(BULKADDBENEFICIARYIMPORT.clearBulkBeneficiaryEditForm());
      dispatch(clearCurrentStep());
      dispatch(BULKADDBENEFICIARYIMPORT.clearBulkBeneficiaryDeleteEntry());
    };
  }, []);

  return {
    layout,
    bulkbeneficiaryTableFilterButton,
    csvErrorData,
    beneficiary,
    dispatch,
    setIsDeleting,
    csvData,
    bulkbeneficiaryViewAllTableFilterButton,
    setCsvData,
    fileInfo,
    setFileInfo,
    beneficiaryInputData,
    onEditSuccess,
    onEditFailed,
    fileUploadSuccess,
    setFileUploadSuccess,
    setCsvErrorData,
    isDeleting,
    isAdded,
    setIsAdded,
    onConfirmDelete,
    onConfirmAdd,
  };
};
