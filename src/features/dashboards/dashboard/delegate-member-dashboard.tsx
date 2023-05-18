import { balanceCardFunction } from "./dashboard-data";
import { DelegateMemberTemplate } from "../../../templates/delegate-member-dashboard/delegate-member";
import { useEffect } from "react";
import { useAppDispatch } from "../../../store/store";
import { setGrid, setGridDefault } from "../../../store/layout/layout-slice";
import { useAppLayout } from "../../../hooks/use-app-layout";

const DelegateMemberDashboard = () => {
  const balanceCardData = balanceCardFunction();
  const dispatch = useAppDispatch();
  const { pageName } = useAppLayout();
  useEffect(() => {
    pageName("Home");
  }, []);

  useEffect(() => {
    dispatch(setGrid<any>({ offsetXs: 0, offsetMd: 0, offsetLg: 0, mainLg: 23 }));
    return () => {
      dispatch(setGridDefault());
    };
  }, [dispatch]);

  return (
    <div>
      <DelegateMemberTemplate
        balanceCardData={balanceCardData}
        title="UO522WEACE"
        heading="Paul Allen Banks"
        rowClassName="flex flex-col border"
        headingClassName="text-3xl font-bold"
        titleClassName="text-sm font-normal text-grey"
      />
    </div>
  );
};

export default DelegateMemberDashboard;
