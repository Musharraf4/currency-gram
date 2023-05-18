import { AppBrand } from "../../components/data-display/app-brand/app-brand";

import { Col, Row } from "antd";
import { AppInput } from "../../components/form-elements/app-input/app-input";

import { AppButton } from "../../components/buttons/app-button/app-button";
import { notificationHeaderData } from "./header-data";
import { useHeader } from "./use-header";
import { Notification } from "../../features/notifications/notification/notification";
import { AppMenuDropdown } from "../../components/dropdowns/app-menu-dropdown/app-menu-dropdown";
import user from "../../assets/images/community/profile-community.png";
import { ICONSCONSTANT } from "../../constants/icons-constant";
import { LOGOCONSTANT } from "../../constants/logo-constant";

export const HeaderCommunity = () => {
  const { headerCommunityButton, isLogged, headerDropdownCommunity } = useHeader();
  return (
    <>
      <div className="bg-primary py-3">
        <Row className="items-center">
          <Col xs={24} lg={6}>
            <div className="">
              <AppBrand
                brandLogoContainerClassName="ml-4  max-w-[200px]"
                imageClassName="w-full"
                routelink="/community"
                brandSrc={LOGOCONSTANT.communityLogo}
              />
            </div>
          </Col>
          <Col xs={24} lg={10}>
            <div className="">
              <AppInput
                placeholder="Topic, Question"
                inputClassName="mb-0 bg-light-grey/[.15] border-0  dynamic-input-placeholder-white dynamic-form-input-light-grey  rounded-sm text-white"
                onChange={(e: any) => {
                  console.log(e?.target?.value);
                }}
                prefix={<ICONSCONSTANT.SearchOutlined type="search" className="text-white" />}
              />
            </div>
          </Col>
          <Col xs={24} lg={7} className="text-end">
            {!isLogged ? (
              <div className="flex items-center justify-end">
                <Notification notificationHeaderData={notificationHeaderData} />
                <AppMenuDropdown
                  userImage={user}
                  shape="square"
                  items={headerDropdownCommunity}
                  ThirdColIcon={<ICONSCONSTANT.DownOutlined className="ml-1" />}
                />
              </div>
            ) : (
              <AppButton buttons={headerCommunityButton} btnWrapperClassName="mt-0 lg:mt-0" />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};
