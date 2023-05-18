import { AuthLayout } from "../layout/auth-layout/auth-layout";
import { SalesSiteLayout } from "../layout/sales-site-layout/sales-site-layout";
import { MainLayout } from "../layout/main-layout/main-layout";

import { PrivateRoutesGuard } from "../guards/private-routes-guard";
import { PublicRoutesGuard } from "../guards/public-routes-guard";

import { USERROLES } from "../constants/roles-constant";

import { authRoutes } from "./routes-data/auth";
import { beneficiaryRoutes } from "./routes-data/beneficiary";
import { dashboardRoutes } from "./routes-data/dashboard";
import { transactionRoutes } from "./routes-data/transaction";
import { teamsRoutes } from "./routes-data/teams";
import { profileRoutes } from "./routes-data/profile";
import { moreRoutes } from "./routes-data/more";
import { addMoneyRoutes, moneyRoutes } from "./routes-data/money";
import { helpRoutes } from "./routes-data/help";
import { cardRoutes } from "./routes-data/card";
// import { protectRedirectPath, protectRedirectPath2 } from "./routes-data/protect-redirect"; //TODO:may be next time
// import { giftRoutes } from "./routes-data/gift"; //TODO:may be next time
// import { paymentRoutes } from "./routes-data/payment"; //TODO:may be next time
import { settingsRoutes } from "./routes-data/settings";
import { salesSiteRoutes } from "./routes-data/sales-site";
import { SalesSiteRoutesGuard } from "../guards/sales-site-routes-guard";
import { withdrawalRoutes } from "./routes-data/withdraw";
import { delegateMembersRoutes } from "./routes-data/delegate-members";
import { specialRoutes } from "./routes-data/special-route";
import { communityRoutes } from "./routes-data/community-routes";
import { CommunityLayout } from "../layout/community-layout/community-layout";
import { SpecialLayout } from "../layout/special-layout/special-layout";
import { BodyMainLayout } from "../layout/body/body-main-layout";

export const routesData = [
  dashboardRoutes,
  beneficiaryRoutes,
  cardRoutes,
  helpRoutes,
  moneyRoutes,
  moreRoutes,
  addMoneyRoutes,
  profileRoutes,
  teamsRoutes,
  transactionRoutes,
  // giftRoutes,
  // paymentRoutes,
  settingsRoutes,
  withdrawalRoutes,
  delegateMembersRoutes,
  // protectRedirectPath,
  // protectRedirectPath2,
];

export const routingData = [
  {
    id: 1,
    guard: PrivateRoutesGuard,
    allowedRoles: [
      USERROLES.ROLEPRIORITY1,
      USERROLES.ROLEPRIORITY2,
      USERROLES.ROLEPRIORITY3,
      USERROLES.ROLEPRIORITY4,
      USERROLES.ROLEPRIORITY5,
    ],
    layout: MainLayout,
    parentRoutes: routesData,
  },
  {
    id: 2,
    guard: PublicRoutesGuard,
    layout: AuthLayout,
    parentRoutes: authRoutes,
  },
  {
    id: 3,
    guard: SalesSiteRoutesGuard,
    layout: SalesSiteLayout,
    parentRoutes: salesSiteRoutes,
  },
  {
    id: 4,
    guard: SalesSiteRoutesGuard,
    layout: SpecialLayout,
    parentRoutes: specialRoutes,
  },
  {
    id: 5,
    guard: CommunityLayout,
    layout: AuthLayout,
    parentRoutes: communityRoutes,
  },
];
