import { SIDEBARIMAGES } from "./sidebar-images";
import { USERROLES } from "../../constants/roles-constant";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { setIsQuestionModalOpen } from "../../store/layout/layout-slice";
import { SIDEBARIMPORTS } from "./sidebar-imports";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const sidebarData: any[] = [
  {
    id: 1,
    title: "Home",
    path: SIDEBARIMPORTS.DASHBOARDPATH,
    allowedRoles: [
      USERROLES.ROLEPRIORITY2,
      USERROLES.ROLEPRIORITY3,
      USERROLES.ROLEPRIORITY4,
      USERROLES.ROLEPRIORITY5,
    ],
    icon: SIDEBARIMAGES.homeIcon,
  },
  {
    id: 2,
    title: "Beneficiary",
    path: SIDEBARIMPORTS.BENEFICIARYPATH,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
    icon: SIDEBARIMAGES.beneficiaryIcon,
  },
  {
    id: 3,
    title: "Account Statement",
    path: SIDEBARIMPORTS.TRANSACTIONPATH,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
    icon: SIDEBARIMAGES.accountStatementIcon,
  },
  {
    id: 4,
    title: "Card",
    path: SIDEBARIMPORTS.CARDSPATH,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
    icon: SIDEBARIMAGES.cardIcon,
  },
  {
    id: 5,
    title: "Team Management",
    path: SIDEBARIMPORTS.TEAMSMANAGEMENTPATH,
    allowedRoles: [USERROLES.ROLEPRIORITY2],
    icon: SIDEBARIMAGES.teamIcon,
  },
  {
    id: 6,
    title: "Send Money",
    path: SIDEBARIMPORTS.SENDMONEYPATH,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
    icon: SIDEBARIMAGES.sendMoneyIcon,
  },
  {
    id: 7,
    title: "More",
    path: SIDEBARIMPORTS.MOREPATH,
    allowedRoles: [USERROLES.ROLEPRIORITY2, USERROLES.ROLEPRIORITY3, USERROLES.ROLEPRIORITY4],
    icon: SIDEBARIMAGES.moreIcon,
  },
  {
    id: 8,
    title: "Delegate members",
    path: SIDEBARIMPORTS.DELEGATEMEMBERPATH,
    allowedRoles: [USERROLES.ROLEPRIORITY5],
    icon: SIDEBARIMAGES.teamIcon,
  },
  {
    id: 9,
    title: "Withdrawal",
    path: SIDEBARIMPORTS.WITHDRAWALAMOUNTPATH,
    allowedRoles: [USERROLES.ROLEPRIORITY5],
    icon: SIDEBARIMAGES.withdrawIcon,
  },
];

export const settingsAllowedRoles = [
  USERROLES.ROLEPRIORITY2,
  USERROLES.ROLEPRIORITY3,
  USERROLES.ROLEPRIORITY4,
];

export const dynamicData = [
  {
    id: 1,
    image: SIDEBARIMAGES.tag,
    name: "General",
  },
  {
    id: 2,
    image: SIDEBARIMAGES.tag,
    name: "International Transactions",
  },
  {
    id: 3,
    image: SIDEBARIMAGES.tag,
    name: "CG to CG Transactions",
  },
  {
    id: 4,
    image: SIDEBARIMAGES.tag,
    name: "QR Payments",
  },
  {
    id: 5,
    image: SIDEBARIMAGES.tag,
    name: "Personalized Gifts",
  },
  {
    id: 6,
    image: SIDEBARIMAGES.tag,
    name: "Physical Card",
  },
  {
    id: 7,
    image: SIDEBARIMAGES.tag,
    name: "Virtual Card",
  },
];
export const CommunitySideBarNavDataFunction = () => {
  return [
    {
      title: "",
      data: [
        {
          icon: SIDEBARIMAGES.question,
          nameTitle: "My Questions",
          path: `${SIDEBARIMPORTS.COMMUNITYPATH}${SIDEBARIMPORTS.SLASHPATH}${SIDEBARIMPORTS.COMMUNITYMYQUESTIONPATH}`,
        },
        {
          icon: SIDEBARIMAGES.save,
          nameTitle: "Saved Items",
          path: `${SIDEBARIMPORTS.COMMUNITYPATH}${SIDEBARIMPORTS.SLASHPATH}${SIDEBARIMPORTS.COMMUNITYSAVEQUESTIONPATH}`,
        },
      ],
    },
    {
      title: "Topics",
      data: dynamicData.map((x: any) => ({
        id: x?.id,
        icon: x?.image,
        nameTitle: x?.name,
        path:
          x?.name === "General"
            ? `${SIDEBARIMPORTS.COMMUNITYPATH}`
            : `${SIDEBARIMPORTS.COMMUNITYPATH}${SIDEBARIMPORTS.SLASHPATH}${x?.name?.replaceAll(
                " ",
                "-"
              )}`,
      })),
    },
  ];
};

export const addQuestionButtonFunction = (dispatch?: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        dispatch(setIsQuestionModalOpen());
      },
      btnText: "Add Question",
      icon: <ICONSCONSTANT.PlusOutlined />,
      btnVariant: "span",
      type: "primary",
      // ghost: true,
      className: "ml-1 mb-1 w-full",
    },
  ];
};
export const contributorsList = [
  {
    image: SIDEBARIMAGES.user,
    name: "Saqib Hussain",
  },
  {
    image: SIDEBARIMAGES.user,
    name: "Saqib Hussain",
  },
  {
    image: SIDEBARIMAGES.user,
    name: "Saqib Hussain",
  },
  {
    image: SIDEBARIMAGES.user,
    name: "Saqib Hussain",
  },
];

export const contributorsFunction = (contributorsLists: any, onSetModalData: any) => [
  {
    mainTitle: (
      <div className="flex items-center">
        <AppTitle title="Contributors" Variant="span" />
        <AppTitle
          title={"20"}
          className="bg-primary/[.1] p-1 rounded ml-3 text-sm text-primary"
          Variant="span"
        />
      </div>
    ),
    linkTitle: (
      <div onClick={() => onSetModalData({ mainTitle: "Contributors", data: contributorsLists })}>
        <AppTitle title="View All" Variant="span" />
        <ICONSCONSTANT.RightOutlined className="text-xs text-primary font-medium ml-1" />
      </div>
    ),
    data: contributorsLists?.map((x: any) => ({
      id: x?.id,
      image: x?.image,
      name: x?.name,
    })),
  },
];

export const relatedTopicsFunction = (dynamicDatas: any, onSetModalData: any) => [
  {
    mainTitle: (
      <div className="flex items-center">
        <AppTitle title="Related Topics" Variant="span" />
        <AppTitle
          title={"20"}
          className="bg-primary/[.1] p-1 rounded ml-3 text-sm text-primary"
          Variant="span"
        />
      </div>
    ),
    linkTitle: (
      <div onClick={() => onSetModalData({ mainTitle: "Related Topics", data: dynamicDatas })}>
        <AppTitle title="View All" Variant="span" />
        <ICONSCONSTANT.RightOutlined className="text-xs text-primary font-medium ml-1" />
      </div>
    ),
    data: dynamicDatas?.map((x: any) => ({
      id: x?.id,
      image: x?.image,
      name: x?.name,
      headingClassName: "text-sm font-medium",
      path: `${SIDEBARIMPORTS.COMMUNITYPATH}${SIDEBARIMPORTS.SLASHPATH}${
        SIDEBARIMPORTS.COMMUNITYQUESTIONSPARAM
      }${SIDEBARIMPORTS.SLASHPATH}${x?.name?.replaceAll(" ", "-")}`,
    })),
  },
];

export const detailAbouttopicFunction = () => {
  return [
    {
      mainTitle: "Details",
      hasHr: true,
      data: [
        `
      In general topic you can discuss any thing related to currency gram. As we know general topics can be of any type,
       they can be related to local transactions,international transactions, 
        banking, physical card, virtual cards, personalize gifts etc.  `,
      ],
    },
  ];
};

export const questionsRelate = [
  {
    id: 1,
    question: "What lorem ipsum dolor sit amet?",
  },
  {
    id: 2,
    question: "How orbi faucibus nisi sed bibendum tristique?",
  },
  {
    id: 3,
    question: "Why Curabitur fermentum neque quis odio ?",
  },
  {
    id: 4,
    question: "Why Curabitur fermentum neque quis odio ?",
  },
  {
    id: 5,
    question: "How Sorbi fermentum?",
  },
];
export const relatedQuestionsFunction = (questions: any, navigate: any) => [
  {
    mainTitle: (
      <div className="flex items-center">
        <AppTitle title="Related Questions" Variant="span" />
      </div>
    ),
    data: questions?.map((x: any) => ({
      id: x?.id,
      name: x?.question,
      headingClassName: "text-sm font-medium text-primary cursor-pointer",
      imageDivClassName: "hidden",
      onHeadingClick: () => {
        navigate(
          `${SIDEBARIMPORTS.COMMUNITYPATH}${SIDEBARIMPORTS.SLASHPATH}${SIDEBARIMPORTS.COMMUNITYQUESTIONSPARAM}${SIDEBARIMPORTS.SLASHPATH}${x?.id}`
        );
      },
    })),
  },
];
