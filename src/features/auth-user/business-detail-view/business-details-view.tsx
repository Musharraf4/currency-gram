import { ProfileTemplate } from "../../../templates/profile/profile";
import { useBusinessDetailsView } from "./use-business-details-view";

export const BusinessDetailsView = () => {
  const {
    businessDetailsFormFieldsInput,
    personalDetailButton,
    isFormDisable,
    onUpdateSuccess,
    onUpdateFailed,
    toggleBtnFunction,
  } = useBusinessDetailsView();
  return (
    <>
      <ProfileTemplate
        formFields={businessDetailsFormFieldsInput}
        onFinish={(e: any) => onUpdateSuccess?.(e)}
        onFinishFailed={(e: any) => onUpdateFailed?.(e)}
        button={personalDetailButton}
        isFormDisable={isFormDisable}
        submitBtnType={isFormDisable ? "button" : "submit"}
        submitBtnDisable={false}
        firstButtonText={isFormDisable ? "View" : "Update"}
        submitBtnFunction={(e: any) => toggleBtnFunction?.(e)}
        showAvatar={false}
      />
    </>
  );
};
