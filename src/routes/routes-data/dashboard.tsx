import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import { DASHBOARDPATH } from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

const Dashboards = lazy(() => import("../../pages/dashboard/dashboard"));

export const dashboardRoutes = {
  id: 1,
  pathLink: DASHBOARDPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [
    USERROLES.ROLEPRIORITY2,
    USERROLES.ROLEPRIORITY3,
    USERROLES.ROLEPRIORITY4,
    USERROLES.ROLEPRIORITY5,
  ],
  componentName: <Dashboards />,
};
