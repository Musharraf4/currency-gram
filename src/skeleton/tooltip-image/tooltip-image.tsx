import { Tooltip } from "antd";

export const TooltipImage = (props: any) => {
  const {
    children,
    title,
    arrow,
    placement,
    color,
    icon,
    imgClassName,
    imgContainerStyle,
    tooltipStyle,
    tooltipClassName,
  } = props;
  console.log(props);

  return (
    <Tooltip
      title={title}
      arrow={arrow}
      placement={placement}
      color={color}
      style={tooltipStyle}
      className={tooltipClassName}
    >
      <div style={imgContainerStyle}>
        <img src={icon} alt={title} className={`${imgClassName}`} />
      </div>
    </Tooltip>
  );
};
