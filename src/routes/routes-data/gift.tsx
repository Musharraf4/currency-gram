import { lazy } from "react";
import { USERROLES } from "../../constants/roles-constant";
import {
  ADDGIFTCARDPATH,
  ADDGIFTDETAILPATH,
  GIFTDETAILSPATH,
  GIFTPATH,
  SELECTGIFTRECIPIENTPATH,
  SHAREDGIFTCARDLINK,
} from "../../constants/routes-constant";
import { PrivateRoutesGuard } from "../../guards/private-routes-guard";

// const IndexPage = lazy(() => import("../../pages/index-page/index")); //TODO: may be next tiem

const GiftListsPage = lazy(() => import("../../pages/gift/gift-lists"));
const AddGiftPage = lazy(() => import("../../pages/gift/add-gift"));
const AddGiftDetailPage = lazy(() => import("../../pages/gift/add-gift-detail"));
const SelectGiftRecipientPage = lazy(() => import("../../pages/gift/select-gift-recipient"));
const ShareGiftLinkPage = lazy(() => import("../../pages/gift/share-gift-link"));
const ViewGiftDetailPage = lazy(() => import("../../pages/gift/view-gift-detail"));

// export const giftRoutes = {
//   id: 4,
//   pathLink: GIFTPATH,
//   guard: PrivateRoutesGuard,
//   allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
//   componentName: <IndexPage />,
//   child: [
//     {
//       id: 1,
//       pathLink: EMPTYPATH,
//       guard: PrivateRoutesGuard,
//       allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
//       componentName: <GiftListsPage />,
//     },
//     {
//       id: 2,
//       pathLink: ADDGIFTCARDPATH,
//       guard: PrivateRoutesGuard,
//       allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
//       componentName: <AddGiftPage />,
//     },
//     {
//       id: 3,
//       pathLink: ADDGIFTDETAILPATH,
//       guard: PrivateRoutesGuard,
//       allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
//       componentName: <AddGiftDetailPage />,
//     },
//     {
//       id: 4,
//       pathLink: SELECTGIFTRECIPIENTPATH,
//       guard: PrivateRoutesGuard,
//       allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
//       componentName: <SelectGiftRecipientPage />,
//     },
//     {
//       id: 5,
//       pathLink: SHAREDGIFTCARDLINK,
//       guard: PrivateRoutesGuard,
//       allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
//       componentName: <ShareGiftLinkPage />,
//     },
//     {
//       id: 6,
//       pathLink: GIFTDETAILSPATH,
//       guard: PrivateRoutesGuard,
//       allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
//       componentName: <ViewGiftDetailPage />,
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

export const giftRoutes = [
  {
    id: 1,
    pathLink: GIFTPATH,
    guard: PrivateRoutesGuard,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
    componentName: <GiftListsPage />,
  },
  {
    id: 2,
    pathLink: ADDGIFTCARDPATH,
    guard: PrivateRoutesGuard,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
    componentName: <AddGiftPage />,
  },
  {
    id: 3,
    pathLink: ADDGIFTDETAILPATH,
    guard: PrivateRoutesGuard,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
    componentName: <AddGiftDetailPage />,
  },
  {
    id: 4,
    pathLink: SELECTGIFTRECIPIENTPATH,
    guard: PrivateRoutesGuard,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
    componentName: <SelectGiftRecipientPage />,
  },
  {
    id: 5,
    pathLink: SHAREDGIFTCARDLINK,
    guard: PrivateRoutesGuard,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
    componentName: <ShareGiftLinkPage />,
  },
  {
    id: 6,
    pathLink: GIFTDETAILSPATH,
    guard: PrivateRoutesGuard,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
    componentName: <ViewGiftDetailPage />,
  },

  // {
  //   id: 10,
  //   index: true,
  //   guard: PrivateRoutesGuard,
  //   allowedRoles: [USERROLES.BUSINESS,USERROLES.ADMIN, USERROLES.STUDENT, USERROLES.PERSONAL],
  //   componentName: <Navigate to={ADDBENEFICIARYPATH} />
  // },
];
