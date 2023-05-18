import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { TRANSECTIONDETAILS } from "./transection-details-data";
import { setGrid, setGridDefault } from "../../../store/layout/layout-slice";
import { AccountStatementTableTemplate } from "../../../templates/account-statement/account-statement";

const TransectionDetails = () => {
  const navigate = useNavigate();
  const accountStatementHeader = TRANSECTIONDETAILS.transectionDetailsTableHeader(navigate);

  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Transaction Details");
    pageName("Cards");
  }, [bannerHeading]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setGrid<any>({ offsetXs: 0, offsetMd: 0 }));
    return () => {
      dispatch(setGridDefault());
    };
  }, [dispatch]);

  return (
    <div className="mx-2">
      <AccountStatementTableTemplate
        accountStatementTable={TRANSECTIONDETAILS.transectionDetailsTable}
        accountStatementHeader={accountStatementHeader}
        scrollY={520}
        scrollX={850}
        searchHeader={true}
        paginationTable={true}
        showTitle={false}
      />
    </div>
  );
};

export default TransectionDetails;
