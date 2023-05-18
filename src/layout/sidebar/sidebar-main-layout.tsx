import { settingsAllowedRoles, sidebarData } from "./sidebar-data";
import { ISIDEBARDATA } from "./sidebar-interface";
import { SIDEBARIMAGES } from "./sidebar-images";
import { useSidebar } from "./use-sidebar";
import { AppBrand } from "../../components/data-display/app-brand/app-brand";
import { AppTooltipBaseNavMenu } from "../../components/navigations/app-tooltip-base-nav-menu/app-tooltip-base-nav-menu";

export const SidebarMainLayout = () => {
  const { auth }: any = useSidebar();

  return (
    <>
      <div
        // className={`bg-white rounded-lg w-full shadow-sm  text-black h-full flex flex-col items-center`}
        className="h-screen flex flex-col fixed"
      >
        <div style={{ height: "30px", width: "30px" }} className="margin-auto-x py-5">
          <AppBrand brandLogoContainerClassName="h-full w-full" routelink="/dashboard" />
        </div>
        <div className="grow mt-20">
          {sidebarData.length &&
            sidebarData.map((item: ISIDEBARDATA) => {
              return (
                !!auth?.role?.find((role: any) => item?.allowedRoles?.includes(role)) && (
                  <AppTooltipBaseNavMenu
                    navLinkTo={item?.path}
                    navLinkKey={item?.id}
                    title={item?.title}
                    icon={item?.icon}
                    end={false}
                  />
                )
              );
            })}
        </div>
        <div>
          {!!auth?.role?.find((role: any) => settingsAllowedRoles?.includes(role)) && (
            <AppTooltipBaseNavMenu
              navLinkTo={"/settings"}
              title={"Settings"}
              icon={SIDEBARIMAGES?.settingsIcon}
            />
          )}
        </div>
      </div>
    </>
  );
};
