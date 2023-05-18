import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import {
  ADDMONEYPATH,
  EMPTYPATH,
  MONEYTRANSFERPAYMENTTYPEACCOUNTDETAILSPATH,
  MONEYTRANSFERPAYMENTTYPEADDPATH,
  MONEYTRANSFERPAYMENTTYPEPATH,
  MONEYTRANSFERPAYMENTTYPESCHEDULEPATH,
  MONEYTRANSFERPAYMENTTYPESUCCESSPATH,
  MONEYTRANSFERPAYMENTTYPETRANSFERPATH,
  MONEYTRANSFERPAYMENTTYPEVIEWALLPATH,
  MONEYTRANSFERTYPEPATH,
  SENDMONEYPATH,
} from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

const IndexPage = lazy(() => import("../../pages/index-page/index"));

const SendMoneyPage = lazy(() => import("../../pages/money/send-money"));
const AddMoneyPage = lazy(() => import("../../pages/money/add-money"));
const MoneyPaymentTypePage = lazy(() => import("../../pages/money/money-payment-type"));
const MoneyTransferAccountDetailsPage = lazy(
  () => import("../../pages/money/money-transfer-account-details")
);
const MoneyTransferAddDetailsPage = lazy(
  () => import("../../pages/money/money-transfer-add-details")
);
const MoneyTransferSchedulePage = lazy(() => import("../../pages/money/money-transfer-schedule"));
const MoneyTransferSuccessPage = lazy(() => import("../../pages/money/money-transfer-success"));
const MoneyTransferTransferPage = lazy(() => import("../../pages/money/money-transfer-transfer"));
const MoneyTransferTypePage = lazy(() => import("../../pages/money/money-transfer-type"));
const MoneyTransferViewAllPage = lazy(() => import("../../pages/money/money-transfer-view-all"));

export const moneyRoutes = {
  id: 6,
  pathLink: SENDMONEYPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
  componentName: <IndexPage />,
  child: [
    {
      id: 1,
      pathLink: EMPTYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <SendMoneyPage />,
    },

    {
      id: 4,
      pathLink: MONEYTRANSFERPAYMENTTYPEPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <MoneyPaymentTypePage />,
    },
    {
      id: 5,
      pathLink: MONEYTRANSFERPAYMENTTYPEACCOUNTDETAILSPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <MoneyTransferAccountDetailsPage />,
    },
    {
      id: 6,
      pathLink: MONEYTRANSFERPAYMENTTYPEADDPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <MoneyTransferAddDetailsPage />,
    },
    {
      id: 7,
      pathLink: MONEYTRANSFERPAYMENTTYPESCHEDULEPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <MoneyTransferSchedulePage />,
    },
    {
      id: 8,
      pathLink: MONEYTRANSFERPAYMENTTYPESUCCESSPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <MoneyTransferSuccessPage />,
    },
    {
      id: 7,
      pathLink: MONEYTRANSFERPAYMENTTYPETRANSFERPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <MoneyTransferTransferPage />,
    },
    {
      id: 8,
      pathLink: MONEYTRANSFERTYPEPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <MoneyTransferTypePage />,
    },
    {
      id: 9,
      pathLink: MONEYTRANSFERPAYMENTTYPEVIEWALLPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <MoneyTransferViewAllPage />,
    },
  ],
};

export const addMoneyRoutes = {
  id: 3,
  pathLink: ADDMONEYPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
  componentName: <AddMoneyPage />,
};
