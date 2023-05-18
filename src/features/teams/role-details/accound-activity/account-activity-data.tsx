export const accountsPermissionSwitch = () => [
  {
    id: 1,
    title: "Accounts",
    enableBtn: "Enable all",
    child: [
      {
        heading: "View all accounts and their balances",
        showSwitch: true,
        defaultChecked: true,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Add, Manage/Edit Accounts",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Add, Manager/Edit Account require approval",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "can approve Add, Manager/Edit Account changes",
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
    title: "Exchanges",
    child: [
      {
        heading: "Make currency changes",
        showSwitch: true,
        defaultChecked: true,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Currency Exchange require Approval",
        showSwitch: true,
        defaultChecked: true,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Can Approve Currency Change",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
    ],
  },
  {
    id: 3,
    title: "Statements",
    child: [
      {
        heading: "View Statement/Transactions",
        showSwitch: true,
        defaultChecked: true,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Edit and Download the statement",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
    ],
  },
];
