import { Dropdown } from "antd";

export const DropdownButton = (props: any) => {
  const { items, icon, title, className, dropdownClass, placement } = props;
  return (
    <div>
      <Dropdown className={dropdownClass} menu={{ items }} placement={placement}>
        <div className={className}>
          {title} {icon}
        </div>
      </Dropdown>
    </div>
  );
};
