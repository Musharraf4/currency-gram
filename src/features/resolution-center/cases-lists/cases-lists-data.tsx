import { Avatar, Space } from "antd";
import { AppTitle } from "../../../components/data-display/app-title/app-title";

const casesCardsData = (setCases: any) => [
  {
    id: "1",
    heading: "Open Cases",
    description: "Cases that are still open to resolve",
    imgSrc: openCasesData.length,
    // userImageClassName: "flex justify-center items-center",
    linkPath: () => {
      setCases("Open Cases");
    },
  },
  {
    id: "2",
    heading: "Close Cases",
    description: "Cases that are resolved and closed",
    imgSrc: closeCasesData.length,
    linkPath: () => {
      setCases("Close Cases");
    },
  },
];

// table data

const openCasesColumns = (navigate: any) => [
  {
    title: "Case ID",
    dataIndex: "case_id",
    key: "1",
    render: (name: string) => (
      <AppTitle
        title={
          <Space wrap size={5}>
            <Avatar className="bg-primary" />
            {name}
          </Space>
        }
        Variant="span"
      />
    ),
  },
  {
    title: "Issue Type",
    dataIndex: "issue_type",
    key: "2",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "4",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "5",
    render: (text: string) => (
      <AppTitle
        title={text}
        className={`${text === "In Progress" ? "text-[#FFCC00]" : "text-primary"}`}
        Variant="span"
      />
    ),
  },
];

const openCasesData = [
  {
    key: "1",
    case_id: "AB-1-234234",
    issue_type: "Transaction",
    date: "04-02-2023",
    status: "In Progress",
  },
  {
    key: "2",
    case_id: "AB-1-234235",
    issue_type: "Transaction",
    date: "04-02-2023",
    status: "In Progress",
  },
  {
    key: "1",
    case_id: "AB-1-234236",
    issue_type: "Physical Card",
    date: "04-02-2023",
    status: "Initiated",
  },
];
const closeCasesColumns = (navigate: any) => [
  {
    title: "Case ID",
    dataIndex: "case_id",
    key: "1",
    render: (name: string) => (
      <AppTitle
        title={
          <Space wrap size={5}>
            <Avatar className="bg-primary" />
            {name}
          </Space>
        }
        Variant="span"
      />
    ),
  },
  {
    title: "Issue Type",
    dataIndex: "issue_type",
    key: "2",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "4",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "5",
    render: (text: string) => (
      <AppTitle
        title={text}
        className={`${text === "Completed" ? "text-green-700" : "text-red-500"}`}
        Variant="span"
      />
    ),
  },
];

const closeCasesData = [
  {
    key: "1",
    case_id: "AB-1-234221",
    issue_type: "Physical Card",
    date: "04-02-2023",
    status: "Completed",
  },
  {
    key: "2",
    case_id: "AB-1-234222",
    issue_type: "Transaction",
    date: "04-02-2023",
    status: "Completed",
  },
  {
    key: "1",
    case_id: "AB-1-234223",
    issue_type: "Physical Card",
    date: "04-02-2023",
    status: "Closed",
  },
];
export const CASESLISTSDATA = {
  casesCardsData,
  closeCasesColumns,
  closeCasesData,
  openCasesColumns,
  openCasesData,
};
