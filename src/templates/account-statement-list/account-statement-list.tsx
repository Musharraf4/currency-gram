import { Col, Row } from "antd";
import {BalanceCard} from "../../components/cards/app-dashboard-balance-card/app-dashboard-balance-card";

export const AccountStatementListTemplate = (props: any) => {
  const {
    iconSend,
    iconReceive,
    filterBalanceCard,
  } = props;
  return (
    <div>
      <Row>
        <Col lg={24}>
          <BalanceCard
            shape="square"
            className="flex"
            subTitle="Available Balance"
            title="£680.17 British Pounds"
            imageAppTitleClass="flex justify-around w-full items-center"
            titleClass="text-base font-semibold"
            subTitleClass="text-xs font-normal"
            titleRecevied="£680.17 British Pounds"
            appCardClass="flex"
            titleClassRecevied="text-base font-semibold"
            subTitleRecevied="Total Balance"
            subTitleClassRecevied="text-xs font-noraml"
            classNameDropdown="absolute cursor-pointer"
            iconSend={iconSend}
            iconReceive={iconReceive}
            classNameSend={{ backgroundColor: "#44D600" }}
            classNameReceive={{ backgroundColor: "#2752E7" }}
            filterBalanceCard={filterBalanceCard}
            styleAppTitle="ml-3"
            placement="bottomRight"
            mainAppTitleClass="text-base font-semibold"
            subAppTitleClass="text-xs font-normal"
          />
        </Col>
      </Row>
    </div>
  );
};
