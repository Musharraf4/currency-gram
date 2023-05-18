import { MONEYRECEIVEDVIALINKIMPORTS } from "./money-received-via-link-imports";

export const sharedLinkerNameFunction = () => {
  return [
    {
      heading: "David Miller wants to send you",
      description: `$ 15.00`,
      imgSrc: "",
      headingClassName: "mt-6 text-2xl",
      descriptionClassName: "mt-8 text-4xl",
    },
  ];
};

export const sharedLinkerNameButtonFunction = (setStep: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        setStep(1);
      },
      btnText: "Enter Your Bank Details",
      type: "primary",
      // ghost: true,
      className: " mb-1 w-full",
    },
    {
      size: "large",
      btnLink: () => {},
      btnText: "Sign Up to Currency Gram",
      type: "text",
      // ghost: true,
      className: " mb-1 w-full",
    },
  ];
};

export const sharedLinkInputDataFunction: any = () => {
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
          rules: MONEYRECEIVEDVIALINKIMPORTS.firstNameFieldRules,
        },
        {
          id: 2,
          type: "text",
          name: "lastName",
          label: "Last Name",
          fieldType: "input",
          rules: MONEYRECEIVEDVIALINKIMPORTS.lastNameFieldRules,
        },
        {
          id: 4,
          type: "number",
          name: "accountNo",
          label: "Account No",
          fieldType: "input",
          rules: MONEYRECEIVEDVIALINKIMPORTS.accountNoFieldRules?.(),
        },
        {
          id: 5,
          type: "number",
          name: "sortCode",
          label: "Sort Code",
          fieldType: "input",
          rules: MONEYRECEIVEDVIALINKIMPORTS.sortCodeFieldRules?.(),
        },
      ],
    },
  ];
};

export const MONEYRECEIVEDVIALINKDATA = {
  sharedLinkerNameFunction,
  sharedLinkerNameButtonFunction,
  sharedLinkInputDataFunction,
};
