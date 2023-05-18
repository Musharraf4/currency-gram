import schedule from "../../../assets/icons/schedule.svg";
import pending from "../../../assets/icons/pending.svg";
import {
  MOREPATH,
  PAYMENTDETAILPARAM,
  PAYMENTPATH,
  SLASHPATH,
} from "../../../constants/routes-constant";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import status from "../../../assets/icons/status.svg";
import date from "../../../assets/icons/date.svg";
import { Avatar } from "antd";

export const PaymentListsCardFunction = (setActiveCard?: any, transferType?: any) => {
  return [
    {
      id: "1",
      heading: "Pending Payment",
      description: "View all pending payments",
      imgSrc: pending,
      linkPath: () => {
        setActiveCard("Pending Payment");
      },
    },
    {
      id: "2",
      heading: "Scheduled Payment",
      description: "View all scheduled payments",
      imgSrc: schedule,
      linkPath: () => {
        setActiveCard("Scheduled Payment");
      },
    },
  ];
};
export const paymentListData = [
  {
    key: "1",
    name: "John Doe",
    date: "Nov 30,2022",
    status: "Awaiting funds",
    amount: "35,123 GBP",
  },
  {
    key: "2",
    name: "John Doe",
    date: "Nov 30,2022",
    status: "Cancelled",
    amount: "35,123 GBP",
  },
  {
    key: "3",
    name: "John Doe",
    date: "Nov 30,2022",
    status: "Limit exceed",
    amount: "35,123 GBP",
  },
  {
    key: "3",
    name: "John Doe",
    date: "Nov 30,2022",
    status: "Awaiting date",
    amount: "35,123 GBP",
  },
];

export const paymentScheduleListData = [
  {
    key: "1",
    name: "Eobard Thanwne",
    date: "Nov 30,2022",
    status: "Awaiting funds",
    amount: "35,123 GBP",
  },
  {
    key: "2",
    name: "Barry Allen",
    date: "Nov 30,2022",
    status: "Cancelled",
    amount: "35,123 GBP",
  },
  {
    key: "3",
    name: "Hunter Zolomon",
    date: "Nov 30,2022",
    status: "Limit exceed",
    amount: "35,123 GBP",
  },
  {
    key: "3",
    name: "Jay Garrick",
    date: "Nov 30,2022",
    status: "Awaiting date",
    amount: "35,123 GBP",
  },
];
export const paymentListColumns = (navigate: any, colorPill: any) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "1",
    render: (text: any) => {
      console.log(text);
      return (
        <AppTitle
          onClick={(e: any) =>
            navigate(
              `${MOREPATH}${SLASHPATH}${PAYMENTPATH}${SLASHPATH}${PAYMENTDETAILPARAM}${SLASHPATH}gr`
            )
          }
          className="cursor-pointer font-semibold"
          title={text}
        />
      );
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "2",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "3",
    render: (text: any) => {
      console.log(text);
      return (
        <span
          className={`font-semibold  text-xs px-3 py-1 center-text rounded-3xl ${colorPill?.(
            text
          )}`}
          style={{ display: "inline-block" }}
        >
          {" "}
          {text}
        </span>
      );
    },
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "4",
  },
];

export const dropDownMenuItemFunction = () => [
  {
    title: (
      <>
        <AppTitle title="By Status" Variant="span" />{" "}
        <Avatar src={status} size="small" className="p-1" />
      </>
    ),
    className: "ml-3 mb-1",
    items: [
      {
        key: "1",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"Awaiting funds"} />,
      },
      {
        key: "2",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"Cancelled"} />,
      },
      {
        key: "3",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"limit exceeds"} />,
      },
    ],
  },
  {
    title: (
      <>
        <AppTitle title="By Date" Variant="span" />{" "}
        <Avatar src={date} size="small" className="p-1" />
      </>
    ),
    className: "ml-3 mb-1",
    items: [
      {
        key: "1",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"Today"} />,
      },
      {
        key: "2",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"Yesterday"} />,
      },
      {
        key: "3",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"This week"} />,
      },
    ],
  },
];

export const PAYMENTLISTSDATA = {
  PaymentListsCardFunction,
  paymentListData,
  paymentScheduleListData,
  paymentListColumns,
  dropDownMenuItemFunction,
};
