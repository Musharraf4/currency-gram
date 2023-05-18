import { useNavigate } from "react-router-dom";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { InceptionTableTemplate } from "../../../templates/inception-table/inception-table";
import {
  withdrawListColumns,
  withdrawListData,
  withdrawListTableButtonFunction,
} from "./withdrawal-lists-data";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { useEffect } from "react";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
export const WithdrawalLists = () => {
  const navigate = useNavigate();
  const withdrawListTableButton = withdrawListTableButtonFunction(navigate);
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Withdrawal");
    pageName("Single Payment");
  }, []);
  return (
    <AppCardWhite cardClassName="pt-4 pl-2 pb-2">
      <InceptionTableTemplate
        mainTitle={
          <>
            <AppTitle title={"Linked Account:"} className="text-[#4B5563]" Variant="span" />
            <AppTitle title={" Currency gram"} Variant="span" className="text-grey" />
          </>
        }
        tableHeadButtons={withdrawListTableButton}
        dataSource={withdrawListData}
        columns={withdrawListColumns?.()}
        filterHeading="Recent withdraws"
      />
    </AppCardWhite>
  );
};
