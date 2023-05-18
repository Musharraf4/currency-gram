import { Divider } from "antd";
import { AppDropdownIcon } from "../../components/dropdowns/app-icon-dropdown/app-icon-dropdown";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { RecentSpendingChart } from "../../features/dashboards/dashboard/dashboard-data";
import { HeadingAndTitle } from "../../skeleton/heading-and-title/heading-and-title";
import { ICONSCONSTANT } from "../../constants/icons-constant";

const RecentSpendingTemplate = (props: any) => {
  const { filterBalanceCard, recentSpendingData } = props;
  return (
    <>
      <div className="flex items-center justify-between flex-end   pt-5">
        <AppTitle className="text-base font-medium px-2" title="Recent Spending"></AppTitle>

        <AppDropdownIcon
          items={filterBalanceCard}
          title={<ICONSCONSTANT.MoreOutlined className="text-xl font-bold" />}
          className="border-none bg-white p-1"
        />
      </div>
      <Divider />
      <div className="position-relative">
        <RecentSpendingChart />
      </div>

      <div className="flex items-center flex-col">
        {recentSpendingData.map((item: any) => {
          return (
            <HeadingAndTitle
              rowClassName={item?.rowClassName}
              headingColClassName={item?.headingColClassName}
              title={item?.title}
              heading={item?.heading}
            />
          );
        })}
      </div>
    </>
  );
};

export default RecentSpendingTemplate;
