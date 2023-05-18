import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import { HeaderCommunity } from "../header/header-community";
import { LeftSideBarCommunity } from "../sidebar/left-sidebar-community";
import { SideBarCommunity } from "../sidebar/sidebar-community";

export const CommunityLayout = () => {
  return (
    <div className="bg-hover-background flex flex-col min-h-screen">
      <div className="header sticky top-0 z-50">
        <HeaderCommunity />
      </div>
      <div className="body grow">
        <Row gutter={{ md: 5, lg: 4 }} className="h-full">
          <Col xs={24} md={6} lg={6} xl={5} xxl={4}>
            <div className="bg-white h-full">
              <SideBarCommunity />
            </div>
          </Col>
          <Col xs={24} md={12} lg={12} xl={13} xxl={14}>
            <div className="bg-white h-full">
              <Outlet />
            </div>
          </Col>
          <Col xs={24} md={6} lg={6}>
            <LeftSideBarCommunity />
          </Col>
        </Row>
      </div>
    </div>
  );
};
