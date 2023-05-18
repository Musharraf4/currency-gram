export const accountDetailsPermissions = () => [
  {
    id: 1,
    title: "Permissions to",
    enableBtn: "Enable all",
    child: [
      {
        heading: "Can send personalized gift",
        showSwitch: true,
        defaultChecked: true,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Can receive personalized gift",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Send and receive personalized gift require approval",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
      {
        heading: "Can approve send and receive personalized gift request",
        showSwitch: true,
        defaultChecked: false,
        onClick: (e: any) => {
          console.log(e);
        },
      },
    ],
  },
];