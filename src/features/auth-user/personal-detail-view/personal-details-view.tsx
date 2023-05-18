import { ProfileTemplate } from "../../../templates/profile/profile";
import { usePersonalDetailsView } from "./use-personal-details-view";

export const PersonalDetailsView = () => {
  const {
    PersonalDetailsFormFieldsInput,
    personalDetailButton,
    isFormDisable,
    onUpdateSuccess,
    onUpdateFailed,
    toggleBtnFunction,
  } = usePersonalDetailsView();
  return (
    <>
      <ProfileTemplate
        formFields={PersonalDetailsFormFieldsInput}
        onFinish={(e: any) => onUpdateSuccess?.(e)}
        onFinishFailed={(e: any) => onUpdateFailed?.(e)}
        button={personalDetailButton}
        personName="John Doe"
        isFormDisable={isFormDisable}
        submitBtnType={isFormDisable ? "button" : "submit"}
        submitBtnDisable={false}
        firstButtonText={isFormDisable ? "View" : "Update"}
        submitBtnFunction={(e: any) => toggleBtnFunction?.(e)}
      />
    </>
  );
};
