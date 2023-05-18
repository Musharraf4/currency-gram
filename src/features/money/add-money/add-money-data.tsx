import { ADDMONEYIMAGES } from "./add-money-images";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { AppDropdown } from "../../../components/dropdowns/app-dropdown/app-dropdown";
import { amountFieldRules } from "../../../utils/validations-rules-utils";

const addMoneyDataFunction = (setSelectedCard: any) => [
  {
    child: [
      {
        heading: "Bank Transfer",
        imgSrc: ADDMONEYIMAGES.bankImage,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
        size: 25,
      },
      {
        heading: "Debit / Credit Card",
        imgSrc: ADDMONEYIMAGES.cardImage,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
        size: 25,
      },
      {
        heading: "By Sharing Link",
        imgSrc: ADDMONEYIMAGES.linkImage,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
        size: 25,
      },
    ],
  },
];

const addMoneyFieldFuntion = () => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "Enter Amount",
          name: "amount",
          fieldType: "input",
          type: "number",
          size: "large",
          className: "dynamic-form-input-elegant",
          rules: amountFieldRules("Amount"),
          min: 0,
        },
      ],
    },
  ];
};
const totalBalanceField = [
  {
    heading: "",
    fields: [
      {
        id: 1,
        label: "Current Balance",
        value: "14",
        fieldType: "input",
        type: "number",
        size: "large",
        disabled: true,
        className: "dynamic-form-input-elegant",
      },
    ],
  },
];

const getPayImage = (name: any) => {
  if (name === "Euro") return ADDMONEYIMAGES.EuroImage;
  return ADDMONEYIMAGES.GBPImage;
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

const sharedLinkFieldFuntion = (
  prevPayMethod?: any,
  selectedPayMethod?: any,
  changePayMethod?: any
) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "",
          initialValue: "$15",
          name: "total_amount",
          fieldType: "input",
          suffix: (
            <AppDropdown
              items={items?.(prevPayMethod, selectedPayMethod, changePayMethod)}
              name={selectedPayMethod}
              overlayClassName="currency-dropdown"
            />
          ),
          size: "large",
          disabled: true,
        },
        {
          id: 2,
          text: "How much money would you like to receive?",
          fieldType: "text",
          textClassName: "text-center text-primary-text",
        },
        {
          id: 3,
          label: "Enter amount (£)",
          name: "amount",
          fieldType: "input",
          type: "number",
          size: "large",
          rules: amountFieldRules("Amount"),
        },
        {
          id: 4,
          label: "Enter a reference (optional)",
          name: "reference",
          fieldType: "input",
          size: "large",
        },
      ],
    },
  ];
};

export const ADDMONEYDATA = {
  addMoneyDataFunction,
  addMoneyFieldFuntion,
  totalBalanceField,
  sharedLinkFieldFuntion,
};
