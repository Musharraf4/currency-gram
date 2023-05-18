import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppDynamicForm } from "../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { twMergeClass } from "../../lib/tw-merge-override-class-lib";

export const InfoFormTemplate = (props: any) => {
  const {
    heading,
    title,
    formFields,
    onSubmitSuccess,
    onSubmitFailed,
    firstButtonText,
    secondButtonText,
    titleClassName,
    headingClassName,
    submitBtnClassName,
    globalFormItemClassName,
    submitBtnDisable,
  } = props;
  const titleClass = twMergeClass(
    `text-sm text-primary-text font-normal mb-2 lg:mb-6 ${titleClassName}`
  );
  const headingClass = twMergeClass(
    `text-xl text-primary-text font-semibold  mb-2 lg:mb-6 ${headingClassName}`
  );
  const submitBtnClass = twMergeClass(
    `w-full text-base font-medium mt-2 lg:mt-10 ${submitBtnClassName}`
  );
  return (
    <>
      <div>
        <AppTitle title={heading} className={headingClass} />
        <AppTitle title={title} className={titleClass} />
      </div>
      <div>
        <AppDynamicForm
          formFields={formFields}
          firstButtonText={firstButtonText}
          secondButtonText={secondButtonText}
          submitBtnClassName={submitBtnClass}
          cancelBtnClassName="w-full text-base font-medium"
          onFinish={(e: any) => onSubmitSuccess?.(e)}
          onFinishFailed={(e: any) => onSubmitFailed?.(e)}
          globalFormItemClassName={globalFormItemClassName}
          submitBtnDisable={submitBtnDisable}
        />
      </div>
    </>
  );
};
