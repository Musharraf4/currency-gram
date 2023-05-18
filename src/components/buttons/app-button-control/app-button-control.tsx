import { ButtonIcon } from "../../../skeleton/button-with-icon/button-with-icon";

export const AppButtonControl = (props: any) => {
  const { fieldName, fieldNameClassName, mainBtnText, btnIcon, btnIconRowClassName } = props;
  return (
    <ButtonIcon
      btnIconRowClassName={`mb-3 items-center ${btnIconRowClassName}`}
      fieldNameClassName={`mb-2 md:mb-0  text-sm text-primary-text ml-2 mr-2 ${fieldNameClassName}`}
      iconBtnClassName="mb-2 md:mb-0 border-primary border-solid p-1"
      iconBtnShape={"circle"}
      btnIcon={btnIcon}
      fieldName={fieldName}
      mainBtnText={mainBtnText}
      mainBtnType="primary"
      mainBtnGhost={true}
      btnSize={25}
    />
  );
};
