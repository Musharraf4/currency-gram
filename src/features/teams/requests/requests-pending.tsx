import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { RequestsHorizontalTemplate } from "../../../templates/requests-horizontal/request-horizontal";
import { requestPendingFunction, requestsButtonFunction } from "./requests-data";
import { useRequests } from "./use-requests";
import infoAdd from "../../../assets/icons/info-icon.svg";
import { AppVerifyOtpInputModal } from "../../../components/modals/app-verify-otp-modal/app-verify-otp-modal";
export const RequestsPending = () => {
  const {
    scenerioToggle,
    isApproved,
    setIsApproved,
    onConfirm,
    onConfirmOTP,
    isOtpOpen,
    setIsOtpOpen,
    onRowClick,
    requestPending,
    requestsButton,
  } = useRequests();
  return (
    <>
      <RequestsHorizontalTemplate
        requestData={requestPending}
        buttons={requestsButton}
        onRowClick={() => onRowClick?.()}
      />
      {isApproved || (
        <AppModal
          isModalOpen={isApproved}
          handleOk={() => setIsApproved?.(false)}
          handleCancel={() => setIsApproved?.(false)}
          submitBtnFunction={(e: any) => onConfirm?.(e)}
          heading="Beneficiary will be added without the error rows"
          avatarClassName="text-5xl bg-primary p-2"
          headingClassName="my-8"
          avatarSize={70}
          src={infoAdd}
          firstButtonText="Confirm"
          secondButtonText="Cancel"
          btnWrapperClassName="mt-10 lg:mt-16"
          modalWidth="280px"
        />
      )}
      {isOtpOpen && (
        <AppVerifyOtpInputModal
          isModalOpen={isOtpOpen}
          handleOk={() => setIsOtpOpen?.(false)}
          handleCancel={() => setIsOtpOpen?.(false)}
          sendOTP={(e: any) => onConfirmOTP?.(e)}
        />
      )}
    </>
  );
};
