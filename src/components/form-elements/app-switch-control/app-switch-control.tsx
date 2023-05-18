import { SwitchIcon } from "../../../skeleton/switch-with-icon.tsx/switch-with-icon";

export const AppSwitchControl = (props: any) => {
  const {
    notificationName,
    notificationClassName,
    onChange,
    disabled,
    loading,
    btnIcon,
    checkedIcon,
    unCheckedIcon,
    defaultChecked,
    autoFocus,
    checked,
    onClick,
    switchClassName,
    switchRowClassName,
    buttonClassName,
  } = props;
  return (
    <SwitchIcon
      buttonClassName={`mb-3 md:mb-0 ${buttonClassName}`}
      switchRowClassName={`mb-3 items-center ${switchRowClassName}`}
      fieldNameClassName={`text-sm text-primary-text ${notificationClassName}`}
      switchBtnShape={"circle"}
      className={"bg-white"}
      btnType="primary"
      btnGhost={true}
      btnIcon={btnIcon}
      fieldName={notificationName}
      checkedChildren={checkedIcon}
      unCheckedChildren={unCheckedIcon}
      defaultChecked={defaultChecked}
      size={"small"}
      disabled={disabled}
      onChange={(e: any) => {
        console.log(e);
        onChange?.(e);
      }}
      loading={loading}
      SwitchclassName={`${switchClassName}`}
      autoFocus={autoFocus}
      onClick={(e: any) => onClick?.(e)}
      checked={checked}
    />
  );
};
