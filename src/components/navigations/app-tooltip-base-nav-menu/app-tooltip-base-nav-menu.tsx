import { AppTitle } from "../../data-display/app-title/app-title";
import { NavLinkIconSkeleton } from "../../../skeleton/nav-link-icon.tsx/nav-link-icon";
import "./app-tooltip-base-nav-menu.scss";

export const AppTooltipBaseNavMenu = (props: any) => {
  const { navLinkTo, navLinkClick, navLinkKey, title, icon, end = true } = props;

  return (
    <div className="py-3">
      <NavLinkIconSkeleton
        navLinkClass="sidebar-menu-links group flex items-center rounded-lg p-2.5"
        to={navLinkTo}
        end={end}
        navLinkKey={navLinkKey}
        navLinkClick={navLinkClick?.()}
        imgContainerStyle={{ height: "20px", width: "20px" }}
        title={<AppTitle className="text-primary-text text-sm font-medium" title={title} />}
        placement="right"
        color="white"
        icon={icon}
        arrow={false}
        imgClassName="sidebar-icon w-full h-full"
      />
    </div>
  );
};
