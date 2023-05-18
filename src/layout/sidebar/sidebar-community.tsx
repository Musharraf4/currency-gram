import { AppButton } from "../../components/buttons/app-button/app-button";
import { AppImageCard } from "../../components/cards/app-image-card/app-image-card";
import { AppTitleNavMenu } from "../../components/navigations/app-title-nav-menu/app-title-nav-menu";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { useSidebar } from "./use-sidebar";
import { SIDEBARIMAGES } from "./sidebar-images";
import { Divider } from "antd";

export const SideBarCommunity = () => {
  const { CommunitySideBarNavData, addQuestionButton } = useSidebar();
  console.log(CommunitySideBarNavData);
  return (
    <div className="p-4">
      <div>
        <div>
          <AppImageCard
            heading={"John Doe"}
            imgSrc={SIDEBARIMAGES.user}
            headingClassName="text-base text-secondary-text font-semibold"
            shape="square"
            size={50}
          />
        </div>
        <Divider></Divider>
        <AppButton buttons={addQuestionButton} btnWrapperClassName="mt-0 lg:mt-0" />
      </div>
      <div className="">
        {CommunitySideBarNavData?.length &&
          CommunitySideBarNavData?.map((item: any) => (
            <>
              <AppTitle title={item?.title} />
              {item?.data?.length &&
                item?.data?.map((item: any) => (
                  <AppTitleNavMenu
                    navLinkTo={item?.path}
                    navLinkKey={item?.id}
                    nameTitle={item?.nameTitle}
                    icon={item?.icon}
                  />
                ))}
            </>
          ))}
      </div>
    </div>
  );
};
