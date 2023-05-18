import { ICONSCONSTANT } from "../../../constants/icons-constant";
import {
  accountNoFieldRules,
  businessNameFieldRules,
  businessOrCharityNameFieldRules,
  businessOrCharityNameSelectFieldRules,
  countryFieldRules,
  currencyFieldRules,
  firstNameFieldRules,
  lastNameFieldRules,
  nickNameFieldRules,
  optionalEmailFieldRules,
  optionalPhoneNumberFieldRules,
  sortCodeFieldRules,
} from "../../../utils/validations-rules-utils";

const provinceData = ["Zhejiang", "Jiangsu"];

export const intraCurrencyGramFormInputFieldsFuntion = (
  isSchedule: any,
  toggleSchedule: any,
  saveBeneficiary: any,
  toggleSaveBeneficiary: any
) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "First Name",
          name: "firstName",
          fieldType: "input",
          size: "large",
          rules: firstNameFieldRules,
        },
        {
          id: 2,
          label: "Last Name",
          name: "lastName",
          size: "large",
          rules: lastNameFieldRules,
          fieldType: "input",
        },
        {
          id: 3,
          label: "Account No",
          name: "accountNo",
          fieldType: "input",
          size: "large",
          type: "number",
          rules: accountNoFieldRules?.(),
        },
        {
          id: 4,
          label: "Nick Name",
          name: "nickName",
          size: "large",
          rules: nickNameFieldRules,
          fieldType: "input",
        },
        {
          id: 5,
          label: "Sort Code",
          name: "sortCode",
          fieldType: "input",
          size: "large",
          type: "number",
          rules: sortCodeFieldRules?.(),
        },
        {
          id: 6,
          btnIcon: <ICONSCONSTANT.UserOutlined style={{ color: "#fff" }} />,
          fieldName: "Save Beneficiary",
          fieldType: "switch",
          size: "small",
          switchBtnClassName: "bg-primary",
          switchBtnShape: "circle",
          switchRowClassName: "items-center",
          defaultChecked: true,
          fieldNameClassName: "text-primary-text ml-3 text-sm font-normal",
          onChange: (e: any) => {
            // console.log(e);
            const saved = e && "save";
            toggleSaveBeneficiary?.(e);
            // console.log(saved);
            // toggleSchedule?.(e);
          },
        },
        {
          id: 7,
          btnIcon: <ICONSCONSTANT.CalendarOutlined style={{ color: "#fff" }} />,
          fieldName: "Schedule Payment",
          fieldType: "switch",
          size: "small",
          switchBtnShape: "circle",
          switchBtnClassName: "bg-primary",
          switchRowClassName: "items-center",
          fieldNameClassName: "text-primary-text ml-3 text-sm font-normal",
          onChange: (e: any) => {
            // console.log(e);
            toggleSchedule?.(e);
          },
        },
        {
          id: 8,
          label: "Date",
          name: "date",
          disabled: !isSchedule,
          fieldType: "date",
          className: "w-full",
          size: "large",
          suffixIcon: <ICONSCONSTANT.CalendarOutlined />,
          rules: [{ required: isSchedule, message: "Please " }],
        },
      ],
    },
  ];
};

export const localTransferFormInputFieldsFuntion = (
  isSchedule: any,
  toggleSchedule: any,
  saveBeneficiary: any,
  toggleSaveBeneficiary: any
) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "First Name",
          name: "firstName",
          fieldType: "input",
          size: "large",
          rules: firstNameFieldRules,
        },
        {
          id: 2,
          label: "Last Name",
          name: "lastName",
          size: "large",
          rules: lastNameFieldRules,
          fieldType: "input",
        },
        {
          id: 3,
          label: "Account No",
          name: "accountNo",
          fieldType: "input",
          size: "large",
          rules: accountNoFieldRules?.(),
        },
        {
          id: 4,
          label: "Nick Name",
          name: "nickName",
          size: "large",
          rules: nickNameFieldRules,
          fieldType: "input",
        },
        {
          id: 5,
          label: "Sort Code",
          name: "sortCode",
          fieldType: "input",
          size: "large",
          rules: sortCodeFieldRules?.(),
        },
        {
          id: 5,
          label: "Phone Number (optional) ",
          name: "phoneNumber",
          fieldType: "input",
          size: "large",
          rules: optionalPhoneNumberFieldRules?.(),
        },
        {
          id: 5,
          label: "Email(Optional)",
          name: "email",
          fieldType: "input",
          size: "large",
          rules: optionalEmailFieldRules?.(),
        },
        {
          id: 6,
          btnIcon: <ICONSCONSTANT.UserOutlined style={{ color: "#fff" }} />,
          fieldName: "Save Beneficiary",
          fieldType: "switch",
          size: "small",
          switchBtnClassName: "bg-primary",
          switchBtnShape: "circle",
          switchRowClassName: "items-center",
          defaultChecked: true,
          fieldNameClassName: "text-primary-text ml-3 text-sm font-normal",
          onChange: (e: any) => {
            // console.log(e);
            const saved = e && "save";
            toggleSaveBeneficiary?.(e);
            // console.log(saved);
            // toggleSchedule?.(e);
          },
        },
        {
          id: 7,
          btnIcon: <ICONSCONSTANT.CalendarOutlined style={{ color: "#fff" }} />,
          fieldName: "Schedule Payment",
          fieldType: "switch",
          size: "small",
          switchBtnShape: "circle",
          switchBtnClassName: "bg-primary",
          switchRowClassName: "items-center",
          fieldNameClassName: "text-primary-text ml-3 text-sm font-normal",
          onChange: (e: any) => {
            // console.log(e);
            toggleSchedule?.(e);
          },
        },
        {
          id: 8,
          label: "Date",
          name: "date",
          disabled: !isSchedule,
          fieldType: "date",
          className: "w-full",
          size: "large",
          suffixIcon: <ICONSCONSTANT.CalendarOutlined />,
          rules: [{ required: isSchedule, message: "Please " }],
        },
      ],
    },
  ];
};

export const internationalTransferCompanyFormInputFieldsFuntion = (
  isSchedule?: any,
  toggleSchedule?: any
) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "Business Name",
          name: "businessName",
          fieldType: "input",
          size: "large",
          rules: businessNameFieldRules?.(),
        },
        {
          id: 2,
          label: "IBAN",
          name: "iban",
          size: "large",
          // rules: [{ required: true, message: "Please enter the last name", whitespace: true }],
          fieldType: "input",
        },
        {
          id: 3,
          label: "BIC",
          name: "bic",
          fieldType: "input",
          size: "large",
          // rules: [
          //   {
          //     required: true,
          //     message: requiredFieldMessage?.("account Number", true),
          //     // pattern: new RegExp(ONLYNUMERICVALUESVALIDATION),
          //   },
          //   {
          //     min: MINIMUMACCOUNTNUMBERLENGTH,
          //     message: minimumCharacters?.(MINIMUMACCOUNTNUMBERLENGTH),
          //   },
          // ],
        },
        {
          id: 4,
          label: "Beneficiary Bank/Institute",
          name: "beneficiarybank",
          size: "large",
          // rules: [{ required: true, message: requiredFieldMessage?.(NICKNAME) }],
          fieldType: "input",
        },
        {
          id: 5,
          label: "Country",
          name: "country",
          fieldType: "select",
          size: "large",
          className: "dynamic-form-select-elegant",
          options: provinceData.map((x: any) => ({ value: x, label: x })),
          rules: countryFieldRules?.(),
        },
      ],
    },
  ];
};
export const internationalTransferindividualFormInputFieldsFuntion = (
  isSchedule?: any,
  toggleSchedule?: any
) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "First Name",
          name: "firstName",
          fieldType: "input",
          size: "large",
          rules: firstNameFieldRules,
        },
        {
          id: 2,
          label: "Last Name",
          name: "lastName",
          size: "large",
          rules: lastNameFieldRules,
          fieldType: "input",
        },
        {
          id: 2,
          label: "IBAN",
          name: "iban",
          size: "large",
          rules: [{ required: true, message: "Please enter the last name", whitespace: true }],
          fieldType: "input",
        },
        {
          id: 3,
          label: "BIC",
          name: "bic",
          fieldType: "input",
          size: "large",
          rules: [],
        },
        {
          id: 4,
          label: "Beneficiary Bank/Institute",
          name: "beneficiarybank",
          size: "large",
          fieldType: "input",
        },
        {
          id: 5,
          label: "Country",
          name: "country",
          fieldType: "select",
          size: "large",
          className: "dynamic-form-select-elegant",
          options: provinceData.map((x: any) => ({ value: x, label: x })),
          rules: countryFieldRules?.(),
        },
      ],
    },
  ];
};
export const charityAndBusinessFormInputFieldsFuntion = (isCharity: any) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: isCharity ? "Select Charity" : "Select Business",
          name: isCharity ? "charity" : "business",
          fieldType: "select",
          size: "large",
          className: "dynamic-form-select-simple",
          options: provinceData.map((x: any) => ({ value: x, label: x })),
          rules: businessOrCharityNameSelectFieldRules?.(isCharity),
        },
        {
          id: 2,
          label: isCharity ? "Charity Name" : "Business Name",
          name: isCharity ? "charityName" : "businessName",
          fieldType: "input",
          size: "large",
          rules: businessOrCharityNameFieldRules?.(isCharity),
        },
        {
          id: 3,
          label: "Currency",
          name: "currency",
          size: "large",
          rules: currencyFieldRules?.(),
          fieldType: "input",
        },
        {
          id: 4,
          label: "Account No",
          name: "accountNo",
          fieldType: "input",
          size: "large",
          rules: accountNoFieldRules?.(),
        },
        {
          id: 5,
          label: "Sort Code",
          name: "sortCode",
          fieldType: "input",
          size: "large",
          rules: sortCodeFieldRules?.(),
        },
      ],
    },
  ];
};

export const MONEYTRANSFERADDDETAILSDATA = {
  intraCurrencyGramFormInputFieldsFuntion,
  localTransferFormInputFieldsFuntion,
  internationalTransferCompanyFormInputFieldsFuntion,
  internationalTransferindividualFormInputFieldsFuntion,
  charityAndBusinessFormInputFieldsFuntion,
};
