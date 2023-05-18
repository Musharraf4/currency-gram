import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import {
  ADDCASEPATH,
  CASEDETAILSPATH,
  CASELISTSPATH,
  EMPTYPATH,
  FAQPATH,
  HELPPATH,
} from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

const IndexPage = lazy(() => import("../../pages/index-page/index"));
const Helppage = lazy(() => import("../../pages/help/help"));
const FAQspage = lazy(() => import("../../pages/faq/faqs"));
const Addcasepage = lazy(() => import("../../pages/cases/add-case"));
const Casedetailpage = lazy(() => import("../../pages/cases/case-detail"));
const Caseslistspage = lazy(() => import("../../pages/cases/cases-lists"));

export const helpRoutes = {
  id: 20,
  pathLink: HELPPATH,
  guard: PrivateRoutesGuard,
  allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
  componentName: <IndexPage />,
  child: [
    {
      id: 1,
      pathLink: EMPTYPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <Helppage />,
    },
    {
      id: 2,
      pathLink: FAQPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

      componentName: <FAQspage />,
    },
    {
      id: 3,
      pathLink: CASELISTSPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <Caseslistspage />,
    },
    {
      id: 4,
      pathLink: ADDCASEPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

      componentName: <Addcasepage />,
    },
    {
      id: 5,
      pathLink: CASEDETAILSPATH,
      guard: PrivateRoutesGuard,
      allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
      componentName: <Casedetailpage />,
    },
    // {
    //   id: 2,
    //   pathLink: FAQPATH,
    //   guard: PrivateRoutesGuard,
    //   allowedRoles: [USERROLES.ROLEPRIORITY1, USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

    //   componentName: <FAQspage />,
    // },
    // {
    //   id: 10,
    //   index: true,
    //   guard: PrivateRoutesGuard,
    //   allowedRoles: [USERROLES.BUSINESS,USERROLES.ADMIN, USERROLES.STUDENT, USERROLES.PERSONAL],
    //   componentName: <Navigate to={ADDBENEFICIARYPATH} />
    // },
  ],
};
