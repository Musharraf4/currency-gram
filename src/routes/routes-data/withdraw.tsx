import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import {
  EMPTYPATH,
  WITHDRAWALADDAMOUNTPATH,
  WITHDRAWALAMOUNTPATH,
  WITHDRAWALREMOVEAMOUNTPATH,
} from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

const IndexPage = lazy(() => import("../../pages/index-page/index"));
const WithdrawalListsPage = lazy(() => import("../../pages/payment/withdrawal-lists"));
const AddBankAccountPage = lazy(() => import("../../pages/payment/add-bank-account"));
const WithdrawPage = lazy(() => import("../../pages/payment/withdraw"));

export const withdrawalRoutes = {
  id: 1,
  pathLink: WITHDRAWALAMOUNTPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [USERROLES.ROLEPRIORITY5],
  componentName: <IndexPage />,
  child: [
    {
      id: 1,
      pathLink: EMPTYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY5],
      componentName: <WithdrawalListsPage />,
    },
    {
      id: 2,
      pathLink: WITHDRAWALADDAMOUNTPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY5],
      componentName: <AddBankAccountPage />,
    },
    {
      id: 3,
      pathLink: WITHDRAWALREMOVEAMOUNTPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY5],
      componentName: <WithdrawPage />,
    },
  ],
};
