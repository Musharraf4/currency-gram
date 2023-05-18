export const virtualCardsPermissionsFunction = () => [
  {
    id: 1,
    title: "Permissions to",
    enableBtn: "Enable all",
    child: [
      {
        heading: "View Cards (with limited view)",
        showSwitch: true,
        defaultChecked: true,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Add, manage and remove virtual card",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Add,manage and remove virtual card require Approval",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Can Approve Add, manage and remove virtual card Request",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
    ],
  },
  {
    id: 2,
    title: "Physical",
    child: [
      {
        heading: "View physical Cars own by your team",
        showSwitch: true,
        defaultChecked: true,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Add, manage and remove Physical card of yourself and team",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Add, manage and remove Physical card require Approval",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Can Approve Add, manage and remove Physical card Request",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
    ],
  },
];

export const CARDMANAGEMENTDATAPERMISSION = {
  virtualCardsPermissionsFunction
}