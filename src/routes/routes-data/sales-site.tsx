import { lazy } from "react";
import { EMPTYPATH, HOMEPATH, SLASHPATH } from "../../constants/routes-constant";
import {
  BLOGPATH,
  BUSINESSPATH,
  CONTACTUSPATH,
  PERSONALPATH,
} from "../../constants/sales-site-routes-constant";
import { SalesSiteRoutesGuard } from "../../guards/sales-site-routes-guard";

const IndexPage = lazy(() => import("../../pages/index-page/index"));
const BlogPage = lazy(() => import("../../pages/sales-site/blog"));
const BusinessPage = lazy(() => import("../../pages/sales-site/business"));
const ContactUsPage = lazy(() => import("../../pages/sales-site/contact-us"));
const HomePage = lazy(() => import("../../pages/sales-site/home"));
const PersonalPage = lazy(() => import("../../pages/sales-site/personal"));

export const salesSiteRoutes = [
  {
    id: 1,
    pathLink: HOMEPATH,
    guard: SalesSiteRoutesGuard,
    componentName: <HomePage />,
  },
  {
    id: 2,
    pathLink: BLOGPATH,
    guard: SalesSiteRoutesGuard,
    componentName: <IndexPage />,
    child: [
      {
        id: 1,
        pathLink: EMPTYPATH,
        guard: SalesSiteRoutesGuard,
        componentName: <BlogPage />,
      },
    ],
  },
  {
    id: 3,
    pathLink: BUSINESSPATH,
    guard: SalesSiteRoutesGuard,
    componentName: <BusinessPage />,
  },
  {
    id: 4,
    pathLink: BLOGPATH,
    guard: SalesSiteRoutesGuard,
    componentName: <BlogPage />,
  },
  {
    id: 5,
    pathLink: CONTACTUSPATH,
    guard: SalesSiteRoutesGuard,
    componentName: <ContactUsPage />,
  },
  {
    id: 5,
    pathLink: PERSONALPATH,
    guard: SalesSiteRoutesGuard,
    componentName: <PersonalPage />,
  },
  // {
  //   id: 6,
  //   pathLink: RECEIVEGIFTPATH,
  //   guard: SalesSiteRoutesGuard,
  //   componentName: <ReceiveGiftPage />,
  // },
  // {
  //   id: 7,
  //   pathLink: RECEIVELINKPATH,
  //   guard: SalesSiteRoutesGuard,
  //   componentName: <PersonalPage />,
  // },
  // {
  //   id: 10000,
  //   index: true,
  //   guard:SalesSiteRoutesGuard,
  //   componentName: <Navigate to={HOMEPATH} />,
  // },
];
