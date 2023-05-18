import { useAddBeneficiary } from "./use-add-beneficiary";

import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { AppModal } from "../../../components/modals/app-modal/app-modal";

import { SendMoneyForm } from "../../../templates/send-money-form/send-money-form";

import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const AddBeneficiary = () => {
  const {
    isAdded,
    setIsAdded,
    beneficiaryInputData,
    onBeneficiaryAddedSuccess,
    onBeneficiaryAddedFailed,
    onConfirmAdd,
  } = useAddBeneficiary();
  return (
    <>
      <AppCardWhite cardClassName="pt-2 pb-24 pl-4 pr-4">
        <SendMoneyForm
          FormInputField={beneficiaryInputData}
          onFinish={(e: any) => onBeneficiaryAddedSuccess?.(e)}
          onFinishFailed={(e: any) => onBeneficiaryAddedFailed(e)}
          firstButtonText="ADD"
        />
      </AppCardWhite>
      {isAdded && (
        <AppModal
          isModalOpen={isAdded}
          handleOk={() => setIsAdded?.(false)}
          handleCancel={() => setIsAdded?.(false)}
          submitBtnFunction={(e: any) => onConfirmAdd?.(e)}
          heading="Beneficiary Added Successfully"
          avatarClassName="text-5xl"
          headingClassName="my-3"
          avatarSize={70}
          src={<ICONSCONSTANT.CheckCircleFilled className="text-success text-5xl" />}
          firstButtonText="Done"
        />
      )}
    </>
  );
};
