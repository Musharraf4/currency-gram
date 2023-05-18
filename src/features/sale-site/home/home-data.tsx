import { Avatar } from "antd";
import { BLOGPATH, COMMUNITYPATH } from "../../../constants/sales-site-routes-constant";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { HOMEIMAGES } from "./home-images";

export const introDataFunction = () => [
  {
    id: 1,
    reviewerName: "Money Transfer",
    reviewerProfile: HOMEIMAGES.moneyTransferImage,
    review: "Send and receive money with no hidden fees. Plus, transfers are always instant. ",
    linkText: (
      <div className="flex items-center justify-end">
        <AppTitle title="Find Out More" /> <ICONSCONSTANT.ArrowRightOutlined className="ml-3" />
      </div>
    ),
  },
  {
    id: 2,
    reviewerName: "Card Control",

    reviewerProfile: HOMEIMAGES.cardControlImage,
    review: "Offering Both Virtual and physical cards. Connect your card to tap and pay with you.",
    linkText: (
      <div className="flex items-center justify-end">
        <AppTitle title="Find Out More" /> <ICONSCONSTANT.ArrowRightOutlined className="ml-3" />
      </div>
    ),
  },
  {
    id: 3,
    reviewerName: "Bulk Payment",
    reviewerProfile: HOMEIMAGES.bulkPaymentImage,
    review: "Save time and effort by paying multiple payments to different recipients at once.",
    linkText: (
      <div className="flex items-center justify-end">
        <AppTitle title="Find Out More" /> <ICONSCONSTANT.ArrowRightOutlined className="ml-3" />
      </div>
    ),
  },
  {
    id: 4,
    reviewerName: "Chipin",
    reviewerProfile: HOMEIMAGES.chipInImage,
    review: "Open a business account for the online deposit of your share capital",
    linkText: (
      <div className="flex items-center justify-end">
        <AppTitle title="Find Out More" /> <ICONSCONSTANT.ArrowRightOutlined className="ml-3" />
      </div>
    ),
  },
];

export const moreIntroDataFunction = () => [
  {
    heading: (
      <div className="flex items-center font-medium text-4xl text-secondary-text">
        <AppTitle title="Pots" /> <Avatar src={HOMEIMAGES.potMoneyImage} className="mx-.5 p-1" />{" "}
        <AppTitle title="Money" />
      </div>
    ),
    description:
      "Currency Gram offers customers to set aside money into different pots to ensure they have enough for regular payments such as rent, bills and subscriptions.",
    descriptionClassName: "text-[#7B6A83] text-lg font-normal",
    imgSrc: HOMEIMAGES.potImage,
    subtitle: (
      <div className="flex items-center font-bold">
        <AppTitle title="Find Out More" /> <ICONSCONSTANT.ArrowRightOutlined className="ml-3" />
      </div>
    ),
  },
  {
    heading: (
      <div className="flex items-center font-medium text-4xl text-secondary-text">
        <AppTitle title="Personalized" />{" "}
        <Avatar src={HOMEIMAGES.personalGiftImage} className="mx-.5 p-1" />{" "}
        <AppTitle title="gifts" />
      </div>
    ),
    descriptionClassName: "text-[#7B6A83] text-lg font-normal",
    description:
      "Currency Gram offers customers to set aside money into different pots to ensure they have enough for regular payments such as rent, bills and subscriptions.",
    imgSrc: HOMEIMAGES.giftImage,
    setPositionClass: "flex-row-reverse",
    subtitle: (
      <div className="flex items-center font-bold">
        <AppTitle title="Find Out More" /> <ICONSCONSTANT.ArrowRightOutlined className="ml-3" />
      </div>
    ),
  },
];

export const clientReviewDataFunction = () => [
  {
    id: 1,
    reviewerName: "Jose Bethancourt ",
    reviewerProfession: "CEO Grad Joy",
    reviewerProfile: HOMEIMAGES.joseImage,
    review:
      "Method saved the day! We were able to quickly integrate and provide a full experience to our users.",
  },
  {
    id: 2,
    reviewerName: "Kevin Griffiths",
    reviewerProfession: "Founder",
    reviewerProfile: HOMEIMAGES.kevinImage,
    review: `we had to send checks to pay our users' credit cards. Method has improved our user experience.`,
  },
  {
    id: 3,
    reviewerName: "Olivia Sacks",
    reviewerProfession: "VP @ Global Benefits Co",
    reviewerProfile: HOMEIMAGES.kevinImage,
    review: `Our financial wellness offering lacked the ability to easily move money on behalf of our users.`,
  },
  {
    id: 4,
    reviewerName: "Kevin Griffiths",
    reviewerProfession: "Founder",
    reviewerProfile: HOMEIMAGES.kevinImage,
    review: `we had to send checks to pay our users' credit cards. Method has improved our user experience.`,
  },
  {
    id: 5,
    reviewerName: "Olivia Sacks",
    reviewerProfession: "VP @ Global Benefits Co",
    reviewerProfile: HOMEIMAGES.oliviaImage,
    review: `Our financial wellness offering lacked the ability to easily move money on behalf of our users.`,
  },
];

export const downloadButtonFunction = (link?: any) => {
  return [
    {
      heading: "Download on the",
      description: "App Store",
      imgSrc: HOMEIMAGES.appleWhiteImage,
    },
    {
      heading: "Get it on",
      description: "Play Store",
      imgSrc: HOMEIMAGES.playstoreImage,
    },
  ];
};
export const blogButtonFunction = (navigate?: any) => {
  return [
    {
      size: "large",
      btnLink: () => navigate(`${BLOGPATH}`),
      btnText: "View all posts",
      type: "primary",
      className: " mb-3",
    },
  ];
};

export const communityButtonFunction = (navigate?: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        navigate(`${COMMUNITYPATH}`);
      },
      btnText: "Join Community",
      type: "primary",
      className: " mb-3 h-10",
    },
  ];
};

export const blogPostFunction = () => {
  return [
    {
      heading: "Design",
      description: (
        <div className="flex items-center justify-between">
          <AppTitle title="UX review presentations" />{" "}
          <Avatar src={HOMEIMAGES.arrowTiltImage} alt="" className="p-1 mr-2" size="small" />
        </div>
      ),
      imgSrc: HOMEIMAGES.blogImage,
      subtitle:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      name: "Olivia Rhye",
      date: "20 Jan 2022",
      userImg: HOMEIMAGES.profileImage,
    },
    {
      heading: "Product",
      description: (
        <div className="flex items-center justify-between">
          <AppTitle title="Migrating to Linear 101" />
          <Avatar src={HOMEIMAGES.arrowTiltImage} alt="" className="p-1 mr-2" size="small" />
        </div>
      ),
      subtitle:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      imgSrc: HOMEIMAGES.blog1Image,
      name: "Phoenix Baker",
      date: "20 Jan 2022",
      userImg: HOMEIMAGES.profileImage,
    },
    {
      heading: "Software Engineering",
      description: (
        <div className="flex items-center justify-between">
          <AppTitle title="Building your API Stack" />
          <Avatar src={HOMEIMAGES.arrowTiltImage} alt="" className="p-1 mr-2" size="small" />
        </div>
      ),
      subtitle:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      imgSrc: HOMEIMAGES.blog2Image,
      setPositionClass: "flex-row-reverse",
      name: "Lana Steiner",
      date: "20 Jan 2022",
      userImg: HOMEIMAGES.profileImage,
    },
  ];
};

export const faqAccordianDataFunction = () => [
  {
    data: [
      {
        header: "What is the difference between currencygram personal and Business account",
        key: "1",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum modi quo possimus, blanditiis tenetur, maiores, esse voluptatum harum qui laudantium!`,
      },
      {
        header: "How do you qualify for a currencygram Business account",
        key: "2",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum modi quo possimus, blanditiis tenetur, maiores, esse voluptatum harum qui laudantium!`,
      },
      {
        header: "How long does verification take place",
        key: "3",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum modi quo possimus, blanditiis tenetur, maiores, esse voluptatum harum qui laudantium!`,
      },
      {
        header: "Can i open currencygram Business account without money",
        key: "4",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum modi quo possimus, blanditiis tenetur, maiores, esse voluptatum harum qui laudantium!`,
      },
      {
        header: "Is Currecnygram business safe",
        key: "5",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum modi quo possimus, blanditiis tenetur, maiores, esse voluptatum harum qui laudantium!`,
      },
    ],
  },
];

export const reviewButtonFunction = (navigate?: any) => {
  return [
    {
      size: "large",
      btnLink: () => {},
      type: "primary",
      shape: "circle",
      icon: <ICONSCONSTANT.CaretLeftOutlined />,
      className: "shadow-lg border-0",
    },
    {
      size: "medium",
      btnLink: () => {},
      // type: "primary",
      shape: "circle",
      icon: <ICONSCONSTANT.CaretRightOutlined className="align-middle" />,
      className: " ml-3 shadow-sm border-0",
    },
  ];
};
