import {BalanceCard} from "../../components/cards/app-dashboard-balance-card/app-dashboard-balance-card";
import { ICONSCONSTANT } from "../../constants/icons-constant";
import DashboardUserDetails from "../dashboard-user-details/dashboard-user-details";

const PersonalDashboardTemplate = (props: any) => {
  const { buttonsData, filterBalanceCard } = props;

  return (
    <div>
      <DashboardUserDetails
        headingClassName="text-3xl font-bold"
        titleClassName="text-sm font-normal"
        heading="Welcome, Paul Allen"
        title="Today is a good day to start Banking!"
        rowClassName="flex flex-col"
        buttonsData={buttonsData}
        btnWrapperClassName="mt-0 lg:mt-0"
      />
      <BalanceCard
        shape="square"
        imageAppTitleClass="flex justify-around w-full items-center"
        title="£680.17 British Pounds"
        subTitle="Total Send"
        className="flex"
        titleClass="text-base font-semibold"
        subTitleClass="text-xs font-normal"
        titleRecevied="£680.17 British Pounds"
        appCardClass="flex"
        titleClassRecevied="text-base font-semibold"
        subTitleRecevied="Total Recevied"
        subTitleClassRecevied="text-xs font-noraml"
        classNameDropdown="absolute cursor-pointer mt-1"
        icon={<ICONSCONSTANT.MoreOutlined className="text-xl font-bold" />}
        iconSend={<ICONSCONSTANT.ArrowUpOutlined className="" />}
        classNameSend={{ backgroundColor: "#44D600" }}
        classNameReceive={{ backgroundColor: "#2752E7" }}
        iconReceive={<ICONSCONSTANT.ArrowDownOutlined />}
        filterBalanceCard={filterBalanceCard}
        styleAppTitle="ml-3"
        placement="bottomRight"
        mainAppTitleClass="text-sm font-semibold"
        subAppTitleClass="text-xs font-normal"
      />
    </div>
  );
};

export default PersonalDashboardTemplate;
