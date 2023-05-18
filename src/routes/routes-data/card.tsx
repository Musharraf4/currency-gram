import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import {
  ADDCARDPATH,
  ADDTOWALLETPATH,
  CARDSETTINGSPATH,
  CARDSPATH,
  CHANGECARDPINPATH,
  EMPTYPATH,
  INCREASELIMITVIEWPATH,
  LIMITVIEWPATH,
  REPORTCARDISSUEPATH,
  REPORTCARDISSUETYPEPATH,
  UPSERTLIMITPATH,
} from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

const IndexPage = lazy(() => import("../../pages/index-page/index"));

const Cardpage = lazy(() => import("../../pages/card/card"));
const Addcardpage = lazy(() => import("../../pages/card/add-card"));
const Addtowalletpage = lazy(() => import("../../pages/card/add-to-wallet"));
const Cardsettingspage = lazy(() => import("../../pages/card/card-settings"));
const Limitviewpage = lazy(() => import("../../pages/card/limit-view"));
const Upsertlimitpage = lazy(() => import("../../pages/card/upsert-limit"));
const IncreaseLimitPage = lazy(() => import("../../pages/card/increase-limit"));
const ReportCardPage = lazy(() => import("../../pages/card/report-card"));
const ReportCardIssuePage = lazy(() => import("../../pages/card/report-card-issue"));
const ChangeCardPinPage = lazy(() => import("../../pages/card/change-pin"));

export const cardRoutes = {
  id: 4,
  pathLink: CARDSPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
  componentName: <IndexPage />,
  child: [
    {
      id: 1,
      pathLink: EMPTYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <Cardpage />,
    },
    {
      id: 2,
      pathLink: ADDCARDPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <Addcardpage />,
    },
    {
      id: 3,
      pathLink: CARDSETTINGSPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <Cardsettingspage />,
    },
    {
      id: 4,
      pathLink: LIMITVIEWPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <Limitviewpage />,
    },
    {
      id: 5,
      pathLink: UPSERTLIMITPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <Upsertlimitpage />,
    },
    {
      id: 6,
      pathLink: ADDTOWALLETPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <Addtowalletpage />,
    },
    {
      id: 6,
      pathLink: INCREASELIMITVIEWPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <IncreaseLimitPage />,
    },
    {
      id: 7,
      pathLink: REPORTCARDISSUEPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <ReportCardPage />,
    },
    {
      id: 8,
      pathLink: REPORTCARDISSUETYPEPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <ReportCardIssuePage />,
    },
    {
      id: 9,
      pathLink: CHANGECARDPINPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <ChangeCardPinPage />,
    },

    // {
    //   id: 10,
    //   index: true,
    //   guard: PrivateRoutesGuard,
    //   allowedRoles: [USERROLES.BUSINESS,USERROLES.ADMIN, USERROLES.STUDENT, USERROLES.PERSONAL],
    //   componentName: <Navigate to={ADDBENEFICIARYPATH} />
    // },
  ],
};
