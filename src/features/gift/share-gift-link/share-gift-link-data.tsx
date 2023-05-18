import { amountFieldRules } from "../../../utils/validations-rules-utils";

const sharedLinkFieldFunction = (giftValue: any) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "Enter Number of Gifts (1-20)",
          name: "number_of_gifts",
          type: "number",
          fieldType: "input",
          defaultValue: giftValue,
          rules: amountFieldRules("Field"),
          size: "large",
        },
        {
          id: 2,
          className: "font-medium text-xs text-primary-text",
          fieldType: "text",
          text: "If your gift is not claimed in 7 days, your money will be refunded to your account.",
        },
      ],
    },
  ];
};

export const SHAREGIFTLINKDATA = {
  sharedLinkFieldFunction,
};
