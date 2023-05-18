import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import {
  EMPTYPATH,
  MOREPATH,
  REQUESTSDETAILSPATH,
  REQUESTSPATH,
} from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";
import { paymentRoutes } from "./payment";
import { giftRoutes } from "./gift";

const IndexPage = lazy(() => import("../../pages/index-page/index"));

const MorePage = lazy(() => import("../../pages/more/more"));

const RequestsPage = lazy(() => import("../../pages/team/requests"));
const RequestsDetailsPage = lazy(() => import("../../pages/team/requests-details"));

export const moreRoutes = {
  id: 7,
  pathLink: MOREPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

  componentName: <IndexPage />,
  child: [
    {
      id: 1,
      pathLink: EMPTYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <MorePage />,
    },
    {
      id: 2,
      pathLink: REQUESTSPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <RequestsPage />,
    },
    {
      id: 3,
      pathLink: REQUESTSDETAILSPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <RequestsDetailsPage />,
    },
    ...paymentRoutes,
    ...giftRoutes,
    // {
    //   id: 10,
    //   index: true,
    //   guard: PrivateRoutesGuard,
    //   allowedRoles: [USERROLES.BUSINESS,USERROLES.ADMIN, USERROLES.STUDENT, USERROLES.PERSONAL],
    //   componentName: <Navigate to={ADDBENEFICIARYPATH} />
    // },
  ],
};
