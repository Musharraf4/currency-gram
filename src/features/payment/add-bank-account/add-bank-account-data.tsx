import { SELECTFIELDOPTIONSUTILS } from "../../../utils/select-field-options-utils";
import { accountNoFieldRules } from "../../../utils/validations-rules-utils";

export const addBankAccountFormInputFieldsFunction = (showField: any, setShowField: any) => [
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
        id: 2,
        label: "Bank Account Number",
        name: "bankAccountNumber",
        size: "large",
        onChange: (e: any) => {
          console.log(e?.target?.value);
          !!e.target.value ? setShowField(true) : setShowField(false);
        },
        rules: accountNoFieldRules?.(),
        fieldType: "input",
      },
      {
        id: 3,
        label: "Bank Name",
        name: "bankName",
        size: "large",
        showField: showField,
        rules: [],
        fieldType: "input",
      },
      {
        id: 4,
        label: "Bank Holder Name",
        name: "bankHolderName",
        size: "large",
        showField: showField,
        rules: [],
        fieldType: "input",
      },
      {
        id: 5,
        label: "IBAN Number",
        name: "iban",
        size: "large",
        showField: showField,
        rules: [],
        fieldType: "input",
      },
    ],
  },
];

export const ADDBANKACCOUNTDATA = {
  addBankAccountFormInputFieldsFunction,
};
