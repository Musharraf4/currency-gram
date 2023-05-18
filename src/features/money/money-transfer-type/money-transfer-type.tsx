import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";

import { AppVerifyOtpInputModal } from "../../../components/modals/app-verify-otp-modal/app-verify-otp-modal";
import { SENDMONEYTYPEPARAMSCONSTANTS } from "../../../constants/params-constant";

import { NavigatabelCardWithTable } from "../../../templates/navigatable-card-with-table.tsx/navigatable-card-with-table";
import { SendMoneyForm } from "../../../templates/send-money-form/send-money-form";
import { MONEYTRANSFERTYPEDATA } from "./money-transfer-type-data";

import { useMoneyTransferType } from "./use-money-transfer-type";

export const MoneyTransferType = () => {
  const {
    transferType,
    paymentFormInputFields,
    onSharedLinkSuccess,
    onSharedLinkFailed,
    currencyGramToCurrencyGramListsCard,
    conditionalRender,
    paymentTransferTypeTableFilterButton,
    isOtpOpen,
    setIsOtpOpen,
    onConfirm,
  } = useMoneyTransferType();

  return (
    <>
      {/* <CurrencyGramToCurrencyGramLists /> */}
      {transferType === SENDMONEYTYPEPARAMSCONSTANTS.link ? (
        <AppCardWhite cardClassName="pt-2 pb-24 pl-4 pr-4">
          <SendMoneyForm
            FormInputField={paymentFormInputFields}
            onFinish={(e: any) => onSharedLinkSuccess?.(e)}
            onFinishFailed={(e: any) => onSharedLinkFailed(e)}
            firstButtonText="NEXT"
          />
        </AppCardWhite>
      ) : (
        <NavigatabelCardWithTable
          primaryCardData={
            MONEYTRANSFERTYPEDATA.SENDMONEYTYPEPARAMSARRAYFORMAINCARD.includes(transferType as any)
              ? currencyGramToCurrencyGramListsCard
              : []
          }
          dataSource={MONEYTRANSFERTYPEDATA.dataSource}
          columns={MONEYTRANSFERTYPEDATA.columns}
          inputPlaceholder={conditionalRender?.(transferType)}
          inputMd={10}
          inputXs={24}
          // buttons={}
          // btnLg={}
          headXs={24}
          headMd={6}
          offsetMd={4}
          btnMd={4}
          buttons={
            MONEYTRANSFERTYPEDATA.SENDMONEYTYPEPARAMSARRAYFORMAINCARD.includes(transferType as any)
              ? []
              : paymentTransferTypeTableFilterButton
          }
          filterHeading={
            MONEYTRANSFERTYPEDATA.SENDMONEYTYPEPARAMSARRAYFORMAINCARD.includes(transferType as any)
              ? ""
              : "Recent Transactions"
          }
        />
      )}
      {isOtpOpen && (
        <AppVerifyOtpInputModal
          isModalOpen={isOtpOpen}
          handleOk={() => setIsOtpOpen?.(false)}
          handleCancel={() => setIsOtpOpen?.(false)}
          sendOTP={(e: any) => onConfirm?.(e)}
        />
      )}
    </>
  );
};
