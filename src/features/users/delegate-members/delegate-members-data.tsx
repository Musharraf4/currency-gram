import { AppTitle } from "../../../components/data-display/app-title/app-title";
import status from "../../../assets/icons/status.svg";
import { Avatar } from "antd";
import { AppImageCard } from "../../../components/cards/app-image-card/app-image-card";
import profile from "../../../assets/images/delegate-member/profile.png";

export const delegateMembersListColumns = (navigate?: any, colorPill?: any) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "1",
    render: (text: any, record: any) => {
      console.log(record);
      return (
        <AppImageCard
          heading={record?.name}
          description={record?.email}
          imgSrc={record?.userImage}
          headingClassName="text-xs mb-1"
        />
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "2",
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
    title: "Account Type",
    dataIndex: "accountType",
    key: "3",
  },
  {
    title: "Deligate Amount",
    dataIndex: "amount",
    key: "4",
  },
];

export const delegateMembersListData = [
  {
    key: "1",
    name: "John Doe",
    email: "johndoe@gmail.com",
    userImage: profile,
    date: "Nov 30,2022",
    status: "Active",
    accountType: "Student",

    amount: "35,123 GBP",
  },
  {
    key: "2",
    name: "John Doe",
    email: "johndoe@gmail.com",
    userImage: profile,
    date: "Nov 30,2022",
    status: "inActive",
    accountType: "Business",
    amount: "35,123 GBP",
  },
  {
    key: "3",
    name: "John Doe",
    email: "johndoe@gmail.com",
    userImage: profile,
    date: "Nov 30,2022",
    status: "Active",
    accountType: "Personal",
    amount: "35,123 GBP",
  },
  {
    key: "3",
    name: "John Doe",
    email: "johndoe@gmail.com",
    userImage: profile,
    status: "Active",
    accountType: "Business",
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
    className: "mb-1 md:mb-0",
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
    className: "ml-3 mb-1 md:mb-0",
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
