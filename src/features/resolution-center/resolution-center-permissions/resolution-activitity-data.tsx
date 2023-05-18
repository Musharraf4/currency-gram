export const resolutionPermissionsFunction = () => [
  {
    id: 1,
    title: "Permissions to",
    enableBtn: "Enable all",
    child: [
      {
        heading: "Can view resolution center",
        showSwitch: true,
        defaultChecked: true,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Can add manage and delete ticket",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Add Manage and delete tickets require approval",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Can approve Add Manage and delete tickets",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
    ],
  },
];