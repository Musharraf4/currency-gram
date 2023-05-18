import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import { PAYMENTDETAILPATH, PAYMENTPATH } from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

// const IndexPage = lazy(() => import("../../pages/index-page/index")); // TODO: may be next time
const PaymentListsPage = lazy(() => import("../../pages/payment/payment-list"));
const PaymentDetailPage = lazy(() => import("../../pages/payment/payment-details"));

// export const paymentRoutes = {
//   id: 7,
//   pathLink: PAYMENTPATH,
//   guard: PrivateRoutesGuard,
//   allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

//   componentName: <IndexPage />,
//   child: [
//     {
//       id: 1,
//       pathLink: EMPTYPATH,
//       guard: PrivateRoutesGuard,
//       allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

//       componentName: <PaymentListsPage />,
//     },
//     {
//       id: 1,
//       pathLink: PAYMENTDETAILPATH,
//       guard: PrivateRoutesGuard,
//       allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

//       componentName: <PaymentDetailPage />,
//     },
//     // {
//     //   id: 10,
//     //   index: true,
//     //   guard: PrivateRoutesGuard,
//     //   allowedRoles: [USERROLES.BUSINESS,USERROLES.ADMIN, USERROLES.STUDENT, USERROLES.PERSONAL],
//     //   componentName: <Navigate to={ADDBENEFICIARYPATH} />
//     // },
//   ],
// };
export const paymentRoutes = [
  {
    id: 1,
    pathLink: PAYMENTPATH,
    guard: PrivateRoutesGuard,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

    componentName: <PaymentListsPage />,
  },
  {
    id: 1,
    pathLink: PAYMENTDETAILPATH,
    guard: PrivateRoutesGuard,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],

    componentName: <PaymentDetailPage />,
  },
  // {
  //   id: 10,
  //   index: true,
  //   guard: PrivateRoutesGuard,
  //   allowedRoles: [USERROLES.BUSINESS,USERROLES.ADMIN, USERROLES.STUDENT, USERROLES.PERSONAL],
  //   componentName: <Navigate to={ADDBENEFICIARYPATH} />
  // },
];
