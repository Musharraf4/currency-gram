import { useEffect } from "react";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { beneficiaryInputDataFunction } from "../add-beneficiary/add-beneficiary-data";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { SendMoneyForm } from "../../../templates/send-money-form/send-money-form";

export const EditBeneficiary = () => {
  const { bannerHeading } = useAppLayout();
  const beneficiaryInputData = beneficiaryInputDataFunction();

  useEffect(() => {
    bannerHeading("Edit Beneficiary");
  }, []);

  const onEditBeneficiarySuccess = (values: any) => {
    // console.log(values);
  };

  const onEditBeneficiaryFailed = (e: any) => {
    // console.log(e);
  };

  return (
    <AppCardWhite cardClassName="pt-2 pb-24 pl-4 pr-4">
      <SendMoneyForm
        FormInputField={beneficiaryInputData}
        onFinish={(e: any) => onEditBeneficiarySuccess?.(e)}
        onFinishFailed={(e: any) => onEditBeneficiaryFailed?.(e)}
        firstButtonText="Update"
      />
    </AppCardWhite>
  );
};
