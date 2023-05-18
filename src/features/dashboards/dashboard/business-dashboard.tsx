import { useNavigate } from "react-router-dom";
import {
  accountStatementTable,
  buttonsFuntion,
  filterBalanceCard,
  items,
  recentSpendingData,
} from "./dashboard-data";
import BusinessDashboardTemplate from "../../../templates/business-dashboard/business-dashboard";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { useEffect } from "react";
import { AccountStatementTableTemplate } from "../../../templates/account-statement/account-statement";
import { accountStatementTableColums } from "../../transaction/account-statements-lists/account-statements-data";
import { Col, Row } from "antd";
import RecentSpendingTemplate from "../../../templates/recent-spending/recent-spending";

const BusinessDashboard = () => {
  const navigate = useNavigate();
  const { pageName } = useAppLayout();
  const buttonsData = buttonsFuntion(navigate);

  const colorPill = (e: any) => {
    // console.log(e);
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

  return (
    <div className="mb-10">
      <BusinessDashboardTemplate
        buttonsData={buttonsData}
        filterBalanceCard={filterBalanceCard}
        recentSpendingData={recentSpendingData}
        accountStatementTable={accountStatementTable}
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
          className=" shadow-md mt-3 rounded-lg bg-white"
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

export default BusinessDashboard;
