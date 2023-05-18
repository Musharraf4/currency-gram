import pic from "../../../assets/images/teams/profile.png";
import binImage from "../../../assets/icons/bin.svg";
import editImage from "../../../assets/icons/edit.svg";
import currency from "../../../assets/icons/currency.svg";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
// import { requiredFieldMessage } from "../../../constants/message-constant";
import {
  accountNoFieldRules,
  addressFieldRules,
  firstNameFieldRules,
  lastNameFieldRules,
  nickNameFieldRules,
  sortCodeFieldRules,
} from "../../../utils/validations-rules-utils";

const provinceData = ["Zhejiang", "Jiangsu"];
export const paymentApprovalData = [
  {
    data: {
      "Account title": (
        <>
          <div className="flex items-center justify-end">
            {" "}
            <div className="max-w-[25px] text-center mr-1">
              <img src={pic} className="w-full" />
            </div>
            <AppTitle title="John Smilga" />
          </div>
        </>
      ),
    },
    hasHr: false,
  },
  {
    data: { Arriving: "Mon, 5 Dec" },
    hasHr: false,
  },
  {
    data: {
      Account: "$20",
      "Exchange Rate": "$1=$12",
      "Amount after exchange": "$32",
      Fee: "$44",
      From: "GBP",
    },
    hasHr: false,
  },
  {
    data: { To: "John wilson", "Account Type": "Individual", IBAN: "IT2231 2213 12312 12312 123" },
    hasHr: false,
  },
  {
    mainTitle: "Request",
    data: { To: "John wilson", "Account Type": "Individual", IBAN: "IT2231 2213 12312 12312 123" },
    hasHr: false,
  },
];

export const paymentApprovalButtonFunction = (navigate?: any) => {
  return [
    {
      size: "large",
      btnLink: () => {},
      btnText: "Approve Transfer",
      type: "primary",
      //   ghost: true,
      className: "mb-1 w-full",
    },
    {
      size: "large",
      btnLink: () => {},
      btnText: "Reject",
      type: "text",
      //   ghost: true,
      className: "text-primary mb-1 w-full",
    },
  ];
};

export const requestBeneficiaryInputDataFunction: any = () => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          type: "text",
          name: "firstName",
          label: "First Name",
          fieldType: "input",
          rules: firstNameFieldRules,
        },
        {
          id: 2,
          type: "text",
          name: "lastName",
          label: "Last Name",
          fieldType: "input",
          rules: lastNameFieldRules,
        },
        {
          id: 3,
          type: "text",
          name: "nickName",
          label: "Nick Name",
          fieldType: "input",
          rules: nickNameFieldRules,
        },
        {
          id: 4,
          type: "number",
          name: "accountNo",
          label: "Account No",
          fieldType: "input",
          rules: accountNoFieldRules?.(),
        },
        {
          id: 5,
          type: "number",
          name: "sortCode",
          label: "Sort Code",
          fieldType: "input",
          rules: sortCodeFieldRules?.(),
        },
        {
          id: 6,
          type: "text",
          name: "reference",
          label: "Reference (optional)",
          fieldType: "input",
        },
      ],
    },
  ];
};

export const dataInitiator = {
  Name: "Shadab",
  Email: "shadab@gmail.com",
};
export const cardDetails = {
  "Card No:": "*********4567",
  "Card Holder": "Daniyal Muneer",
};

export const requestBeneficiaryColumnsFunction = (setIsDeleting: any) => [
  {
    title: "First Name",
    dataIndex: "First name",
    key: "1",
  },
  {
    title: "Last Name",
    dataIndex: "Last name",
    key: "2",
  },
  {
    title: "Nick name",
    dataIndex: "Nick name",
    key: "3",
  },
  {
    title: "Account no",
    dataIndex: "Account no",
    key: "4",
  },
  {
    title: "Sort Code",
    dataIndex: "Sort code",
    key: "5",
  },
  {
    title: "Reference",
    dataIndex: "Reference",
    key: "6",
  },
  {
    title: "Currency",
    dataIndex: "Currency",
    key: "7",
    render: (t: any, row: any) => (
      <div className="flex items-center">
        <img src={currency} alt="bin" className="cursor-pointer " />
        <span className="ml-2">{t}</span>
      </div>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "8",
    render: (value: any, row: any) => (
      <div className="flex " style={{ gap: "15px" }}>
        <div
          onClick={() => {
            setIsDeleting(true);
          }}>
          <img src={binImage} alt="bin" className="cursor-pointer grayscale hover:grayscale-0" />
        </div>
        <div
          onClick={(e: any) => {
            console.log({ value, row });
            const editForm = {
              firstName: row?.["First name"],
              lastName: row?.["Last name"],
              nickName: row?.["Nick name"],
              accountNo: row?.["Account no"],
              sortCode: row?.["Sort code"],
              reference: row?.["Reference"],
            };
          }}>
          <img src={editImage} alt="bin" className="cursor-pointer grayscale hover:grayscale-0" />
        </div>
      </div>
    ),
  },
];

export const replaceCardRadioDataFunction = (radioOnChange: any, selectedReason: any) => [
  {
    radioValue: selectedReason,
    onChange: (e: any) => radioOnChange?.(e),
    data: [
      {
        radioLabel: "Lost a card",
        value: "cardLost",
      },
      {
        radioLabel: "Card is damaged",
        value: "cardDamaged",
      },
      {
        radioLabel: "Card got stolen",
        value: "cardStolen",
      },
    ],
  },
];

export const deliveryAddressFormInputFieldsFunction = () => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "Country",
          name: "country",
          fieldType: "select",
          size: "large",
          className: "dynamic-form-select-elegant",
          options: provinceData.map((x: any) => ({ value: x, label: x })),
          rules: [{ required: true, message: "Please select the value" }],
        },
        {
          id: 2,
          label: "Address",
          name: "address",
          size: "large",
          rules: addressFieldRules?.(),
          fieldType: "input",
        },
        {
          id: 3,
          label: "City",
          name: "city",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Please select the value" }],
        },
        {
          id: 4,
          label: "Post Code",
          name: "postCode",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Please select the value" }],
        },
      ],
    },
  ];
};

export const requestNewCardFormInputFieldsFunction = () => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          type: "text",
          name: "firstName",
          label: "First Name",
          fieldType: "input",
          rules: firstNameFieldRules,
        },
        {
          id: 2,
          type: "text",
          name: "lastName",
          label: "Last Name",
          fieldType: "input",
          rules: lastNameFieldRules,
        },
        {
          id: 4,
          label: "Post Code",
          name: "postCode",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Please select the value" }],
        },
        {
          id: 2,
          label: "Address",
          name: "address",
          size: "large",
          rules: addressFieldRules?.(),
          fieldType: "input",
        },
        {
          id: 3,
          label: "City",
          name: "city",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Please select the value" }],
        },
        {
          id: 1,
          label: "Country",
          name: "country",
          fieldType: "select",
          size: "large",
          className: "dynamic-form-select-elegant",
          options: provinceData.map((x: any) => ({ value: x, label: x })),
          rules: [{ required: true, message: "Please select the value" }],
        },
      ],
    },
  ];
};
