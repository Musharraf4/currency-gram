import { TRANSECTIONDETAILSIMAGES } from "./transection-details-images"
import { AppTitle } from "../../../components/data-display/app-title/app-title";
const color = [
    "#EF476F",
    "#117E4D",
    "#DDAD3E",
    "#06D6A0",
    "#900C3F",
    "#6ACDFD",
];

const divStyle = (color: any) => ({
    backgroundColor: color,
    padding: "6px 32px",
    borderRadius: "15px",
    width: "30px",
    color: "#fff",
});

export const transectionDetailsTable: any = [
    {
        key: "1",
        icon: <img src={TRANSECTIONDETAILSIMAGES.uparrow} alt="icon" />,
        date: "Nov 30, 2022",
        description: "Sent to Allen Roger",
        transaction_id: "12345",
        account_no: 123123,
        category: <span style={divStyle(color[0])}>Rent</span>,
        amount: "- 400.00 £",
        closing_balance: "£ 34235345345",
    },
    {
        key: "2",
        icon: <img src={TRANSECTIONDETAILSIMAGES.uparrow} alt="icon" />,
        date: "Nov 30, 2022",
        description: "Sent to Allen Roger",
        transaction_id: "12345",
        account_no: 123123,
        category: <span style={divStyle(color[1])}>Business</span>,
        amount: "- 400.00 £",
        closing_balance: "£ 34235345345",
    },
    ,
    {
        key: "3",
        icon: <img src={TRANSECTIONDETAILSIMAGES.uparrow} alt="icon" />,
        date: "Nov 30, 2022",
        description: "Sent to Allen Roger",
        transaction_id: "12345",
        account_no: 123123,
        category: <span style={divStyle(color[2])}>Groceries</span>,
        amount: "- 400.00 £",
        closing_balance: "£ 34235345345",
    },
    {
        key: "4",
        icon: <img src={TRANSECTIONDETAILSIMAGES.downarrow} alt="icon" />,
        date: "Nov 30, 2022",
        description: "Sent to Allen Roger",
        transaction_id: "12345",
        account_no: 123123,
        category: <span style={divStyle(color[3])}>Sales</span>,
        amount: "+ 400.00 £",
        closing_balance: "£ 34235345345",
    },
    {
        key: "5",
        icon: <img src={TRANSECTIONDETAILSIMAGES.uparrow} alt="icon" />,
        date: "Nov 30, 2022",
        description: "Sent to Allen Roger",
        transaction_id: "12345",
        account_no: 123123,
        category: <span style={divStyle(color[5])}>Cash Gift</span>,
        amount: "- 400.00 £",
        closing_balance: "£ 34235345345",
    },
    {
        key: "6",
        icon: <img src={TRANSECTIONDETAILSIMAGES.downarrow} alt="icon" />,
        date: "Nov 30, 2022",
        description: "Sent to Allen Roger",
        transaction_id: "12345",
        account_no: 123123,
        category: <span style={divStyle(color[5])}>Cash Gift</span>,
        amount: "+ 400.00 £",
        closing_balance: "£ 34235345345",
    },
    {
        key: "7",
        icon: <img src={TRANSECTIONDETAILSIMAGES.downarrow} alt="icon" />,
        date: "Nov 30, 2022",
        description: "Sent to Allen Roger",
        transaction_id: "12345",
        account_no: 123123,
        category: <span style={divStyle(color[5])}>Cash Gift</span>,
        amount: "+ 400.00 £",
        closing_balance: "£ 34235345345",
    },
    {
        key: "8",
        icon: <img src={TRANSECTIONDETAILSIMAGES.downarrow} alt="icon" />,
        date: "Nov 30, 2022",
        description: "Sent to Allen Roger",
        transaction_id: "12345",
        account_no: 123123,
        category: <span style={divStyle(color[5])}>Cash Gift</span>,
        amount: "+ 400.00 £",
        closing_balance: "£ 34235345345",
    },
];
export const transectionDetailsTableHeader = (navigate: any) => [
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
export const TRANSECTIONDETAILS = {
    transectionDetailsTable,
    transectionDetailsTableHeader
}