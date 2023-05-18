import { Checkbox } from "antd";
import { AppTitle } from "../../../components/data-display/app-title/app-title";

import { firstNameFieldRules, lastNameFieldRules } from "../../../utils/validations-rules-utils";
import { CONTACTUSIMAGES } from "./contact-us-images";

export const contactDataFunction = () => [
  {
    heading: "Chat to Sales",
    description: "Speak to our friendly team",
    subtitle: "currencygram123@gmail.com",
    imgSrc: CONTACTUSIMAGES.mailImage,
  },
  {
    heading: "Visit us",
    description: "Visit Our Office Hq",
    subtitle: "100 Smith StreetCollingwood VIC 3066 AU",
    imgSrc: CONTACTUSIMAGES.mapImage,
  },
  {
    heading: "Call Us",
    description: "Mon to Fri 8am to 5pm",
    subtitle: "+44 (555) 0000 000",
    imgSrc: CONTACTUSIMAGES.phoneImage,
  },
];

export const contactUsFormInputFieldsFuntion = () => {
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
          label: "Email",
          size: "large",
          name: "email",
          type: "email",
          fieldType: "input",
          rules: [{ required: true, message: "Please enter the  email", whitespace: true }],
        },

        {
          id: 4,
          label: "Phone Number",
          name: "phoneNumber",
          size: "large",
          rules: [],
          fieldType: "input",
        },
        {
          id: 4,
          label: "Message",
          name: "message",
          size: "large",
          rules: [],
          fieldType: "textarea",
        },
        {
          id: 5,
          //   label: "agreement",
          //   name: "agreement",
          size: "large",
          text: (
            <div className="flex items-center">
              <Checkbox />
              <AppTitle
                title="You agree to our friendly privacy policy"
                className="ml-1 text-[#667085] text-base font-normal"
              />
            </div>
          ),
          rules: [],
          fieldType: "text",
        },
      ],
    },
  ];
};

export const officeInfoDataFunction = () => [
  {
    heading: "Melbourne",
    description: "100 Flinders Street",
    subtitle: "Melbourne VIC 3000 AU",
  },
  {
    heading: "Sydney",
    description: "100 George Street",
    subtitle: "Sydney NSW 2000 AU",
  },
  {
    heading: "Byron Bay",
    description: "100 Jonson Street",
    subtitle: "Byron Bay NSW 2481 AU",
  },
  {
    heading: "London",
    description: "100 Oxford Street",
    subtitle: "London W1D 1LL UK",
  },
  {
    heading: "San Francisco",
    description: "100 Market Street",
    subtitle: "San Francisco, CA 94105 USA",
  },
  {
    heading: "Sweden",
    description: "Drottninggatan 100",
    subtitle: "111 60 Stockholm SE",
  },
];

export const CONTACTUSDATA = {
  contactDataFunction,
  contactUsFormInputFieldsFuntion,
  officeInfoDataFunction,
};
