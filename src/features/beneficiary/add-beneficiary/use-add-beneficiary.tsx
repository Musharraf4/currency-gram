import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ADDBENEFICIARYDATA } from "./add-beneficiary-data";

import { useAppLayout } from "../../../hooks/use-app-layout";
import { BENEFICIARYPATH } from "../../../constants/routes-constant";

export const useAddBeneficiary = () => {
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const beneficiaryInputData = ADDBENEFICIARYDATA.beneficiaryInputDataFunction();
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Add Beneficiary");
    pageName("Beneficiary");
  }, []);

  const onConfirmAdd = (e: any) => {
    // console.log(e);
    navigate(`${BENEFICIARYPATH}`);
  };

  const onBeneficiaryAddedSuccess = (values: any) => {
    // console.log(values);
    setIsAdded(true);
  };
  const onBeneficiaryAddedFailed = (e: any) => {
    // console.log(e);
  };

  return {
    isAdded,
    setIsAdded,
    navigate,
    beneficiaryInputData,
    onBeneficiaryAddedSuccess,
    onBeneficiaryAddedFailed,
    onConfirmAdd,
  };
};
