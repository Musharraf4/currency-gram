import { Dropdown } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";
import Euro from "../../../assets/icons/Euro.svg";
import GBP from "../../../assets/icons/GBP.svg";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const AppDropdown = (props: any) => {
  const { items, name, Icon = ICONSCONSTANT.DownOutlined, hasImg, overlayClassName } = props;
  const getPayImage = (name: any) => {
    if (name === "Euro") return Euro;
    return GBP;
  };
  return (
    <div className="pl-2 pr-2 mb-0.5 bg-white rounded-sm shadow-sm">
      <Dropdown menu={{ items }} overlayClassName={overlayClassName} trigger={["click"]}>
        <div
          onClick={(e) => e.preventDefault()}
          className="flex items-center justify-space-between pt-1 pb-1"
        >
          {(hasImg ?? true) && (
            <img width={"10px"} height={"10px"} src={getPayImage?.(name)} alt="" />
          )}
          <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={name} />
          {/* <span className="text-xs ml-1 mr-1"> {name} </span> */}
          <Icon className="text-xs" />
        </div>
      </Dropdown>
    </div>
  );
};
