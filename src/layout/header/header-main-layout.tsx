import { Col, Row } from "antd";

import { IMAGEBASEURL } from "../../constants/api-endpoints-constant";
import "./header.scss";
import { Notification } from "../../features/notifications/notification/notification";
import { AppAlert } from "../../components/feedback/app-alert/app-alert";
import { AppMenuDropdown } from "../../components/dropdowns/app-menu-dropdown/app-menu-dropdown";
import { useHeader } from "./use-header";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const HeaderMainLayout = () => {
  const { headerDropdown, auth, layout, personalDetails, alert } = useHeader();

  return (
    <>
      <Row className="items-center height-100 bg-white  p-4 shadow-sm">
        <Col xs={24} md={8} lg={4} className="text-center sm:text-start mb-2 sm:mb-0">
          <AppTitle
            title={layout?.pageName}
            className="text-secondary-text font-semibold text-xl"
          />
        </Col>
        <Col xs={24} md={8} lg={14}>
          {alert.showAlert && <AppAlert />}
        </Col>
        <Col xs={24} md={8} lg={6} className="flex justify-center sm:justify-end">
          <div className="flex items-center  mt-1 md:mt-0">
            <Notification />
            <AppMenuDropdown
              userImage={`${IMAGEBASEURL}${personalDetails?.profileImage}`}
              heading={personalDetails?.name || "John Doe"}
              description={`${auth?.role?.[0]?.replace("_", " ")?.toLowerCase()} Account`}
              items={headerDropdown?.(auth?.role)}
              ThirdColIcon={<ICONSCONSTANT.DownOutlined className="ml-2" />}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};
