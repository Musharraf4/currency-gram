// Components
import { HeaderMainLayout } from "../header/header-main-layout";

// SCSS
import { useMainLayout } from "./use-main-layout";
import { BodyMainLayout } from "../body/body-main-layout";
import { SidebarMainLayout } from "../sidebar/sidebar-main-layout";
import { Col, Row } from "antd";

// Component start here
export const MainLayout = () => {
  const {} = useMainLayout();

  return (
    <Row className="bg-[url('../src/assets/logo/bg-main.png')] bg-no-repeat bg-right-bottom">
      <Col xs={4} md={2} xl={1}>
        <div
          className={`bg-white rounded-lg w-full shadow-sm  text-black h-full flex flex-col items-center`}
        >
          <SidebarMainLayout />
        </div>
      </Col>
      <Col xs={20} md={22} xl={23}>
        <div className="flex flex-col min-h-screen">
          <div className="header sticky top-0 z-50">
            <HeaderMainLayout />
          </div>
          <div className="main-body grow margin-outlet-x">
            <BodyMainLayout />
          </div>
          <div className="footer">{/* <FooterMainLayout /> */}</div>
        </div>
      </Col>
    </Row>
  );
};
