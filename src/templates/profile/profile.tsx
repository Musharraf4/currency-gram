import { AppProfileImage } from "../../components/form-elements/app-profile-image/app-profile-image";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppDynamicForm } from "../../components/form-elements/app-dynamic-form/app-dynamic-form";

export const ProfileTemplate = (props: any) => {
  const {
    formFields,
    onFinish,
    onFinishFailed,
    personName,
    isFormDisable,
    submitBtnDisable,
    submitBtnType,
    firstButtonText,
    submitBtnFunction,
    showAvatar = true,
  } = props;
  return (
    <>
      <AppCardWhite cardClassName="p-8 pt-14 relative">
        {!!showAvatar && (
          <AppProfileImage
            personName={personName}
            size={{ xs: 130, sm: 130, md: 200, lg: 200, xxl: 200, xl: 200 }}
          />
        )}
        <div className={"mt-2"}>
          <AppDynamicForm
            formFields={formFields}
            firstButtonText={firstButtonText}
            submitBtnFormClassName={
              !!showAvatar
                ? "absolute top-48 right-14 text-center sm:top-10 w-[100px] sm:right-10"
                : "top-5 absolute right-20 lg:right-10"
            }
            formClassName="mt-8"
            formAutoComplete="off"
            onFinish={(e: any) => onFinish?.(e)}
            onFinishFailed={(e: any) => onFinishFailed?.(e)}
            fieldsClassName="mb-8 text-start"
            submitBtnClassName="w-full"
            cancelBtnClassName="w-full"
            cancelBtnsize="large"
            submitBtnSize="large"
            btnWrapperClassName="mb-8"
            globalClassName={!!!isFormDisable && "bg-white"}
            isFormDisable={isFormDisable}
            submitBtnType={submitBtnType}
            submitBtnDisable={submitBtnDisable}
            submitBtnFunction={(e: any) => submitBtnFunction?.(e)}
          />
        </div>
      </AppCardWhite>
    </>
  );
};
