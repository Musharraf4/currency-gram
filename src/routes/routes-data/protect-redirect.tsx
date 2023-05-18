import { Navigate } from "react-router-dom";
import { USERROLES } from "../../constants/roles-constant";
import { DASHBOARDPATH, HOMEPATH, SLASHPATH } from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

export const protectRedirectPath2 = {
  id: 10000,
  index: true,
  guard: PrivateRoutesGuard,
  allowedRoles: [
    USERROLES.ROLEPRIORITY1,
    USERROLES.ROLEPRIORITY2,
    USERROLES.ROLEPRIORITY3,
    USERROLES.ROLEPRIORITY4,
  ],
  componentName: <Navigate to={SLASHPATH} />,
};

// in case of sales site
export const protectRedirectPath = {
  id: 10001,
  pathLink: HOMEPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [
    USERROLES.ROLEPRIORITY1,
    USERROLES.ROLEPRIORITY2,
    USERROLES.ROLEPRIORITY3,
    USERROLES.ROLEPRIORITY4,
  ],
  componentName: <Navigate to={DASHBOARDPATH} />,
};
