import { useEffect } from "react";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";
import { AccountHistoryDetailsTemplate } from "../../../templates/account-history-details/account-history-details";
import {
  accountDetailObject,
  historyDetailObject,
  TimeLineItems,
} from "./transaction-details-data";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const TransactionDetails = () => {
  const { bannerHeading } = useAppLayout();
  useEffect(() => {
    bannerHeading("Transaction Detail");
  }, []);
  return (
    <>
      <AppCardWhite>
        <UserDetailCard
          size={55}
          userDetailsClassName="px-5 py-12 items-center"
          userInfoClassName="flex-1 ml-2"
          icon={<ICONSCONSTANT.ArrowUpOutlined />}
          description="Monday, Dec 15, 2022 11:05AM"
          avatarStyle={{ backgroundColor: "#B51629" }}
          heading="Transferred to Allen Roger"
          headingClassName="text-base font-medium"
          descriptionClassName="text-xs font-normal text-grey mt-1"
          userPrice="£ 400.00"
          userPriceClassName="text-2xl font-bold text-secondary"
          showPrice={true}
        />
      </AppCardWhite>

      <AppCardWhite cardClassName="mt-5 py-8">
        <AccountHistoryDetailsTemplate
          accountTitle="Account Detail"
          historyTitle="History With Allen Roger"
          accountDetailObject={accountDetailObject}
          historyDetailObject={historyDetailObject}
          TimeLineItems={TimeLineItems}
          col1Xs={24}
          col1Md={11}
          col1Lg={11}
        />
      </AppCardWhite>
    </>
  );
};
