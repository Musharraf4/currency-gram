import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import {
  EMPTYPATH,
  TRANSACTIONDETAILSPATH,
  TRANSACTIONPATH,
} from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

const IndexPage = lazy(() => import("../../pages/index-page/index"));

const Accountstatementlistspage = lazy(
  () => import("../../pages/transaction/account-statement-lists")
);
const TransactionDetailPage = lazy(() => import("../../pages/transaction/transaction-detail"));

export const transactionRoutes = {
  id: 4,
  pathLink: TRANSACTIONPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
  componentName: <IndexPage />,
  child: [
    {
      id: 1,
      pathLink: EMPTYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <Accountstatementlistspage />,
    },
    {
      id: 2,
      pathLink: TRANSACTIONDETAILSPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <TransactionDetailPage />,
    },
    // {
    //   id: 10,
    //   index: true,
    //   guard: PrivateRoutesGuard,
    //   allowedRoles: [
    //     USERROLES.ROLEPRIORITY1,
    //     USERROLES.ROLEPRIORITY2,
    //     USERROLES.ROLEPRIORITY3,
    //     USERROLES.ROLEPRIORITY4,
    //   ],
    //   componentName: <Navigate to={ACCOUNTSTATEMENTLISTSPATH} />,
    // },
  ],
};
