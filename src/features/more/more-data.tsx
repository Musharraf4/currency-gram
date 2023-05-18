import approvalRequestImg from "../../assets/icons/approval-request.svg";
import giftImg from "../../assets/icons/gift.svg";
import managePayImg from "../../assets/icons/manage-payments.svg";
import {
  GIFTPATH,
  MOREPATH,
  PAYMENTPATH,
  REQUESTSPATH,
  SLASHPATH,
} from "../../constants/routes-constant";

export const moreCardsData = (navigate: any) => [
  {
    id: "1",
    heading: "Approval Requests",
    description: "Manage payment approvals for the different users in the business account",
    imgSrc: approvalRequestImg,
    linkPath: () => navigate(`${MOREPATH}${SLASHPATH}${REQUESTSPATH}`),
  },
  {
    id: "2",
    heading: "Gift",
    description: "Send personalized gifts to your friends and loved ones",
    imgSrc: giftImg,
    linkPath: () => navigate(`${GIFTPATH}`),
  },
  {
    id: "3",
    heading: "Manage Payments",
    description: "Manage all your payments in one place",
    imgSrc: managePayImg,
    linkPath: () => navigate(`${PAYMENTPATH}`),
  },
];

export const moreCards2Data = (navigate: any) => [
  {
    id: "1",
    heading: "Gift",
    description: "Send personalized gifts to your friends and loved ones",
    imgSrc: giftImg,
    linkPath: () => navigate(`${GIFTPATH}`),
  },
  {
    id: "3",
    heading: "Manage Payments",
    description: "Manage all your payments in one place",
    imgSrc: managePayImg,
    linkPath: () => navigate(`${PAYMENTPATH}`),
  },
];
