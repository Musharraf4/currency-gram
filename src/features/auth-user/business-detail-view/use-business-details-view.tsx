import { useEffect, useState } from "react";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { personalDetailButtonFunction } from "../personal-detail-view/personal-details-view-data";
import { BUSINESSDETAILSVIEWDATA } from "./business-details-view-data";

export const useBusinessDetailsView = () => {
  const businessDetailsFormFieldsInput =
    BUSINESSDETAILSVIEWDATA.businessDetailsFormFieldsInputFunction();
  const personalDetailButton = personalDetailButtonFunction();
  const [isFormDisable, setIsFormDisable] = useState(true);
  const onUpdateSuccess = (e: any) => {
    console.log(e);
  };
  const onUpdateFailed = (e: any) => {
    console.log(e);
  };

  const toggleBtnFunction = (e: any) => {
    console.log(e);
    if (isFormDisable) setIsFormDisable(false);
  };
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Business Account Information");
    pageName("Profile");
  }, []);

  return {
    businessDetailsFormFieldsInput,
    personalDetailButton,
    isFormDisable,
    setIsFormDisable,
    onUpdateSuccess,
    onUpdateFailed,
    toggleBtnFunction,
  };
};
