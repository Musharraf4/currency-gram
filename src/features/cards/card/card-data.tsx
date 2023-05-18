import { CARDIMPORT } from "./card-imports";
import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { CARDIMAGES } from "./card-images";
import businessCard from "../../../assets/images/card/business-card.svg";
import { AppTitle } from "../../../components/data-display/app-title/app-title";

export const BusinessCardFunction = (navigate: any) => {
  return [
    {
      id: "1",
      heading: "Usman Saeed - Physical Card",
      description: "Click to view your personal card",
      imgSrc: businessCard,
      // linkPath: () => {
      //   navigate(`${CARDIMPORT.CARDSPATH}${CARDIMPORT.SLASHPATH}${CARDIMPORT.CARDSETTINGSPATH}`);
      // },
    },
    {
      id: "2",
      heading: "Usman Saeed - Virtual Card",
      description: "Usman Saeed - Virtual Card",
      imgSrc: businessCard,
      // linkPath: () => {
      //   navigate(`${CARDIMPORT.CARDSPATH}${CARDIMPORT.SLASHPATH}${CARDIMPORT.CARDSETTINGSPATH}`);
      // },
    },
  ];
};
export const businessCardButtonFunction = (setIsActive: any) => {
  return [
    {
      size: "",
      btnText: "Request team cards",
      type: "primary",
      icon: "",
      btnLink: () => setIsActive(true),
      className:
        "text-base inline-flex justify-evenly items-center w-40 sm:w-48 h-10 px-7 font-medium",
    },
  ];
};

// Team Card Array
export const TeamCardArrayFunction = (setViewModal: any, navigate: any) => {
  return [
    {
      id: 0,
      linkPath: () => navigate(`${CARDIMPORT.CARDSPATH}${CARDIMPORT.SLASHPATH}${CARDIMPORT.CARDSETTINGSPATH}`),
      name: "Usman Basit",
      physical: (
        <AppTitle
          Variant="span"
          title="Physical"
          className={`px-5 py-2  text-xs font-medium rounded-2xl text-[#50d71e] bg-[#E5FCDA]`}
        />
      ),
      virtual: (
        <AppTitle
          Variant="span"
          title="Virtual"
          className={`px-5 py-2  text-xs font-medium rounded-2xl text-[#50d71e] bg-[#E5FCDA]`}
        />
      ),
      admin: "Admin",
    },
    {
      id: 1,
      linkPath: () => { setViewModal(true) },
      name: "Muhammad Ali",
      physical: (
        <AppTitle
          Variant="span"
          title="Physical"
          className={`px-5 py-2  text-xs font-medium text-[#EAB308] rounded-2xl bg-[#FEF7B7]`}
        />),
      virtual: (
        <AppTitle
          Variant="span"
          title="Virtual"
          className={`px-5 py-2  text-xs font-medium text-[#EAB308] rounded-2xl bg-[#FEF7B7]`}
        />
      ),
      admin: "Viewer",
    },
    {
      id: 2,
      name: "Muhammad Irfan",
      linkPath: () => { },
      physical: (
        <AppTitle
          Variant="span"
          title="Physical"
          className={`px-5 py-2  text-xs font-medium rounded-2xl text-[#50d71e] bg-[#E5FCDA]`}
        />
      ),
      virtual: (
        <AppTitle
          Variant="span"
          title="Virtual"
          className={`px-5 py-2  text-xs font-medium text-[#EAB308] rounded-2xl bg-[#FEF7B7]`}
        />
      ),
      admin: "Admin",
    },
    {
      id: 3,
      name: "Tayyaba",
      linkPath: () => { },
      physical: (
        <AppTitle
          Variant="span"
          title="Physical"
          className={`px-5 py-2  text-xs font-medium text-[#EAB308] rounded-2xl bg-[#FEF7B7]`}
        />
      ),
      virtual: (
        <AppTitle
          Variant="span"
          title="Virtual"
          className={`px-5 py-2  text-xs font-medium rounded-2xl text-[#50d71e] bg-[#E5FCDA]`}
        />
      ),
      admin: "Admin",
    },
  ];
};

export const virtualCardArray = [
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
    description:
      "Use your virtual debit card on domestic as well as on international website.",
  },
  {
    id: 3,
    title: "Control over your spendinge",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description:
      "Set your own daily transaction limit to avoid any overspending.",
  },
];

export const physicalCardArray = [
  {
    id: 0,
    title: "Easy transaction",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description:
      "Currency Gram let you pay straight from your bank - no need to type out payment details.",
  },
  {
    id: 1,
    title: "Withdraw from ATM anywhere",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description:
      "You can use your ATM card to withdraw cash abroad without any charges",
  },
  {
    id: 2,
    title: "Get instant notification",
    icon: <ICONSCONSTANT.CheckCircleTwoTone twoToneColor="#56cc74" />,
    description:
      "Whenever money enters or leaves your account, we'll send a real-time alert to your mobile.",
  },
];

export const RequesteCardFunction = (navigate: any, setIsActive: any) => {
  return [
    {
      title: "Virtual Card",
      btnText: "Create",
      data: virtualCardArray,
      btnLink: () => {
        navigate(
          `${CARDIMPORT.CARDSPATH}${CARDIMPORT.SLASHPATH}${CARDIMPORT.ADDCARDPARAM}${CARDIMPORT.SLASHPATH}${CARDIMPORT.CARDTYPEPARAMSCONSTANTS.virtual}`
        );
        setIsActive("Virtual card");
      },
    },
    {
      title: "Physical Card",
      btnText: "Request",
      data: physicalCardArray,
      btnLink: () => {
        navigate(
          `${CARDIMPORT.CARDSPATH}${CARDIMPORT.SLASHPATH}${CARDIMPORT.ADDCARDPARAM}${CARDIMPORT.SLASHPATH}${CARDIMPORT.CARDTYPEPARAMSCONSTANTS.physical}`
        );
        setIsActive("Physical card");
      },
    },
  ];
};

export const VirtualMembersArray = [
  {
    id: 0,
    title: "Usman Basit",
    imgSrc: CARDIMAGES.usmanBasit,
    description: "Owner",
  },
  {
    id: 1,
    title: "Mohammad Ali",
    imgSrc: CARDIMAGES.tayyab,
    description: "Owner",
  },
  {
    id: 2,
    title: "Irfan Khan",
    imgSrc: CARDIMAGES.ali,
    description: "Owner",
  },
  {
    id: 3,
    title: "Tayyab",
    imgSrc: CARDIMAGES.irfan,
    description: "Owner",
  },
];
export const PhysicalMembersArray = [
  {
    id: 0,
    title: "Jalal",
    imgSrc: CARDIMAGES.usmanBasit,
    description: "Owner",
  },
  {
    id: 1,
    title: "Asif Ullah",
    imgSrc: CARDIMAGES.tayyab,
    description: "Owner",
  },
  {
    id: 2,
    title: "Asad Ullah",
    imgSrc: CARDIMAGES.ali,
    description: "Owner",
  },
  {
    id: 3,
    title: "Misbah Ullah",
    imgSrc: CARDIMAGES.irfan,
    description: "Owner",
  },
];
export const ButtonFunction = (setShowCradSetting: any) => {
  return [
    {
      size: "large",
      btnLink: () => setShowCradSetting(false),
      btnText: "Save",
      type: "primary",
      className: "text-base font-medium mb-3 mx-auto h-12 w-4/5",
    },
  ];
};

export const CARDDATA = {
  RequesteCardFunction,
  BusinessCardFunction,
  businessCardButtonFunction,
  TeamCardArrayFunction,
  VirtualMembersArray,
  PhysicalMembersArray,
  ButtonFunction
}
