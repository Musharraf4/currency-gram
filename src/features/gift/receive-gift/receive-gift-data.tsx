import frame1 from "../../../assets/images/gift/Frame_1.svg";

const giftDetailsFieldsFuntion = () => {
  return [
    {
      header: "",
      fields: [
        {
          id: 1,
          label: "First Name",
          name: "first_name",
          fieldType: "input",
          type: "text",
          size: "large",
          className: "dynamic-form-input-elegant",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 2,
          label: "Last Name",
          name: "last_name",
          fieldType: "input",
          type: "text",
          size: "large",
          className: "dynamic-form-input-elegant",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 1,
          label: "Account No",
          name: "account_no",
          fieldType: "input",
          type: "number",
          size: "large",
          className: "dynamic-form-input-elegant",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 1,
          label: "Sort Code",
          name: "sort_code",
          fieldType: "input",
          type: "number",
          size: "large",
          className: "dynamic-form-input-elegant",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
      ],
    },
  ];
};

const receiveGiftbuttonDataFunction = (setTitle: any) => [
  {
    size: "large",
    btnLink: () => {
      setTitle("Add Details");
    },
    btnText: "Enter Your Bank Details",
    type: "primary",
    className: " mb-5 w-4/5 sm:w-3/5",
  },
  {
    size: "large",
    btnLink: () => {},
    btnText: "Sign Up to Currency Gram",
    type: "secondary",
    className: " mb-5 w-4/5 sm:w-3/5 text-primary",
  },
];

const dummyGiftImageData = {
  image: frame1,
  // color: "#B7276B",
  message: "Have a great day!",
  amount: "45",
};

export const RECEIVEGIFTDATA = {
  dummyGiftImageData,
  giftDetailsFieldsFuntion,
  receiveGiftbuttonDataFunction,
};
