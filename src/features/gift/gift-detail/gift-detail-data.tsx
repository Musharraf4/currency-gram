import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { AppDropdown } from "../../../components/dropdowns/app-dropdown/app-dropdown";
import { COMMONASSETSCONSTANT } from "../../../constants/common-assets-constant";
import { amountFieldRules } from "../../../utils/validations-rules-utils";

const getPayImage = (name: any) => {
  if (name === "Euro") return COMMONASSETSCONSTANT.euroImage;
  return COMMONASSETSCONSTANT.gbpImage;
};

const items = (prevPayMethod?: any, selectedPayMethod?: any, changePayMethod?: any) => {
  return [
    {
      key: "1",
      label: (
        <div
          className="flex items-center justify-space-between pt-1 pb-1"
          onClick={() => {
            changePayMethod?.(prevPayMethod, selectedPayMethod);
          }}
        >
          <img width={"10px"} height={"10px"} src={getPayImage?.(prevPayMethod)} alt="" />
          {/* {prevPayMethod} */}
          <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={prevPayMethod} />
        </div>
      ),
    },
  ];
};

const giftDetailsFieldsFuntion = (
  selectedPayMethod: any,
  // setSelectedPayMethod: any,
  prevPayMethod: any,
  // setPrevPayMethod: any,
  changePayMethod: any
) => {
  return [
    {
      header: "",
      fields: [
        {
          id: 1,
          label: "Enter Amount",
          name: "amount",
          fieldType: "input",
          type: "number",
          suffix: (
            <AppDropdown
              items={items?.(prevPayMethod, selectedPayMethod, changePayMethod)}
              name={selectedPayMethod}
              overlayClassName="currency-dropdown"
            />
          ),
          // rules: [{ required: true, message: "Please enter the last name", whitespace: true }],
          // suffix: <CurrencySelect defaultValue="GBP" options={items} style={{ width: 100 }} />,
          size: "large",
          className: "dynamic-form-input-elegant",
          rules: amountFieldRules("Amount"),
        },
        {
          id: 2,
          label: "Type your message here",
          name: "message",

          fieldType: "textarea",
          autoSize: false,
          maxLength: 150,
          showCount: true,
          className: "dynamic-form-input-elegant",

          style: { height: 120, resize: "none", border: "1px solid #d9d9d9" },
        },
      ],
    },
  ];
};

const viewGiftDetailColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "1",
  },
  {
    title: "Account",
    dataIndex: "account",
    key: "2",
  },
  {
    title: "Sort Code",
    dataIndex: "sort_code",
    key: "3",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "4",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "1",
    render: (text: string) => <AppTitle title={`£${text}`} />,
  },
];

const viewGiftDetailData = [
  {
    name: "John",
    account: "1234567890",
    sort_code: "1234567890",
    date: "2020-01-01",
    amount: "1234567890",
  },
  {
    name: "John",
    account: "1234567890",
    sort_code: "1234567890",
    date: "2020-01-01",
    amount: "1234567890",
  },
];

const transactionDetails = [
  {
    key: "Contact",
    value: "+44032409",
  },
  {
    key: "Status",
    value: "Pending",
    valueClassName: "text-[#FFCC00]",
  },
  {
    key: "Transaction ID:",
    value: "658922",
  },
];

export const GIFTDETAILDATA = {
  transactionDetails,
  viewGiftDetailData,
  viewGiftDetailColumns,
  giftDetailsFieldsFuntion,
};
