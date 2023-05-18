import { Col, Row } from "antd";
import type { TabsProps } from "antd";
import { AddMoneyInsideUK } from "./add-money-inside-uk";
import { AddMoneyOutsideUK } from "./add-money-outside-uk";
import { useState } from "react";
import { TabsSwitch } from "../../../components/navigations/app-tabs-switch/app-tabs-switch";
import { GBPAccountQRTemplate } from "../../../templates/gbp-account-qr/gbp-account-qr";

export const AddMoneyUsingBankTransfer = () => {
  const [showComponent, setShowComponent] = useState(true);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Inside UK`,
      children: (
        <AddMoneyInsideUK showComponent={showComponent} setShowComponent={setShowComponent} />
      ),
    },
    {
      key: "2",
      label: `Outside UK`,
      children: (
        <AddMoneyOutsideUK showComponent={showComponent} setShowComponent={setShowComponent} />
      ),
    },
  ];

  return (
    <Row justify={"center"}>
      {showComponent && (
        <Col xs={24} md={18}>
          <TabsSwitch defaultActiveKey="1" items={items} />
        </Col>
      )}
      {!showComponent && (
        <Col xs={22}>
          <GBPAccountQRTemplate setShowComponent={setShowComponent} />
        </Col>
      )}
    </Row>
  );
};
