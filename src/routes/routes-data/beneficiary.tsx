import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import {
  ADDBENEFICIARYPATH,
  BENEFICIARYPATH,
  BULKADDBENEFICIARYPATH,
  BULKADDBENEFICIARYVIEWALLPATH,
  EDITBENEFICIARYPATH,
  EMPTYPATH,
} from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

const IndexPage = lazy(() => import("../../pages/index-page/index"));

const AddBeneficiaryPage = lazy(() => import("../../pages/beneficiary/add-beneficiary"));
const EditBeneficiaryPage = lazy(() => import("../../pages/beneficiary/edit-beneficiary"));
const BeneficiaryListsPage = lazy(() => import("../../pages/beneficiary/beneficiary-lists"));
const BulkAddBeneficiaryPage = lazy(() => import("../../pages/beneficiary/bulk-add-beneficiary"));
const BulkAddBeneficiaryListPage = lazy(
  () => import("../../pages/beneficiary/bulk-add-beneficiary-list")
);

export const beneficiaryRoutes = {
  id: 3,
  pathLink: BENEFICIARYPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

  componentName: <IndexPage />,
  child: [
    {
      id: 1,
      pathLink: EMPTYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

      componentName: <BeneficiaryListsPage />,
    },
    {
      id: 2,
      pathLink: ADDBENEFICIARYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

      componentName: <AddBeneficiaryPage />,
    },
    {
      id: 2,
      pathLink: EDITBENEFICIARYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

      componentName: <EditBeneficiaryPage />,
    },
    {
      id: 2,
      pathLink: BULKADDBENEFICIARYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

      componentName: <BulkAddBeneficiaryPage />,
    },
    {
      id: 2,
      pathLink: BULKADDBENEFICIARYVIEWALLPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

      componentName: <BulkAddBeneficiaryListPage />,
    },
    // {
    //   id: 10,
    //   index: true,
    //   guard: PrivateRoutesGuard,
    //   allowedRoles: [
    //     USERROLES.ROLEPRIORITY1,
    //     USERROLES.ROLEPRIORITY2,
    //     USERROLES.ROLEPRIORITY3,
    //     USERROLES.ROLEPRIORITY4,
    //   ],

    //   componentName: <Navigate to={BENEFICIARYLISTSPATH} />,
    // },
  ],
};
