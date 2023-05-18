import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import { EMPTYPATH, SETTINGSPATH } from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

const IndexPage = lazy(() => import("../../pages/index-page/index"));
const AccountSettingsPage = lazy(() => import("../../pages/settings/account-settings"));

export const settingsRoutes = {
  id: 2,
  pathLink: SETTINGSPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

  componentName: <IndexPage />,
  child: [
    {
      id: 1,
      pathLink: EMPTYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

      componentName: <AccountSettingsPage />,
    },
  ],
};
