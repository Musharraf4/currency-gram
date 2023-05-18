import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const NavLinkIconSkeleton = (props: any) => {
  const {
    navLinkClass,
    navLinkClick,
    navLinkKey,
    to,
    title,
    arrow,
    placement,
    color,
    icon,
    imgClassName,
    imgContainerStyle,
    tooltipStyle,
    tooltipClassName,
    nameTitle,
    nameTitleClassName,
    nameTitleVariant,
    end = true,
  } = props;

  return (
    <Tooltip
      title={title}
      arrow={arrow}
      placement={placement}
      color={color}
      style={tooltipStyle}
      className={tooltipClassName}
    >
      <NavLink
        to={to}
        end={end}
        className={`${navLinkClass}`}
        onClick={navLinkClick?.()}
        key={navLinkKey}
      >
        <div style={imgContainerStyle}>
          {!!icon && <img src={icon} alt={title} className={`${imgClassName}`} />}
        </div>
        {!!nameTitle && (
          <AppTitle title={nameTitle} className={nameTitleClassName} Variant={nameTitleVariant} />
        )}
      </NavLink>
    </Tooltip>
  );
};
