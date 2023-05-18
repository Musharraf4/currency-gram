import { lazy } from "react";
import { RECEIVEGIFTPATH, RECEIVELINKPATH } from "../../constants/sales-site-routes-constant";
import { SalesSiteRoutesGuard } from "../../guards/sales-site-routes-guard";

const PersonalPage = lazy(() => import("../../pages/sales-site/personal"));
const ReceiveGiftPage = lazy(() => import("../../pages/gift/receive-gift"));
const MoneyReceivedViaLinkPage = lazy(() => import("../../pages/money/money-received-via-link"));

export const specialRoutes = [
  {
    id: 6,
    pathLink: RECEIVEGIFTPATH,
    guard: SalesSiteRoutesGuard,
    componentName: <ReceiveGiftPage />,
  },
  {
    id: 7,
    pathLink: RECEIVELINKPATH,
    guard: SalesSiteRoutesGuard,
    componentName: <MoneyReceivedViaLinkPage />,
  },
  // {
  //   id: 10000,
  //   index: true,
  //   guard:SalesSiteRoutesGuard,
  //   componentName: <Navigate to={HOMEPATH} />,
  // },
];
