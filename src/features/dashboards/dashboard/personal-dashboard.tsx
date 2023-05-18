import { Col, Row } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  hideBreadcrumb,
  showBreadcrumb,
} from "../../../store/breadcrumb/breadcrumb-slice";
import { hideBanner, showBanner } from "../../../store/layout/layout-slice";
import { useAppDispatch } from "../../../store/store";
import {
  items,
  buttonsFuntion,
  filterBalanceCard,
  recentSpendingData,
  accountStatementTable,
} from "./dashboard-data";
import PersonalDashboardTemplate from "../../../templates/personal-dashboard/personal-dashboard";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { AccountStatementTableTemplate } from "../../../templates/account-statement/account-statement";
import { accountStatementTableColums } from "../../transaction/account-statements-lists/account-statements-data";
import RecentSpendingTemplate from "../../../templates/recent-spending/recent-spending";

const PersonalDashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pageName } = useAppLayout();

  const buttonsData = buttonsFuntion(navigate);
  const otherBreadcrumbs = [
    {
      id: 1,
      linkName: "Dashboard",
      className: "global-breadcrumb-active",
    },
  ];

  const breadcrumbdata: any = { otherBreadcrumbs };

  const colorPill = (e: any) => {
    if (e === "Rent")
      return "text-white text-center rounded-2xl w-9 bg-[#EF476F]";
    if (e === "Business")
      return "text-white text-center rounded-2xl w-16 bg-[#117E4D]";
    if (e === "Groceries")
      return "text-white text-center rounded-2xl w-16 bg-[#DDAD3E]";
    if (e === "Sales")
      return "text-white text-center rounded-2xl w-10 bg-[#06D6A0]";
    if (e === "Cash Gift")
      return "text-white text-center rounded-2xl w-16 bg-[#6ACDFD]";
  };

  useEffect(() => {
    pageName("Home");
  }, []);

  useEffect(() => {
    dispatch(showBreadcrumb(breadcrumbdata));
    dispatch(hideBanner());
    return () => {
      dispatch(hideBreadcrumb());
      dispatch(showBanner());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="mb-10">
      <PersonalDashboardTemplate
        buttonsData={buttonsData}
        filterBalanceCard={filterBalanceCard}
        accountStatementTable={accountStatementTable}
        recentSpendingData={recentSpendingData}
      />

      <Row gutter={[{ md: 10, lg: 10 }, 0]}>
        <Col sm={24} md={24} lg={18}>
          <AccountStatementTableTemplate
            accountStatementTable={accountStatementTable}
            accountStatementHeader={accountStatementTableColums?.(
              navigate,
              colorPill
            )}
            items={items}
            scrollY={460}
            scrollX={850}
            getTableData={() => {}}
            paginationTable={false}
            showTitle={true}
            searchHeader={false}
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={6}
          className="shadow-md mt-3 rounded-lg bg-white"
        >
          <RecentSpendingTemplate
            filterBalanceCard={filterBalanceCard}
            recentSpendingData={recentSpendingData}
          />
        </Col>
      </Row>
    </div>
  );
};

export default PersonalDashboard;
