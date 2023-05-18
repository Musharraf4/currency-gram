import { MenuProps } from "antd";
import { Pie } from "@ant-design/plots";
import { ADDMONEYPATH, SENDMONEYPATH } from "../../../constants/routes-constant";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import ActiveMembers from "../../../assets/icons/active-members.svg";
import PendingMoneyDot from "../../../assets/icons/pending-money.svg";
import RecivedMoneyDot from "../../../assets/icons/recived-money.svg";
import InActiveMembers from "../../../assets/icons/inactive-members.svg";
import uparrow from "../../../assets/images/dashboard/table-uparrow.svg";
import downarrow from "../../../assets/images/dashboard/table-downarrow.svg";
import SendMoneyDot from "../../../assets/icons/sent-money.svg";
import TotalMembers from "../../../assets/icons/total-members.svg";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const RecentSpendingChart = () => {
  const data = [
    { type: "Send", value: 15 },
    { type: "Pending", value: 10 },
    { type: "Recived", value: 5 },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "£327",
      },
    },
  };
  return <Pie {...config} />;
};

export const accountStatementTable: any = [
  {
    key: "1",
    icon: <img src={uparrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Allen Roger",
    transaction_id: "01234567",
    account_no: 123123,
    category: "Rent",
    amount: "400.00 £",
    closing_balance: "34235345",
  },
  {
    key: "2",
    icon: <img src={uparrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Fallen Doge...",
    transaction_id: "31510604",
    account_no: 123123,
    category: "Business",
    amount: "800.00 £",
    closing_balance: "34235345",
  },
  {
    key: "3",
    icon: <img src={uparrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Paid at Aetna Pest",
    transaction_id: "GB29 NWBK 6016 1331 9268 19",
    account_no: 123123,
    category: "Groceries",
    amount: "400.00",
    closing_balance: "34235345",
  },
  {
    key: "4",
    icon: <img src={downarrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Allen Roger",
    transaction_id: "12345",
    account_no: 123123,
    category: "Sales",
    amount: "400.00",
    closing_balance: "34235345",
  },
  {
    key: "5",
    icon: <img src={uparrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Allen Roger",
    transaction_id: "12345",
    account_no: 123123,
    category: "Cash Gift",
    amount: "400.00",
    closing_balance: "34235345",
  },
  {
    key: "6",
    icon: <img src={downarrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Allen Roger",
    transaction_id: "12345",
    account_no: 123123,
    category: "Cash Gift",
    amount: "400.00",
    closing_balance: "34235345",
  },
  {
    key: "7",
    icon: <img src={downarrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Allen Roger",
    transaction_id: "12345",
    account_no: 123123,
    category: "Cash Gift",
    amount: "400.00",
    closing_balance: "34235345",
  },
  {
    key: "8",
    icon: <img src={uparrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Allen Roger",
    transaction_id: "12345",
    account_no: 123123,
    category: "Cash Gift",
    amount: "400.00",
    closing_balance: "34235345",
  },
];

export const accountStatementTableHeader = (navigate: any) => [
  {
    dataIndex: "icon",
    key: "11",
    width: "5%",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "1",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "2",
    render: (name: string) => (
      <AppTitle
        onClick={() => {
          // navigate(`${TRANSACTIONPATH}${SLASHPATH}${TRANSACTIONDETAILSPATH}`);
        }}
        title={name}
        className="cursor-pointer"
        Variant="span"
      />
    ),
  },
  {
    title: "Transaction ID",
    dataIndex: "transaction_id",
    key: "3",
  },
  {
    title: "Account No / IBAN",
    dataIndex: "account_no",
    key: "4",
    return: (name: any) => {
      <AppTitle
        onClick={() => {
          // console.log(name);
        }}
      />;
    },
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "5",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "6",
  },
  {
    title: "Closing Balance",
    dataIndex: "closing_balance",
    key: "7",
  },
];

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <AppTitle
        Variant="span"
        title="Bills"
        className={`px-9 py-1 text-white text-center rounded-2xl bg-[#EF476F]`}
      />
    ),
  },
  {
    key: "2",
    label: (
      <AppTitle
        Variant="span"
        title="Bonus"
        className="px-9 py-1 text-white text-center rounded-2xl bg-[#117E4D]"
      />
    ),
  },
  {
    key: "3",
    label: (
      <AppTitle
        Variant="span"
        title="Business"
        className="px-9 py-1 text-white text-center rounded-2xl bg-[#DDAD3E]"
      />
    ),
  },
  {
    key: "4",
    label: (
      <AppTitle
        Variant="span"
        title="Eating"
        className="px-9 py-1 text-white text-center rounded-2xl bg-[#06D6A0] "
      />
    ),
  },
  {
    key: "5",
    label: (
      <AppTitle
        Variant="span"
        title="Entertainment"
        className="px-9 py-1 text-white  text-center rounded-2xl bg-[#900C3F]"
      />
    ),
  },
  {
    key: "6",
    label: (
      <AppTitle
        Variant="span"
        title="Family"
        className="px-9 py-1 text-white text-center rounded-2xl bg-[#6ACDFD]  "
      />
    ),
  },
  {
    key: "7",
    label: (
      <AppTitle
        Variant="span"
        title="General"
        className="px-9 py-1 text-white text-center rounded-2xl bg-[#117E4D]"
      />
    ),
  },
  {
    key: "8",
    label: (
      <AppTitle
        Variant="span"
        title="Groceries"
        className="px-9 py-1 text-white text-center rounded-2xl bg-[#06D6A0] "
      />
    ),
  },
  {
    key: "9",
    label: (
      <AppTitle
        Variant="span"
        title="Housing"
        className="px-9 py-1 text-white text-center rounded-2xl bg-[#DDAD3E]"
      />
    ),
  },
  {
    key: "10",
    label: (
      <AppTitle
        Variant="span"
        title="Loan"
        className="px-9 py-1 text-white  text-center rounded-2xl bg-[#900C3F] "
      />
    ),
  },
];

export const byCategory: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <AppTitle
        Variant="span"
        title="Income"
        className="px-9 py-1  text-black "
      />
    ),
  },
  {
    key: "2",
    label: (
      <AppTitle
        Variant="span"
        title="Service"
        className="px-9 py-1 text-black "
      />
    ),
  },
  {
    key: "3",
    label: (
      <AppTitle
        Variant="span"
        title="Payment"
        className="px-8 py-1 text-black "
      />
    ),
  },
];

export const byDate: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <AppTitle
        Variant="span"
        title="Today"
        className="px-9 py-1 text-black "
      />
    ),
  },
  {
    key: "2",
    label: (
      <AppTitle
        Variant="span"
        title="Yesterday"
        className="px-9 py-1 text-black "
      />
    ),
  },
  {
    key: "3",
    label: (
      <AppTitle
        Variant="span"
        title="Last 7 days"
        className="px-8 py-1 text-black "
      />
    ),
  },
  {
    key: "4",
    label: (
      <AppTitle
        Variant="span"
        title="This Month"
        className="px-8 py-1 text-black "
      />
    ),
  },
  {
    key: "5",
    label: (
      <AppTitle
        Variant="span"
        title="Last Month"
        className="px-8 py-1 text-black "
      />
    ),
  },
  {
    key: "6",
    label: (
      <AppTitle
        Variant="span"
        title="Custom Range"
        className="px-8 py-1 text-black "
      />
    ),
  },
];

export const recentSpendingData = [
  {
    rowClassName: "w-full flex justify-around items-center",
    headingColClassName: "mr-5",
    title: "$22.00K",
    heading: (
      <div>
        <img className="mr-3" src={SendMoneyDot} alt="send money" />
        Sent
      </div>
    ),
  },
  {
    rowClassName: "w-full flex justify-around items-center py-2",
    title: "$22.00K",
    heading: (
      <div>
        <img className="mr-3" src={PendingMoneyDot} alt="send money" />
        Pending
      </div>
    ),
  },
  {
    rowClassName: "w-full flex justify-around items-center",
    title: "$22.00K",
    heading: (
      <div>
        <img className="mr-3" src={RecivedMoneyDot} alt="send money" />
        Recived
      </div>
    ),
  },
];

export const balanceCardFunction = () => [
  {
    id: 1,
    heading: "15",
    description: "Total Members",
    icon: TotalMembers,
    avatarStyle: { backgroundColor: "#2752E7", padding: "5px" },
    divider: true,
  },
  {
    id: 2,
    heading: "15",
    description: "Active Members",
    icon: ActiveMembers,
    avatarStyle: { backgroundColor: "#44D600", padding: "5px" },
    divider: true,
  },
  {
    id: 3,
    heading: "15",
    description: "Inactive Members",
    icon: InActiveMembers,
    avatarStyle: { backgroundColor: "#B51629", padding: "5px" },
    divider: false,
  },
];

export const buttonsFuntion = (navigate: any) => [
  {
    btnText: "Add Money",
    type: "",
    size: "middle",
    icon: <ICONSCONSTANT.UploadOutlined className="mr-2" />,
    btnVariant: "span",
    btnLink: () => navigate(ADDMONEYPATH),
    // btnClassName:" text-sm sm:text-xs",
    className:
      "text-sm font-medium text-primary border-primary rounded-lg mb-2 md:mb-0 mr-0 sm:mr-3 w-3/4  sm:w-fit",
  },
  {
    btnText: "Send Money",
    type: "primary",
    size: "middle",
    // btnClassName:" text-sm sm:text-xs",
    btnVariant: "span",
    icon: <ICONSCONSTANT.WalletOutlined className="mr-2" />,
    btnLink: () => {
      navigate(SENDMONEYPATH);
    },
    className: "text-sm font-medium text-white bg-primary rounded-lg w-3/4 sm:w-fit",
  },
];

export const filterBalanceCard: MenuProps["items"] = [
  {
    key: "1",
    label: "Last 7 days",
  },
  {
    key: "2",
    label: "This Month",
  },
  {
    key: "3",
    label: "Last Month",
  },
];
