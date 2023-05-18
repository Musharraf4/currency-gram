export const dynamicData = [
  {
    id: 1,

    name: "General",
  },
  {
    id: 2,

    name: "International Transactions",
  },
  {
    id: 3,

    name: "CG to CG Transactions",
  },
  {
    id: 4,

    name: "QR Payments",
  },
  {
    id: 5,

    name: "Personalized Gifts",
  },
  {
    id: 6,

    name: "Physical Card",
  },
  {
    id: 7,

    name: "Virtual Card",
  },
];

export const addQuestionCommunityFunction = () => {
  return [
    {
      fields: [
        {
          id: 1,
          //   label: "Display Name",
          name: "displayName",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Please enter the first name", whitespace: true }],
        },
        {
          id: 2,
          //   label: "description",
          name: "description",
          fieldType: "quill",
          size: "large",
          rules: [{ required: true, message: "Please enter the first name", whitespace: true }],
        },
        {
          id: 3,
          label: "Select Topic",
          name: "info",
          size: "large",
          options: dynamicData.map((x: any) => ({ value: x?.name, label: x?.name })),
          rules: [{ required: true, message: "Please enter the last name", whitespace: true }],
          fieldType: "select",
        },
      ],
    },
  ];
};
