import { AppDynamicForm } from "../../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { PersonalDetailsFormFieldsInputFunction } from "../personal-detail-view/personal-details-view-data";

export const UpsertPersonalDetails = () => {
  const PersonalDetailsFormFieldsInput = PersonalDetailsFormFieldsInputFunction();
  const onFinish = (e: any) => {
    console.log(e);
  };
  const onFinishFailed = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <AppDynamicForm
        formFields={PersonalDetailsFormFieldsInput}
        fieldMd={24}
        fieldXs={24}
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
      />
    </>
  );
};
