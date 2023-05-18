import { useEffect } from "react";
import { INRCREASELIMITDATA } from "./increase-limit-data";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { InfoFormTemplate } from "../../../templates/info-form/info-form";

export const IncreaseLimitForm = (props:any) => {
  const { bannerHeading, pageName } = useAppLayout();
  const {setShowIncreaseLimitForm}=props;
  useEffect(() => {
    bannerHeading("Request to Increase Limits");
    pageName("Cards")
  }, [bannerHeading]);

  const RequestIncreaseLimitFormFieldsInput = INRCREASELIMITDATA.RequestIncreaseLimitFormFieldsInputFunction();

  const onFinish = (e: any) => {
    setShowIncreaseLimitForm('RequestedChanges')
  };

  return (
    <>
          <InfoFormTemplate
            headingClassName="text-2xl font-semibold text-center"
            titleClassName="text-base font-medium"
            formFields={RequestIncreaseLimitFormFieldsInput}
            firstButtonText="Continue"
            onSubmitSuccess={onFinish}
          />
    </>
  );
};
