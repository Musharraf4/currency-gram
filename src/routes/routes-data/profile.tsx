import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import {
  BUSINESSPROFILEPATH,
  EDITPROFILEPATH,
  EMPTYPATH,
  PROFILEMANAGEMENTPATH,
} from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

const IndexPage = lazy(() => import("../../pages/index-page/index"));
const PersonalDetailsViewPage = lazy(() => import("../../pages/auth-user/personal-profile"));
const BusinessDetailViewPage = lazy(() => import("../../pages/auth-user/business-detail-view"));
const UpsertPersonalDetailsPage = lazy(
  () => import("../../pages/auth-user/upsert-personal-profile")
);

export const profileRoutes = {
  id: 2,
  pathLink: PROFILEMANAGEMENTPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [
    USERROLES.ROLEPRIORITY2,
    USERROLES.ROLEPRIORITY3,
    USERROLES.ROLEPRIORITY4,
    USERROLES.ROLEPRIORITY5,
  ],

  componentName: <IndexPage />,
  child: [
    {
      id: 1,
      pathLink: EMPTYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [
        USERROLES.ROLEPRIORITY2,
        USERROLES.ROLEPRIORITY3,
        USERROLES.ROLEPRIORITY4,
        USERROLES.ROLEPRIORITY5,
      ],

      componentName: <PersonalDetailsViewPage />,
    },
    {
      id: 2,
      pathLink: EDITPROFILEPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [
        USERROLES.ROLEPRIORITY2,
        USERROLES.ROLEPRIORITY3,
        USERROLES.ROLEPRIORITY4,
        USERROLES.ROLEPRIORITY5,
      ],

      componentName: <UpsertPersonalDetailsPage />,
    },
    {
      id: 3,
      pathLink: BUSINESSPROFILEPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2],

      componentName: <BusinessDetailViewPage />,
    },
    // {
    //   id: 4,
    //   pathLink: CHANGEEMAILPATH,
    //   guard: PrivateRoutesGuard,
    //   allowedRoles: [
    //     USERROLES.ROLEPRIORITY1,
    //     USERROLES.ROLEPRIORITY2,
    //     USERROLES.ROLEPRIORITY3,
    //     USERROLES.ROLEPRIORITY4,
    //   ],

    //   componentName: <Changeemail />,
    // },
    // {
    //   id: 4,
    //   pathLink: SENTEMAILPATH,
    //   guard: PrivateRoutesGuard,
    //   allowedRoles: [
    //     USERROLES.ROLEPRIORITY1,
    //     USERROLES.ROLEPRIORITY2,
    //     USERROLES.ROLEPRIORITY3,
    //     USERROLES.ROLEPRIORITY4,
    //   ],

    //   componentName: <Sentemail />,
    // },
    // {
    //   id: 10,
    //   index: true,
    //   allowedRoles: [
    //     USERROLES.ROLEPRIORITY1,
    //     USERROLES.ROLEPRIORITY2,
    //     USERROLES.ROLEPRIORITY3,
    //     USERROLES.ROLEPRIORITY4,
    //   ],

    //   componentName: <Navigate to={PROFILEPATH} />,
    // },
  ],
};
