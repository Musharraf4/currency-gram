import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import { DELEGATEMEMBERPATH } from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

const DelegateMembersPage = lazy(() => import("../../pages/users/delegate-members"));

export const delegateMembersRoutes = {
  id: 1,
  pathLink: DELEGATEMEMBERPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [
    USERROLES.ROLEPRIORITY2,
    USERROLES.ROLEPRIORITY3,
    USERROLES.ROLEPRIORITY4,
    USERROLES.ROLEPRIORITY5,
  ],
  componentName: <DelegateMembersPage />,
};
