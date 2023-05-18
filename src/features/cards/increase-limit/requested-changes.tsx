import { useState } from "react";
import { INRCREASELIMITDATA } from "./increase-limit-data";
import { RequestChangesTemplate } from "../../../templates/request-changes/request-changes";
import { AppVerifyOtpInputModal } from "../../../components/modals/app-verify-otp-modal/app-verify-otp-modal";

export const RequestedChanges = (props:any) => {
  const {setShowIncreaseLimitForm}=props;
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [isChangesChecked, setIsChangesChecked] = useState(false);

  const onSubmitSuccess = (e: any) => {
    setIsOtpOpen(true);
  };

  const RequestChangeFunction = () => {
    setIsChangesChecked(!isChangesChecked);
  };
  const proceedFunction =()=>{
    setShowIncreaseLimitForm('RequestSubmitTemplate')
    setIsOtpOpen(false);
  }
  return (
    <>
      <RequestChangesTemplate
        btnType="primary"  
        btnChildren="Submit"
        title="Requested Changes"
        className="text-base rounded-full"
        checked={isChangesChecked}
        disabled={!isChangesChecked}
        onChange={RequestChangeFunction}
        onSubmitSuccess={onSubmitSuccess}
        RequestChangesTemplateArray={INRCREASELIMITDATA.RequestChangesArray}
        radioChildren="I can confirm and approve the changes mentioned above in my card limits."
      />
      {isOtpOpen && (
        <AppVerifyOtpInputModal
          isModalOpen={isOtpOpen}
          handleOk={() => setIsOtpOpen?.(false)}
          handleCancel={() => setIsOtpOpen?.(false)}
           sendOTP={proceedFunction}
        />
      )}
    </>
  );
};
