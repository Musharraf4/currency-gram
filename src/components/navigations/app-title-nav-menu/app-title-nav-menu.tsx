import { NavLinkIconSkeleton } from "../../../skeleton/nav-link-icon.tsx/nav-link-icon";
import "./app-title-nav-menu.scss";

export const AppTitleNavMenu = (props: any) => {
  const { navLinkTo, navLinkClick, navLinkKey, nameTitle, icon } = props;
  console.log(props);
  return (
    <div className="py-3">
      <NavLinkIconSkeleton
        navLinkClass="sidebar-community-menu-links group flex items-center rounded-lg p-2.5"
        to={navLinkTo}
        end
        navLinkKey={navLinkKey}
        navLinkClick={navLinkClick?.()}
        imgContainerStyle={{ height: "20px", width: "20px" }}
        icon={icon}
        nameTitleClassName="sidebar-community-text ml-2 text-primary-text"
        nameTitle={nameTitle}
        imgClassName="sidebar-community-icon w-full h-full"
      />
    </div>
  );
};
