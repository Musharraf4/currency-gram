import { Col, Row } from "antd";
import { DisconnectServiceTemplates } from "../../../templates/disconnect-service/disconnect-service";
import { connectedServicesDataFunction } from "./connected-services-data";

export const ConnectedServices = () => {
  const connectedServicesData = connectedServicesDataFunction();
  return (
    <Row>
      <Col xs={1} lg={3}></Col>
      <Col xs={22} lg={18}>
        <DisconnectServiceTemplates
          disconnectServiceData={connectedServicesData}
          mainHeading="Connected Services"
          mainTitle="Your currency gram account is connected to"
        />
      </Col>
      <Col xs={1} lg={3}></Col>
    </Row>
  );
};
