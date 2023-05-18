import { Button, Dropdown } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";

export const AppDropdownIcon = (props: any) => {
  const { items, title, className } = props;
  return (
    <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]} className={className}>
      <Button size="large" className="bg-input-background">
        <AppTitle title={title} className="text-sm text-[#4B5563]" />
      </Button>
    </Dropdown>
  );
};
