import { requiredFieldMessage } from "../../../constants/field-error-message-constant";
import { SELECTFIELDOPTIONSUTILS } from "../../../utils/select-field-options-utils";
import { PERSONALDETAILSVIEWIMPORTS } from "./personal-details-view-imports";
import { disableFutureDates } from "../../../utils/date-time-utils";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

const provinceData = ["Zhejiang", "Jiangsu"];
export const PersonalDetailsFormFieldsInputFunction = () => {
  return [
    {
      heading: "General Information",
      headingClassName: "text-base font-semibold bg-light-grey pt-3 pb-3 pl-3 mb-4",
      fields: [
        {
          id: 1,
          label: "First Name",
          name: "firstName",
          fieldType: "input",
          size: "large",
          fieldLg: 12,
          rules: PERSONALDETAILSVIEWIMPORTS.firstNameFieldRules,
        },
        {
          id: 2,
          label: "Last Name",
          name: "lastName",
          size: "large",
          fieldLg: 12,
          rules: PERSONALDETAILSVIEWIMPORTS.lastNameFieldRules,
          fieldType: "input",
        },
        {
          id: 3,
          label: "Date of Birth",
          name: "dob",
          fieldType: "date",
          className: "w-full",
          size: "large",
          fieldLg: 12,
          disabledDate: (currentDate: any) => disableFutureDates(currentDate),
          rules: [
            {
              required: true,
              message: requiredFieldMessage?.("Date of Birth"),
            },
          ],
        },
        {
          id: 4,
          label: "Phone Number",
          name: "phoneNumber",
          size: "large",
          fieldLg: 12,
          rules: PERSONALDETAILSVIEWIMPORTS.phoneNumberFieldRules?.(),
          fieldType: "input",
        },
        {
          id: 5,
          label: "Email",
          name: "email",
          fieldType: "input",
          size: "large",
          fieldLg: 12,
          rules: PERSONALDETAILSVIEWIMPORTS.emailFieldRules?.(),
        },
      ],
    },
    {
      heading: "Physical Address",
      headingClassName: "text-base font-semibold bg-light-grey pt-3 pb-3 pl-3 mb-4",
      fields: [
        {
          id: 1,
          label: "Country of Residence",
          name: "countryResident",
          fieldType: "select",
          size: "large",
          fieldLg: 12,
          className: "dynamic-form-select-simple",
          options: SELECTFIELDOPTIONSUTILS.countryData,
          rules: PERSONALDETAILSVIEWIMPORTS.countryFieldRules?.(),
        },
        {
          id: 2,
          label: "Post Code",
          name: "postCode",
          fieldType: "select",
          size: "large",
          fieldLg: 12,
          className: "dynamic-form-select-simple",
          options: provinceData.map((x: any) => ({ value: x, label: x })),
          rules: PERSONALDETAILSVIEWIMPORTS.postCodeFieldRules?.(),
        },
        {
          id: 3,
          label: "Country",
          name: "country",
          fieldType: "select",
          size: "large",
          fieldLg: 12,
          className: "dynamic-form-select-simple",
          options: SELECTFIELDOPTIONSUTILS.countryData,
          rules: PERSONALDETAILSVIEWIMPORTS.countryFieldRules?.(),
        },
        {
          id: 4,
          label: "City",
          name: "city",
          fieldType: "input",
          size: "large",
          fieldLg: 12,
          // className: "dynamic-form-select-simple",
          rules: PERSONALDETAILSVIEWIMPORTS.cityFieldRules?.(),
        },
        {
          id: 5,
          label: "Address",
          name: "address",
          size: "large",
          rules: PERSONALDETAILSVIEWIMPORTS.addressFieldRules?.(),
          fieldType: "input",
        },
      ],
    },
  ];
};

export const personalDetailButtonFunction = (navigate?: any, setIsAdded?: any) => {
  return [
    {
      size: "large",
      btnLink: () => {},
      // disabled: true,
      btnText: "View",
      type: "primary",
      // ghost: true,
      //   className: "text-primary border-primary ml-1 mb-1",
    },
  ];
};

export const personalDetailsCommunityFunction = () => {
  return [
    {
      fields: [
        {
          id: 1,
          label: "Display Name",
          name: "displayName",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Please enter the first name", whitespace: true }],
        },
        {
          id: 2,
          label: "Write about yourseld",
          name: "info",
          size: "large",
          rules: [{ required: true, message: "Please enter the last name", whitespace: true }],
          fieldType: "textarea",
        },
      ],
    },
  ];
};
export const personalDetailCommunityButtonFunction = (navigate?: any, setIsAdded?: any) => {
  return [
    {
      size: "large",
      btnLink: () => {},
      // disabled: true,
      btnText: "Edit Profile",
      type: "primary",
      // ghost: true,
      className: "rounded-full",
    },
    {
      size: "large",
      btnLink: () => {},
      // disabled: true,
      icon: <ICONSCONSTANT.DeleteOutlined />,
      btnText: "Delete",
      type: "default",
      btnVariant: "span",
      // ghost: true,
      className: "rounded-full ml-3",
    },
  ];
};

export const PERSONALDETAILSVIEWSDATA = {
  PersonalDetailsFormFieldsInputFunction,
  personalDetailButtonFunction,
  personalDetailsCommunityFunction,
  personalDetailCommunityButtonFunction,
};
