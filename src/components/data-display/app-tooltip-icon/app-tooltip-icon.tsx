import { Tooltip } from "antd";
import { AppButton } from "../../buttons/app-button/app-button";
import { AppTitle } from "../app-title/app-title";

export const AppTooltipIcon = (props: any) => {
  const { tooltipTitle, buttons, tooltipStyle, tooltipClassName } = props;
  return (
    <Tooltip
      title={<AppTitle title={tooltipTitle} />}
      placement={"top"}
      color={"blue"}
      style={tooltipStyle}
      className={tooltipClassName}
    >
      <span>
        <AppButton buttons={buttons} btnWrapperClassName="mb-1 mt-0 lg:mt-0 lg:mb-3" />
      </span>
    </Tooltip>
  );
};
