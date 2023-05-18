import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const RequestVirtualCardArray = [
  {
    id: 0,
    title: "Online Transaction",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description: "Create a virtual card for online transaction",
  },
  {
    id: 1,
    title: "Add to Apple and Google Pay",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description: "Use virtual card for Apple and Google Pay.",
  },
  {
    id: 2,
    title: "Global Acceptance",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description: "Use your virtual debit card on domestic as well as on international website.",
  },
  {
    id: 3,
    title: "Control over your spendinge",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description: "Set your own daily transaction limit to avoid any overspending.",
  },
];
export const PhysicalCardArray = [
  {
    id: 0,
    title: "Online Transaction",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description: "Create a virtual card for online transaction",
  },
  {
    id: 1,
    title: "Add to Apple and Google Pay",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description: "Use virtual card for Apple and Google Pay.",
  },
  {
    id: 2,
    title: "Global Acceptance",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description: "Use your virtual debit card on domestic as well as on international website.",
  },
  {
    id: 3,
    title: "Control over your spendinge",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description: "Set your own daily transaction limit to avoid any overspending.",
  },
];

export const RequesteCardArray = [
  {
    title: "Virtual Card",
    btnText: "Create",
    data: RequestVirtualCardArray,
  },
  // {
  //     title: 'Physical Card',
  //     btnText: 'Create',
  //     data: PhysicalCardArray,
  // },
];

export const activeCardButtonFunction = (setShowQrCode: any) => {
  return [
    {
      size: "",
      btnText: "Activate",
      type: "primary",
      icon: "",
      btnLink: () => {
        setShowQrCode(true);
      },
      className: "text-base inline-flex justify-evenly items-center h-10 px-7 font-medium",
    },
  ];
};

export const REQUESTACTIVECARDTYPEDATA = {
  RequestVirtualCardArray,
  PhysicalCardArray,
  RequesteCardArray,
  activeCardButtonFunction,
};
