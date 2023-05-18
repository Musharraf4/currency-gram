import { Col, Row } from "antd";
import { EnableNotificationsTemplate } from "../../../templates/enable-notifications/enable-notifications";
import { notificationDataFunction } from "./notifications-settings-data";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const NotificationsSettings = () => {
  const notificationData = notificationDataFunction();
  return (
    <Row>
      <Col xs={1} lg={3}></Col>
      <Col xs={22} lg={18}>
        <EnableNotificationsTemplate
          notificationData={notificationData}
          mainNotificationName="Allow Notification"
          mainBtnIcon={<ICONSCONSTANT.BellOutlined />}
        />
      </Col>
      <Col xs={1} lg={3}></Col>
    </Row>
  );
};
