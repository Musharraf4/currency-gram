import { AppButton } from "../../buttons/app-button/app-button";
import { AppTitle } from "../../data-display/app-title/app-title";
import { AppTextArea } from "../app-textarea/app-textarea";

export const AppReplyInput = (props: any) => {
  const { button, mainTitle, placeholder, onChange } = props;
  return (
    <>
      <AppTitle title={mainTitle} className="text-[#333333] text-xl font-medium mb-3" />
      <AppTextArea placeholder={placeholder} onChange={(e: any) => onChange?.(e)} />
      <AppButton buttons={button} btnWrapperClassName="mt-2 lg:mt-2" />
    </>
  );
};
