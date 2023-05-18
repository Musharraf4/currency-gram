import { AppTitle } from "../../components/data-display/app-title/app-title";

import arrowDownImage from "../../assets/images/notification/arrow_down.svg";
import whiteWithdrawImage from "../../assets/images/notification/white_withdraw.svg";
import warningCircleImage from "../../assets/images/notification/warning_circle.svg";
import logout from "../../assets/icons/logout-primary.svg";

import { Avatar } from "antd";
import { setIsProfileModalOpen } from "../../store/layout/layout-slice";
import { HEADERIMPORTS } from "./header-imports";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const headerMenuData: any[] = [
  {
    id: 1,
    title: "Home",
    path: HEADERIMPORTS.HOMEPATH,
  },
  {
    id: 2,
    title: "Personal",
    path: HEADERIMPORTS.PERSONALPATH,
  },
  {
    id: 3,
    title: "Business",
    path: HEADERIMPORTS.BUSINESSPATH,
  },
  {
    id: 4,
    title: "Blogs",
    path: HEADERIMPORTS.BLOGPATH,
  },
  {
    id: 5,
    title: "Contact Us",
    path: HEADERIMPORTS.CONTACTUSPATH,
  },
];

export const headerAuthButtonFunction = (navigate: any) => {
  return [
    {
      size: "large",
      btnLink: () => navigate(`${HEADERIMPORTS.SIGNINPATH}`),
      btnText: "Login",
      type: "primary",
      ghost: true,
      className: "ml-1 mb-1",
    },
    {
      size: "large",
      btnLink: () => navigate(`${HEADERIMPORTS.SIGNINDELEGATEPATH}`),
      btnText: "Delegate Member",
      type: "primary",
      className: "ml-3 mb-1",
    },
  ];
};

export const headerDropdownBusinessFunction = (navigate: any, signoutSubmitHandlerSuccess: any) => [
  {
    key: "1",
    label: (
      <div
        className="flex items-center justify-between"
        onClick={() => navigate(`${HEADERIMPORTS.PROFILEMANAGEMENTPATH}`)}
      >
        <div>
          <AppTitle title={"Paul Allen Banks"} className="text-sm text-tertiary-text" />
          <AppTitle title={"Membership number 001"} className="text-xs text-grey" />
        </div>
        <AppTitle title={"Edit"} className="text-primary" style={{ color: "#41a6f7" }} />
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div
        className="flex items-center"
        onClick={() =>
          navigate(
            `${HEADERIMPORTS.PROFILEMANAGEMENTPATH}${HEADERIMPORTS.SLASHPATH}${HEADERIMPORTS.BUSINESSPROFILEPATH}`
          )
        }
      >
        <ICONSCONSTANT.QuestionCircleOutlined className="text-primary text-sm" />{" "}
        <AppTitle title="Business Information" className="text-sm text-tertiary-text ml-3" />
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="flex items-center" onClick={() => navigate(`${HEADERIMPORTS.HELPPATH}`)}>
        <ICONSCONSTANT.QuestionCircleOutlined className="text-primary text-sm" />{" "}
        <AppTitle title="Help Squad" className="text-sm text-tertiary-text ml-3" />
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className="flex items-center">
        <ICONSCONSTANT.QuestionCircleOutlined className="text-primary text-sm" />{" "}
        <AppTitle
          title={`Switch to ${"personal"} account`}
          className="text-sm text-tertiary-text ml-3"
        />
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <div
        className="flex items-center"
        onClick={() => {
          signoutSubmitHandlerSuccess?.();
        }}
      >
        <Avatar src={logout} className="p-0.5" size={18} />
        <AppTitle title="Logout" className="text-sm text-tertiary-text ml-3" />
      </div>
    ),
  },
];

export const headerDropdownPersonalFunction = (navigate: any, signoutSubmitHandlerSuccess: any) => [
  {
    key: "1",
    label: (
      <div
        className="flex items-center justify-between"
        onClick={() => navigate(`${HEADERIMPORTS.PROFILEMANAGEMENTPATH}`)}
      >
        <div>
          <AppTitle title={"Paul Allen Banks"} className="text-sm text-tertiary-text" />
          <AppTitle title={"Membership number 001"} className="text-xs text-grey" />
        </div>
        <AppTitle title={"Edit"} className="text-primary" style={{ color: "#41a6f7" }} />
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="flex items-center" onClick={() => navigate(`${HEADERIMPORTS.HELPPATH}`)}>
        <ICONSCONSTANT.QuestionCircleOutlined className="text-primary text-sm" />{" "}
        <AppTitle title="Help Squad" className="text-sm text-tertiary-text ml-3" />
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className="flex items-center">
        <ICONSCONSTANT.QuestionCircleOutlined className="text-primary text-sm" />{" "}
        <AppTitle
          title={`Switch to ${"business"} account`}
          className="text-sm text-tertiary-text ml-3"
        />
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <div
        className="flex items-center"
        onClick={() => {
          signoutSubmitHandlerSuccess?.();
        }}
      >
        <Avatar src={logout} className="p-0.5" size={18} />
        <AppTitle title="Logout" className="text-sm text-tertiary-text ml-3" />
      </div>
    ),
  },
];

export const headerDropdownDelegateFunction = (navigate: any, signoutSubmitHandlerSuccess: any) => [
  {
    key: "1",
    label: (
      <div
        className="flex items-center justify-between"
        onClick={() => navigate(`${HEADERIMPORTS.PROFILEMANAGEMENTPATH}`)}
      >
        <div>
          <AppTitle title={"Paul Allen Banks"} className="text-sm text-tertiary-text" />
          <AppTitle title={"Membership number 001"} className="text-xs text-grey" />
        </div>
        <AppTitle title={"Edit"} className="text-primary" style={{ color: "#41a6f7" }} />
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <div
        className="flex items-center"
        onClick={() => {
          signoutSubmitHandlerSuccess?.();
        }}
      >
        <Avatar src={logout} className="p-0.5" size={18} />
        <AppTitle title="Logout" className="text-sm text-tertiary-text ml-3" />
      </div>
    ),
  },
];

export const headerCommunityButtonFunction = (navigate?: any) => {
  return [
    {
      size: "large",
      // btnLink: () => navigate(`${SIGNINPATH}`),
      btnText: "Create Account",
      type: "default",
      ghost: true,
      className: "ml-1 mb-1 ",
    },
  ];
};

export const headerDropdownCommunityFunction = (dispatch: any, userInfo: any) => [
  {
    key: "1",
    label: (
      <div className="flex items-center">
        <ICONSCONSTANT.QuestionCircleOutlined className="text-primary text-sm" />{" "}
        <AppTitle
          title="Profile"
          onClick={() => dispatch(setIsProfileModalOpen())}
          className="text-sm text-tertiary-text ml-3"
        />
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <div className="flex items-center">
        <ICONSCONSTANT.QuestionCircleOutlined className="text-primary text-sm" />{" "}
        <AppTitle title="Notification Settings" className="text-sm text-tertiary-text ml-3" />
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <div className="flex items-center">
        <Avatar src={logout} className="p-0.5" size={18} />
        <AppTitle title="Sign Out" className="text-sm text-tertiary-text ml-3" />
      </div>
    ),
  },
];

export const notificationHeaderData = [
  {
    id: 1,
    title: "You have received a gift from Usman Saeed.",
    date: "Dec 29 at 9:56 AM",
    src: arrowDownImage,
  },
  {
    id: 2,
    title: "Ahmed said thanks for the gift of £48. “Thank You So Much”.",
    date: "Dec 29 at 9:56 AM",
    src: whiteWithdrawImage,
  },
  {
    id: 3,
    title: "Thanks for creating a Currency Gram account! You have received a sign up reward.",
    date: "Dec 29 at 9:56 AM",
    src: warningCircleImage,
  },
  {
    id: 4,
    title: "Unclaimed amount has been refunded to your account.",
    date: "Dec 29 at 9:56 AM",
    src: warningCircleImage,
  },
  {
    id: 5,
    title: "Irfan claimed a gift via link.",
    date: "Dec 29 at 9:56 AM",
    src: warningCircleImage,
  },
  {
    id: 6,
    title: "Your reported issue (Case ID: 12345678) has been resolved.",
    date: "Dec 26 at 10:13 AM",
    src: warningCircleImage,
  },
];

export const HEADERDATA = {
  headerMenuData,
  headerAuthButtonFunction,
  headerCommunityButtonFunction,
  headerDropdownBusinessFunction,
  headerDropdownCommunityFunction,
  headerDropdownDelegateFunction,
  headerDropdownPersonalFunction,
};
