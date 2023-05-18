import { useState } from "react";
import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { SendMoneyFormWithObject } from "../../../templates/send-money-form-with-object/send-money-form-with-object";
import { withdrawDetails, withdrawPaymentFormInputFieldsFunction } from "./withdraw-data";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const Withdraw = () => {
  const withdrawPaymentFormInputFields = withdrawPaymentFormInputFieldsFunction();

  const onWithdrawSuccess = (e: any) => {
    console.log(e);
  };

  const onWithdrawFailed = (e: any) => {
    console.log(e);
  };
  const [isWithdraw, setIsWithdraw] = useState(false);
  const onConfirmWithdraw = (e: any) => {
    console.log(e);
  };
  const onWithdraw = (e: any) => {
    setIsWithdraw(true);
    console.log(e);
  };
  return (
    <>
      <AppCardWhite cardClassName="pt-2 pb-24 pl-4 pr-4">
        <SendMoneyFormWithObject
          FormInputField={withdrawPaymentFormInputFields}
          onFinish={(e: any) => onWithdrawSuccess?.(e)}
          onFinishFailed={(e: any) => onWithdrawFailed(e)}
          firstButtonText="Withdraw"
          buttonText="Withdraw"
          buttonFunction={(e: any) => onWithdraw?.(e)}
          objectInfo={withdrawDetails}
        />
      </AppCardWhite>
      {isWithdraw && (
        <AppModal
          isModalOpen={isWithdraw}
          handleOk={() => setIsWithdraw?.(false)}
          handleCancel={() => setIsWithdraw?.(false)}
          submitBtnFunction={(e: any) => onConfirmWithdraw?.(e)}
          heading="$2000 Withdraw Request Successful"
          subHeading="The withdraw Request has been successfully sent"
          description="Transaction ID: TRX2MGNBVHKGF"
          avatarClassName="text-5xl"
          descriptionClassName="mt-2"
          headingClassName="my-3"
          avatarSize={70}
          src={<ICONSCONSTANT.CheckCircleFilled className="text-success text-5xl" />}
          firstButtonText="Done"
        />
      )}
    </>
  );
};
