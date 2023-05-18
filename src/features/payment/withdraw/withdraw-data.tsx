import { SELECTFIELDOPTIONSUTILS } from "../../../utils/select-field-options-utils";

export const withdrawPaymentFormInputFieldsFunction = () => [
  {
    heading: "",
    fields: [
      {
        id: 1,
        label: "Select Account",
        name: "account",
        fieldType: "select",
        size: "large",
        className: "dynamic-form-select-simple",
        options: SELECTFIELDOPTIONSUTILS.accountChoiceData,
        rules: [{ required: true, message: "Please select the value" }],
      },
      {
        id: 4,
        label: "Amount",
        name: "amount",
        size: "large",
        rules: [],
        fieldType: "input",
      },
    ],
  },
];

export const withdrawDetails = [
  {
    mainTitle: "Withdraw Details",
    mainclassName: "bg-transparent",
    mainTitleClassName: "text-left",
    data: {
      "Withdraw Amount": "$1233",
      "Withdraw fee": "$111",
      "Withdraw Account": "1213",
      "Account Number": "12344321",
      "IBAN Number": "123123213212321321",
      "Sort Code": "123456",
    },
  },
];
