import { REASSIGNIMAGES } from "./reassign-role-images";

export const RequestPhysicalFormFieldsInputFunction = () => {
  return [
    {
      fields: [
        {
          id: 1,
          label: "Email",
          name: "email",
          fieldType: "input",
          size: "large",
          rules: [
            { required: true, message: "Required Field", whitespace: true },
          ],
        },
      ],
    },
  ];
};

export const treeData = [
  {
    id: 4,
    value: {
      value: (
        <div className="flex items-center w-full">
          <img src={REASSIGNIMAGES.adminIconImage} alt="icons" />
          <span className="ml-2 text-sm font-bold">Admin</span>
        </div>
      ),
    },
    dropdown: [
      { value: "send-invite", title: "Switch role" },
      { value: "Admin", title: "View Details" },
    ],
  },
  {
    id: 2,
    value: {
      value: (
        <div className="flex items-center w-full">
          <img src={REASSIGNIMAGES.prepareIconImage} alt="icons" />
          <span className="ml-2 text-sm font-bold">Preparer</span>
        </div>
      ),
    },
    dropdown: [
      { value: "send-invite", title: "Switch role" },
      { value: "Preparer", title: "View Details" },
    ],
  },
  {
    id: 3,
    value: {
      value: (
        <div className="flex items-center w-full">
          <img src={REASSIGNIMAGES.payerIconImage} alt="icons" />
          <span className="ml-2 text-sm font-bold">Payer</span>
        </div>
      ),
    },
    dropdown: [
      { value: "send-invite", title: "Switch role" },
      { value: "Payer", title: "View Details" },
    ],
  },
];
