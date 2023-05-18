import { ADDTEAMIMAGES } from "./add-team-images";

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
    id: 1,
    value: {
      value: (
        <div className="flex items-center w-full">
          <img src={ADDTEAMIMAGES.viewIconImage} alt="icons" />
          <span className="ml-2 text-sm font-bold">Viewer</span>
        </div>
      ),
    },
    dropdown: [
      { value: "viewer", title: "Send Invite" },
      { value: "Viewer", title: "View Details" },
    ],
  },
  {
    id: 2,
    value: {
      value: (
        <div className="flex items-center w-full">
          <img src={ADDTEAMIMAGES.prepareIconImage} alt="icons" />
          <span className="ml-2 text-sm font-bold">Preparer</span>
        </div>
      ),
    },
    dropdown: [
      { value: "preparer", title: "Send Invite" },
      { value: "Preparer", title: "View Details" },
    ],
  },
  {
    id: 3,
    value: {
      value: (
        <div className="flex items-center w-full">
          <img src={ADDTEAMIMAGES.payerIconImage} alt="icons" />
          <span className="ml-2 text-sm font-bold">Payer</span>
        </div>
      ),
    },
    dropdown: [
      { value: "payer", title: "Send Invite" },
      { value: "Payer", title: "View Details" },
    ],
  },
  {
    id: 4,
    value: {
      value: (
        <div className="flex items-center w-full">
          <img src={ADDTEAMIMAGES.adminIconImage} alt="icons" />
          <span className="ml-2 text-sm font-bold">Admin</span>
        </div>
      ),
    },
    dropdown: [
      { value: "admin", title: "Send Invite" },
      { value: "Admin", title: "View Details" },
    ],
  },
];
