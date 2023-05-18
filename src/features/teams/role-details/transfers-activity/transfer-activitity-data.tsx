export const transfersPermissionsFunction = () => [
  {
    id: 1,
    title: "Permissions to",
    enableBtn: "Enable all",
    child: [
      {
        heading: "Make single Payment(Including scheduled)",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Single Transfer(Including scheduled) Require Approval",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Make Bulk payment (Including scheduled)",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Bulk Transfer(Including scheduled) Require Approval",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Can approve transfer request (single/bulk)",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
    ],
  },
];
