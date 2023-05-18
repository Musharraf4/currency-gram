import { useEffect, useState } from "react";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { PERSONALDETAILSVIEWIMPORTS } from "./personal-details-view-imports";
import { PERSONALDETAILSVIEWSDATA } from "./personal-details-view-data";

export const usePersonalDetailsView = () => {
  const PersonalDetailsFormFieldsInput =
    PERSONALDETAILSVIEWSDATA.PersonalDetailsFormFieldsInputFunction();
  const personalDetailsCommunity = PERSONALDETAILSVIEWSDATA.personalDetailsCommunityFunction();
  const personalDetailCommunityButton =
    PERSONALDETAILSVIEWSDATA.personalDetailCommunityButtonFunction();
  const personalDetailButton = PERSONALDETAILSVIEWSDATA.personalDetailButtonFunction();
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
    bannerHeading("Personal Information");
    pageName("Profile");
  }, []);
  return {
    PersonalDetailsFormFieldsInput,
    personalDetailButton,
    isFormDisable,
    setIsFormDisable,
    onUpdateSuccess,
    onUpdateFailed,
    toggleBtnFunction,
    personalDetailsCommunity,
    personalDetailCommunityButton,
  };
};
