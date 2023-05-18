import { MenuProps } from "antd";
import uparrow from "../../../assets/images/dashboard/table-uparrow.svg";
import downarrow from "../../../assets/images/dashboard/table-downarrow.svg";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import {
  SLASHPATH,
  TRANSACTIONDETAILSPATH,
  TRANSACTIONPATH,
} from "../../../constants/routes-constant";

export const accountStatementTable: any = [
  {
    key: "1",
    icon: <img src={uparrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Allen Roger",
    transaction_id: "12345",
    account_no: 123123,
    category: "Rent",
    amount: "400.00",
    closing_balance: "34235345345",
  },
  {
    key: "2",
    icon: <img src={downarrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Allen Roger",
    transaction_id: "12345",
    account_no: 123123,
    category: "Business",
    amount: "400.00",
    closing_balance: "34235345345",
  },
  {
    key: "3",
    icon: <img src={downarrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Allen Roger",
    transaction_id: "12345",
    account_no: 123123,
    category: "Groceries",
    amount: "400.00",
    closing_balance: "34235345345",
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
    closing_balance: "34235345345",
  },
  {
    key: "5",
    icon: <img src={downarrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Allen Roger",
    transaction_id: "12345",
    account_no: 123123,
    category: "Cash Gift",
    amount: "400.00",
    closing_balance: "34235345345",
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
    closing_balance: "34235345345",
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
    closing_balance: "34235345345",
  },
  {
    key: "8",
    icon: <img src={downarrow} alt="icon" />,
    date: "Nov 30, 2022",
    description: "Sent to Allen Roger",
    transaction_id: "12345",
    account_no: 123123,
    category: "Cash Gift",
    amount: "400.00",
    closing_balance: "34235345345",
  },
];

export const accountStatementTableColums = (
  navigate?: any,
  colorPill?: any
) => [
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
          navigate(`${TRANSACTIONPATH}${SLASHPATH}${TRANSACTIONDETAILSPATH}`);
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
          console.log(name);
        }}
      />;
    },
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "5",
    render: (text: any) => {
      console.log(text);
      return (
        <span
          className={`font-semibold  text-xs px-3 py-1 center-text rounded-3xl ${colorPill?.(
            text
          )}`}
          style={{ display: "inline-block" }}
        >
          {text}
        </span>
      );
    },
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
