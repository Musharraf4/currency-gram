import { AppTitle } from "../../../components/data-display/app-title/app-title";
import status from "../../../assets/icons/status.svg";
import { Avatar } from "antd";
import { AppImageCard } from "../../../components/cards/app-image-card/app-image-card";
import profile from "../../../assets/images/delegate-member/profile.png";
import {
  SLASHPATH,
  WITHDRAWALADDAMOUNTPATH,
  WITHDRAWALAMOUNTPATH,
  WITHDRAWALREMOVEAMOUNTPATH,
} from "../../../constants/routes-constant";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const withdrawListColumns = (navigate?: any, colorPill?: any) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "1",
    render: (text: any, record: any) => {
      console.log(record);
      return (
        <AppImageCard
          heading={record?.name}
          imgSrc={record?.userImage}
          headingClassName="text-xs text-primary"
        />
      );
    },
  },
  {
    title: "Bank",
    dataIndex: "bank",
    key: "2",
  },
  {
    title: "Account No",
    dataIndex: "accountNo",
    key: "3",
  },
  {
    title: "Sort Code",
    dataIndex: "sortCode",
    key: "4",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "5",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "4",
  },
];

export const withdrawListData = [
  {
    key: "1",
    name: "John Doe",
    userImage: profile,
    date: "Nov 30,2022",
    status: "Active",
    accountType: "Student",
    accountNo: 123123,
    sortCode: 123123,
    amount: "35,123 GBP",
    bank: "Currencygram",
  },
  {
    key: "2",
    name: "John Doe",
    email: "johndoe@gmail.com",
    userImage: profile,
    date: "Nov 30,2022",
    status: "inActive",
    accountType: "Business",
    accountNo: 123123,
    sortCode: 123123,
    amount: "35,123 GBP",
    bank: "Currencygram",
  },
  {
    key: "3",
    name: "John Doe",
    email: "johndoe@gmail.com",
    userImage: profile,
    date: "Nov 30,2022",
    status: "Active",
    accountType: "Personal",
    accountNo: 123123,
    sortCode: 123123,
    amount: "35,123 GBP",
    bank: "Currencygram",
  },
  {
    key: "3",
    name: "John Doe",
    email: "johndoe@gmail.com",
    userImage: profile,
    status: "Active",
    accountType: "Business",
    date: "Nov 30,2022",
    accountNo: 123123,
    sortCode: 123123,
    bank: "Currencygram",
    amount: "35,123 GBP",
  },
];

export const delegateMembersDropDownMenuItemFunction = () => [
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
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"All"} />,
      },
      {
        key: "2",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"Active"} />,
      },
      {
        key: "3",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"inActive"} />,
      },
    ],
  },
  {
    title: (
      <>
        <AppTitle title="By Type" Variant="span" />{" "}
        <Avatar src={status} size="small" className="p-1" />
      </>
    ),
    className: "ml-3 mb-1",
    items: [
      {
        key: "1",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"All"} />,
      },
      {
        key: "2",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"Personal"} />,
      },
      {
        key: "3",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"Business"} />,
      },
      {
        key: "4",
        label: <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={"Student"} />,
      },
    ],
  },
];

export const withdrawListTableButtonFunction = (navigate: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        navigate(`${WITHDRAWALAMOUNTPATH}${SLASHPATH}${WITHDRAWALADDAMOUNTPATH}`);
      },
      btnText: "Add Bank account",
      icon: <ICONSCONSTANT.PlusOutlined />,
      type: "primary",
      ghost: true,
      className: "ml-1 mb-1",
      btnVariant: "span",
    },
    {
      size: "large",
      btnLink: () => {
        navigate(`${WITHDRAWALAMOUNTPATH}${SLASHPATH}${WITHDRAWALREMOVEAMOUNTPATH}`);
      },
      btnText: "Withdraw",
      icon: <ICONSCONSTANT.PlusOutlined />,
      type: "primary",
      //   ghost: true,
      className: "ml-3 mb-1",
      btnVariant: "span",
    },
  ];
};

export const WITHDRAWALLISTSDATA = {
  withdrawListColumns,
  withdrawListData,
  delegateMembersDropDownMenuItemFunction,
  withdrawListTableButtonFunction,
};
