import { Divider } from "antd";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { AppRadioGroup } from "../../components/form-elements/app-radio-group/app-radio-group";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { twMergeClass } from "../../lib/tw-merge-override-class-lib";

export const VerifyCloseAccountTemplate = (props: any) => {
  const {
    heading,
    title,
    radioItems,
    buttons,
    hasHr = true,
    radioRowClassName,
    titleClassName,
    headingClassName,
    radioLabelClassName,
  } = props;
  console.log(props);
  const titleClass = twMergeClass(`font-normal text-sm text-primary-text my-4 ${titleClassName}`);
  const headingClass = twMergeClass(
    `font-medium text-xl text-primary-text mt-7 ${headingClassName}`
  );
  return (
    <>
      {!!heading && <AppTitle title={heading} className={headingClass} />}
      {!!title && <AppTitle title={title} className={titleClass} />}
      {!!hasHr && <Divider className="border-[.5px] border-solid border-grey"></Divider>}
      <AppRadioGroup
        radioItems={radioItems}
        radioRowClassName={radioRowClassName}
        radioLabelClassName={radioLabelClassName}
      />
      <AppButton buttons={buttons} />
    </>
  );
};
