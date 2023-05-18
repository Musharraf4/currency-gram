import caution from "../../../assets/images/settings/caution.svg";
import card from "../../../assets/images/settings/card.svg";
import amico from "../../../assets/images/settings/amico.svg";
import empty from "../../../assets/icons/empty.svg";
import transaction from "../../../assets/icons/transaction.svg";
import balance from "../../../assets/icons/balance.svg";

export const closeAccountRadioDataFunction = (radioOnChange: any, selectedReason: any) => [
  {
    radioValue: selectedReason,
    onChange: (e: any) => radioOnChange?.(e),
    data: [
      {
        radioLabel: "Problem with my transfer",
        value: "transferProblem",
      },
      {
        radioLabel: "Coudn’t find the currency I wanted",
        value: "currencyNotAvailable",
      },
      {
        radioLabel: "Not using my account anymore",
        value: "notUsedAccount",
      },
      {
        radioLabel: "Other reasons",
        value: "otherReasons",
      },
    ],
  },
];

export const closeAccountButtonFunction = (goForward: any) => {
  return [
    {
      size: "large",
      btnLink: () => {},
      btnText: "Keep Account Open",
      type: "primary",
      className: " mb-3 w-full ",
    },
    {
      size: "large",
      btnLink: () => goForward?.(),
      btnText: "Close Account",
      type: "primary",
      ghost: true,
      className: " mb-1 w-full ",
    },
  ];
};

export const beforeCloseCautionFunction = () => {
  return [
    {
      heading: "Hi Waseem,",
      description:
        "Before you can close your account, a few things are needed. you can come back to this page once you’re done",
      subtitle: "Things left for you to do",
      imgSrc: caution,
      extraChild: [
        {
          heading: "Empty your account",
          description: "You have 12.45 GBP and 250.00 PKR in your account.",
          imgSrc: empty,
          userDetailsClassName: "mx-0 px-0",
          setActiveClass: "shadow-sm w-1/2 mt-3",
        },
      ],
    },
  ];
};
export const finalVerifyBeforeCloseCautionFunction = () => {
  return [
    {
      heading: "Close your account",
      subtitle2: `After closing the account, it can be reactivated within 6 months,
      otherwise account will permanently closed.`,
      imgSrc: caution,
      extraChild: [
        {
          heading: "Positive balance",
          description: "All your account should have 0 balance",
          imgSrc: balance,
          userDetailsClassName: "mx-0 px-0",
          setActiveClass: "shadow-sm w-1/2 mt-3",
        },
        {
          heading: "Pending transactions",
          description: "All your account should be performed",
          imgSrc: transaction,
          userDetailsClassName: "mx-0 px-0",
          setActiveClass: "shadow-sm w-1/2 mt-3",
        },
      ],
    },
  ];
};

export const warning2BeforeCloseCautionFunction = () => {
  return [
    {
      heading: "You will not be able to use your cards",
      description: `All physical and virtual cards will be terminated`,
      imgSrc: card,
      // headingClassName: "mt-6",
      // descriptionClassName: "mt-8",
    },
  ];
};
export const warning1BeforeCloseCautionFunction: any = () => {
  return [
    {
      heading: "You’ll not be able to redeem your perks",
      description: `Cashbacks will be cancelled as well`,
      imgSrc: amico,
      // headingClassName: "mt-6 font-medium",
      // descriptionClassName: "mt-8",
    },
  ];
};
