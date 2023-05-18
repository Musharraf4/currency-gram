export const beneficiaryPermissionsFunction = () => [
  {
    id: 1,
    title: "Permissions to",
    enableBtn: "Enable all",
    child: [
      {
        heading: "View beneficiary ",
        showSwitch: true,
        defaultChecked: true,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Add, edit/manage Beneficiary",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Add, edit/manage Beneficiary require approval",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Can Approve Add, Edit/Manage beneficiary request",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
    ],
  },
];