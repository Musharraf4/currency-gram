import { Divider } from "antd";
import { AppTitle } from "../app-title/app-title";

export const AppGiftPopover = () => {
  return (
    <div className="w-52">
      <div className="flex justify-between">
        <AppTitle title="Safe Box:" className="text-xs font-medium text-primary-text" />
        <AppTitle title={`$454`} className="text-xs text-primary-text" />
      </div>
      <div className="flex justify-between">
        <AppTitle title="Pending Payments:" className="text-xs font-medium text-primary-text" />
        <AppTitle title={`$454`} className="text-xs text-primary-text" />
      </div>
      <div className="flex justify-between">
        <AppTitle title="Available Balance:" className="text-xs font-medium text-primary-text" />
        <AppTitle title={`$454`} className="text-xs text-primary-text" />
      </div>

      <Divider className="my-1 bg-grey" />
      <div className="flex justify-between">
        <AppTitle title="Total Balance:" className="text-xs font-medium text-primary-text" />
        <AppTitle title={`$454`} className="text-xs text-primary-text" />
      </div>
    </div>
  );
};
