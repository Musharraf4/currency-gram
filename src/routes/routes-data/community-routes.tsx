import { lazy } from "react";
import { EMPTYPATH } from "../../constants/routes-constant";
import {
  COMMUNITYMYQUESTIONPATH,
  COMMUNITYPATH,
  COMMUNITYQUESTIONSDETAILPATH,
  COMMUNITYSAVEQUESTIONPATH,
  COMMUNITYTOPICSQUESTIONSPATH,
} from "../../constants/sales-site-routes-constant";
import { SalesSiteRoutesGuard } from "../../guards/sales-site-routes-guard";

const IndexPage = lazy(() => import("../../pages/index-page/index"));
const CommunityHomePage = lazy(() => import("../../pages/community/community-home"));
const MyQuestionsPage = lazy(() => import("../../pages/community/my-questions"));
const SaveQuestionsPage = lazy(() => import("../../pages/community/save-questions"));
const TopicQuestionsPage = lazy(() => import("../../pages/community/topic-questions"));
const QuestionDetailPage = lazy(() => import("../../pages/community/question-detail"));

export const communityRoutes = [
  {
    id: 2,
    pathLink: COMMUNITYPATH,
    guard: SalesSiteRoutesGuard,
    componentName: <IndexPage />,
    child: [
      {
        id: 1,
        pathLink: EMPTYPATH,
        guard: SalesSiteRoutesGuard,
        componentName: <CommunityHomePage />,
      },
      {
        id: 2,
        pathLink: COMMUNITYMYQUESTIONPATH,
        guard: SalesSiteRoutesGuard,
        componentName: <MyQuestionsPage />,
      },
      {
        id: 3,
        pathLink: COMMUNITYSAVEQUESTIONPATH,
        guard: SalesSiteRoutesGuard,
        componentName: <SaveQuestionsPage />,
      },
      {
        id: 4,
        pathLink: COMMUNITYTOPICSQUESTIONSPATH,
        guard: SalesSiteRoutesGuard,
        componentName: <TopicQuestionsPage />,
      },
      {
        id: 4,
        pathLink: COMMUNITYQUESTIONSDETAILPATH,
        guard: SalesSiteRoutesGuard,
        componentName: <QuestionDetailPage />,
      },
      // {
      //   id: 10,
      //   index: true,
      //   guard: SalesSiteRoutesGuard,
      //   componentName: <Navigate to={`${COMMUNITYPATH}${SLASHPATH}general`} />,
      // },
    ],
  },

  // {
  //   id: 10000,
  //   index: true,
  //   guard:SalesSiteRoutesGuard,
  //   componentName: <Navigate to={HOMEPATH} />,
  // },
];
