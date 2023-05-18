import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { TabsSwitch } from "../../../components/navigations/app-tabs-switch/app-tabs-switch";
import { itemsRequest } from "./requests-data";
import { useRequests } from "./use-requests";

export const Requests = () => {
  const { scenerioToggle } = useRequests();
  return (
    <>
      <AppCardWhite cardClassName="pt-2 pb-2 lg:pb-24 lg:pt-8 px-6">
        <TabsSwitch defaultActiveKey="1" items={itemsRequest} />
      </AppCardWhite>
    </>
  );
};
