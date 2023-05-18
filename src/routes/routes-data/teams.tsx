import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import {
  ADDTEAMPATH,
  EMPTYPATH,
  TEAMMEMBERDETAILPATH,
  TEAMMEMBERREASSIGNROLEPATH,
  TEAMROLEDETAILSPATH,
  TEAMSMANAGEMENTPATH,
} from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

const IndexPage = lazy(() => import("../../pages/index-page/index"));
const AddTeamPage = lazy(() => import("../../pages/team/add-team"));
const ReassignRolePage = lazy(() => import("../../pages/team/reassign-role"));
const RoleDetailsPage = lazy(() => import("../../pages/team/role-details"));
const TeamMemberDetailPage = lazy(() => import("../../pages/team/team-member-detail"));
const TeamMembersListsPage = lazy(() => import("../../pages/team/team-members-lists"));

export const teamsRoutes = {
  id: 5,
  pathLink: TEAMSMANAGEMENTPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [USERROLES.ROLEPRIORITY2],
  componentName: <IndexPage />,
  child: [
    {
      id: 1,
      pathLink: EMPTYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2],
      componentName: <TeamMembersListsPage />,
    },
    {
      id: 1,
      pathLink: ADDTEAMPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2],
      componentName: <AddTeamPage />,
    },
    {
      id: 2,
      pathLink: TEAMROLEDETAILSPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2],
      componentName: <RoleDetailsPage />,
    },
    {
      id: 1,
      pathLink: TEAMMEMBERDETAILPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2],
      componentName: <TeamMemberDetailPage />,
    },
    {
      id: 1,
      pathLink: TEAMMEMBERREASSIGNROLEPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2],
      componentName: <ReassignRolePage />,
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
