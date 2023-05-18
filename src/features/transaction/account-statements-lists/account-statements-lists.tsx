import { useEffect } from "react";
import {
  hideBanner,
  setGrid,
  setGridDefault,
  showBanner,
} from "../../../store/layout/layout-slice";
import { useAppDispatch } from "../../../store/store";
import {
  SLASHPATH,
  TRANSACTIONDETAILSPATH,
  TRANSACTIONPATH,
} from "../../../constants/routes-constant";
import { Col } from "antd";
import {
  accountStatementTable,
  accountStatementTableColums,
  items,
} from "./account-statements-data";
import { filterBalanceCard } from "../../dashboards/dashboard/dashboard-data";
import { AccountStatementListTemplate } from "../../../templates/account-statement-list/account-statement-list";
import { AccountStatementTableTemplate } from "../../../templates/account-statement/account-statement";
import { useAppLayout } from "../../../hooks/use-app-layout";
import useAccountStatementLists from "./use-account-statement-lists";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const AccountStatementsLists = (props: any) => {
  const dispatch = useAppDispatch();

  const { accountStatementHeader, navigate, colorPill } = useAccountStatementLists();

  const { pageName } = useAppLayout();

  useEffect(() => {
    pageName("Account Statement");
  }, []);

  useEffect(() => {
    dispatch(hideBanner());
    return () => {
      dispatch(showBanner());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(setGrid<any>({ offsetXs: 0, offsetMd: 0 }));
    return () => {
      dispatch(setGridDefault());
    };
  }, [dispatch]);

  const getTableData = (data: any) => {
    // console.log(data);
    navigate(`${TRANSACTIONPATH}${SLASHPATH}${TRANSACTIONDETAILSPATH}`);
  };
  return (
    <>
      <AccountStatementListTemplate
        getTableData={getTableData}
        iconSend={<ICONSCONSTANT.CheckCircleOutlined />}
        iconReceive={<ICONSCONSTANT.PoundOutlined />}
        filterBalanceCard={filterBalanceCard}
        accountStatementTable={accountStatementTable}
        accountStatementHeader={accountStatementHeader}
      />

      <Col sm={24}>
        <AccountStatementTableTemplate
          accountStatementTable={accountStatementTable}
          accountStatementHeader={accountStatementTableColums?.(navigate, colorPill)}
          items={items}
          scrollY={520}
          scrollX={850}
          searchHeader={true}
          paginationTable={true}
          showTitle={false}
          getTableData={() => getTableData}
        />
      </Col>
    </>
  );
};
