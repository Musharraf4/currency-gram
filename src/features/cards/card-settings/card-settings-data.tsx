import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { CARDSETTINGIMAGES } from "./card-settings-images";
import { CARDSETTINGIMPORTS } from "./card-settings-imports";

export const virtualCardArrayFunction = (navigate: any,) => {
    return [
        {
            id: 0,
            tabCardHeading: "Set Limits",
            tabIconUserImage: CARDSETTINGIMAGES.setLimit,
            ThirdColIcon: <ICONSCONSTANT.RightOutlined />,
            linkPath: () => { navigate(`${CARDSETTINGIMPORTS.CARDSPATH}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.LIMITVIEWPARAM}${CARDSETTINGIMPORTS.SLASHPATH}virtual`) },
            className: "bg-[#FAFAFA] hover:bg-[#E5FCDA]  rounded-lg cursor-pointer",
        },
        {
            id: 1,
            tabCardHeading: "Transaction Details",
            tabIconUserImage: CARDSETTINGIMAGES.transection,
            ThirdColIcon: <ICONSCONSTANT.RightOutlined />,
            linkPath: () => { navigate() },
            className: "bg-[#FAFAFA] hover:bg-[#FEFBE0]  rounded-lg cursor-pointer",

        },
        {
            id: 2,
            tabCardHeading: "Add to Apple Wallet",
            tabIconUserImage: CARDSETTINGIMAGES.appleWallet,
            ThirdColIcon: <ICONSCONSTANT.RightOutlined />,
            linkPath: () => { navigate(`${CARDSETTINGIMPORTS.CARDSPATH}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.ADDTOWALLETPARAM}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.CARDTYPEPARAMSCONSTANTS.virtual}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.ADDTOWALLETTYPEPARAMSCONSTANTS.apple}`) },
            className: "bg-[#FAFAFA] hover:bg-[#F0F7FF]  rounded-lg cursor-pointer",

        },
        {
            id: 3,
            tabCardHeading: "Add to Google Pay",
            tabIconUserImage: CARDSETTINGIMAGES.googlePay,
            ThirdColIcon: <ICONSCONSTANT.RightOutlined />,
            linkPath: () => { navigate(`${CARDSETTINGIMPORTS.CARDSPATH}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.ADDTOWALLETPARAM}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.CARDTYPEPARAMSCONSTANTS.virtual}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.ADDTOWALLETTYPEPARAMSCONSTANTS.google}`) },
            className: "bg-[#FAFAFA] hover:bg-[#FEFBE0]  rounded-lg cursor-pointer",

        },

    ];

};

export const virtualCreditCardButtonFunction = (setIsAdded: any, setHideText:any, hideText:any) => {
    return [
        {
            size: "large",
            btnText: "Freeze",
            type: "primary",
            icon: <img src={CARDSETTINGIMAGES.freeze} alt="freeze Icon" />,
            btnLink: () => { return setIsAdded(true) },
            className: "text-sm sm:text-base inline-flex justify-evenly items-center h-10 px-7 font-medium w-20 sm:w-36 mt-3",
        },
        {
            size: "large",
            btnText: hideText ? "Hide" : "Show",
            type: "primary",
            icon: <ICONSCONSTANT.EyeOutlined />,
            btnLink: () => setHideText(!hideText),
            className: "text-sm sm:text-base inline-flex justify-evenly items-center h-10 px-7 font-medium w-20 sm:w-36 mt-3",
        },

    ];

};

export const businessPhysicalCardSettingArray = (navigate: any, setIsCountry: any, setIsCurrieries: any) => [
    {
        id: 1,
        heading: "Set Limits",
        userImage: CARDSETTINGIMAGES.limit,
        cardDescription: "Set transaction limits of Team's card",
        onCardClick: () => navigate(`${CARDSETTINGIMPORTS.CARDSPATH}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.UPSERTLIMITPARAM}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.CARDTYPEPARAMSCONSTANTS.virtual}`),
    },
    {
        id: 2,
        showSwitch: true,
        userImage: CARDSETTINGIMAGES.flag,
        heading: "Allowed Countries",
        onCardClick: () => navigate(),
        onChange: (e: any) => { setIsCountry(e) },
        cardDescription: "Manage countries where card spend allowed",

    },
    {
        id: 3,
        showSwitch: true,
        userImage: CARDSETTINGIMAGES.pound,
        onCardClick: () => navigate(),
        heading: "Accepted Currieries",
        cardDescription: "Enable/disable currencies for your card",
        onChange: (e: any) => { setIsCurrieries(e) },

    },
]
export const physicalCardArrayFunction = (setIsOtpOpen: any, navigate: any, setShowCard: any, setIsChnagePin: any) => {
    return [
        {
            id: 0,
            linkPath: () => { setIsOtpOpen(true) },
            tabCardHeading: "PIN Reminder",
            tabIconUserImage: CARDSETTINGIMAGES.pinPassword,
            ThirdColIcon: <ICONSCONSTANT.RightOutlined />,
            className: "bg-[#FAFAFA] hover:bg-[#E5FCDA]  rounded-lg cursor-pointer",
        },
        {
            id: 1,
            linkPath: () => { setIsChnagePin(true) },
            tabCardHeading: "Change PIN",
            tabIconUserImage: CARDSETTINGIMAGES.changePin,
            ThirdColIcon: <ICONSCONSTANT.RightOutlined />,
            className: "bg-[#FAFAFA] hover:bg-[#F0F7FF]  rounded-lg cursor-pointer",
        },
        {
            id: 2,
            linkPath: () => { navigate(`${CARDSETTINGIMPORTS.CARDSPATH}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.LIMITVIEWPARAM}${CARDSETTINGIMPORTS.SLASHPATH}physical`) },
            tabCardHeading: "Set Limits",
            tabIconUserImage: CARDSETTINGIMAGES.setLimit,
            ThirdColIcon: <ICONSCONSTANT.RightOutlined />,
            className: "bg-[#FAFAFA] hover:bg-[#E5FCDA]  rounded-lg cursor-pointer",
        },
        {
            id: 3,
            linkPath: () => { navigate() },
            tabCardHeading: "Transaction Details",
            tabIconUserImage: CARDSETTINGIMAGES.transection,
            ThirdColIcon: <ICONSCONSTANT.RightOutlined />,
            className: "bg-[#FAFAFA] hover:bg-[#FEFBE0]  rounded-lg cursor-pointer",
        },
        {
            id: 4,
            tabCardHeading: "Add to Apple Wallet",
            tabIconUserImage: CARDSETTINGIMAGES.appleWallet,
            ThirdColIcon: <ICONSCONSTANT.RightOutlined />,
            linkPath: () => { navigate(`${CARDSETTINGIMPORTS.CARDSPATH}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.ADDTOWALLETPARAM}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.CARDTYPEPARAMSCONSTANTS.physical}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.ADDTOWALLETTYPEPARAMSCONSTANTS.apple}`) },
            className: "bg-[#FAFAFA] hover:bg-[#F0F7FF]  rounded-lg cursor-pointer",
        },
        {
            id: 5,
            tabCardHeading: "Add to Google Pay",
            tabIconUserImage: CARDSETTINGIMAGES.googlePay,
            ThirdColIcon: <ICONSCONSTANT.RightOutlined />,
            linkPath: () => { navigate(`${CARDSETTINGIMPORTS.CARDSPATH}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.ADDTOWALLETPARAM}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.CARDTYPEPARAMSCONSTANTS.physical}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.ADDTOWALLETTYPEPARAMSCONSTANTS.google}`) },
            className: "bg-[#FAFAFA] hover:bg-[#FEFBE0]  rounded-lg cursor-pointer",
        },
        {
            id: 6,
            linkPath: () => setShowCard(true),
            tabCardHeading: "Report an Issue",
            tabIconUserImage: CARDSETTINGIMAGES.reportIssue,
            ThirdColIcon: <ICONSCONSTANT.RightOutlined />,
            className: "bg-[#FAFAFA] hover:bg-[#FEE5D4]  rounded-lg cursor-pointer",
        },

    ];

};

export const physicalCreditCardButtonFunction = (setIsAdded: any, setHideText: any, hideText: any) => {
    return [
        {
            size: "large",
            btnText: "Freeze",
            type: "primary",
            icon: <img src={CARDSETTINGIMAGES.freeze} alt="freeze Icon" />,
            btnLink: () => { return setIsAdded(true) },
            className: "text-sm sm:text-base inline-flex justify-evenly items-center h-10 px-7 font-medium w-20 sm:w-36 mt-3",
        },
        {
            size: "large",
            btnText: hideText ? "Hide" : "Show",
            type: "primary",
            icon: <ICONSCONSTANT.EyeOutlined />,
            btnLink: () => setHideText(!hideText),
            className: "text-sm sm:text-base inline-flex justify-evenly items-center h-10 px-7 font-medium w-20 sm:w-36 mt-3",
        },

    ];

};
export const countryArray = [
    {
        id: 1,
        countryflag: <div className="-mt-1"><img src={CARDSETTINGIMAGES.ukFlag} alt="uk flag" /></div>,
        countryName: "United Kingdom",
    },
    {
        id: 2,
        countryflag: <div className="-mt-1"><img src={CARDSETTINGIMAGES.germanyFlag} alt="germany flag" /></div>,
        countryName: "Germany",
    },
    {
        id: 3,
        countryflag: <div className="-mt-1"><img src={CARDSETTINGIMAGES.spainFlag} alt="spain flag" /></div>,
        countryName: "Spain",
    },
    {
        id: 4,
        countryflag: <div className="-mt-1"><img src={CARDSETTINGIMAGES.ukFlag} alt="uk flag" /></div>,
        countryName: "Itlay",
    },
    {
        id: 5,
        countryflag: <div className="-mt-1"><img src={CARDSETTINGIMAGES.ukFlag} alt="france flag" /></div>,
        countryName: "France",
    },
]

export const currieriesArray = [
    {
        id: 1,
        countryflag: <div className="-mt-1"><img src={CARDSETTINGIMAGES.ukFlag} alt="uk flag" /></div>,
        countryName: "GBP",
    },
    {
        id: 2,
        countryflag: <div className="-mt-1"><img src={CARDSETTINGIMAGES.indiaFlag} alt="india flag" /></div>,
        countryName: "INR",
    },
    {
        id: 3,
        countryflag: <div className="-mt-1"><img src={CARDSETTINGIMAGES.eurFlag} alt="eur flag" /></div>,
        countryName: "EUR",
    },
]
export const cardSettingCardFunction = (setIsActive: any) => {
    return [
        {
            id: "1",
            heading: "Physical card",
            description: "Click to view physical card details",
            imgSrc: CARDSETTINGIMAGES.physicalcard,
            linkPath: () => setIsActive('Physical card')
        },
        {
            id: "2",
            heading: "Virtual card",
            description: "View all virtual cards in one place",
            imgSrc: CARDSETTINGIMAGES.virtualcard,
            linkPath: () => setIsActive('Virtual card')
        },
    ];
};
export const ReportIssueCardFunction = (navigate: any) => {
    return [
        {
            id: "1",
            heading: "Replace card",
            description: "In case of lose, damage or stolen",
            imgSrc: CARDSETTINGIMAGES.businessCard,
            linkPath: () => navigate(`${CARDSETTINGIMPORTS.CARDSPATH}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.REPORTCARDISSUEPARAM}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.REPORTISSUEPARAMSCONSTANT.replace}`),
        },
        {
            id: "2",
            heading: "Cancel and Existing card",
            description: "Cancel to permanently block transaction",
            imgSrc: CARDSETTINGIMAGES.cancelIcon,
            linkPath: () => navigate(`${CARDSETTINGIMPORTS.CARDSPATH}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.REPORTCARDISSUEPARAM}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.REPORTISSUEPARAMSCONSTANT.block}`),
        },
    ];
};


export const CARDSETTINGSDATA = {
    ReportIssueCardFunction,
    cardSettingCardFunction,
    currieriesArray,
    countryArray,
    physicalCreditCardButtonFunction,
    physicalCardArrayFunction,
    businessPhysicalCardSettingArray,
    virtualCreditCardButtonFunction,
    virtualCardArrayFunction,

}
