import user from "../../../assets/images/community/profile-community.png";
import tag from "../../../assets/icons/tag.svg";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { Avatar } from "antd";
import { setIsQuestionModalOpen } from "../../../store/layout/layout-slice";

import answer from "../../../assets/icons/answer.png";
import react from "../../../assets/icons/react.png";
import {
  COMMUNITYPATH,
  COMMUNITYQUESTIONSPARAM,
} from "../../../constants/sales-site-routes-constant";
import { SLASHPATH } from "../../../constants/routes-constant";
import { ICONSCONSTANT } from "../../../constants/icons-constant";
export const iconButtonFunction = (reactbutton?: any) => {
  return [
    {
      title: "React",
      button: [
        {
          size: "small",
          btnLink: () => {},
          btnText: (
            <img
              src={react}
              alt="/>"
              className="w-full h-full grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
            />
          ),
          type: "text",
          shape: "circle",
          className: "bg-smoke-white",
          btnClassName:
            "w-[16px] h-[16px] rounded-full border-smoke-white border-solid group border-[.5px] hover:border-primary py-1 px-1.5",
        },
      ],
    },
    {
      title: "Answer",
      button: [
        {
          size: "small",
          btnLink: () => {},
          btnText: (
            <img
              src={answer}
              alt="/>"
              className="w-full h-full grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
            />
          ),
          type: "text",
          shape: "circle",
          className: "bg-smoke-white ml-2",
          btnClassName:
            "w-[16px] h-[16px] rounded-full border-smoke-white border-solid group border-[.5px] hover:border-primary py-1 px-1.5",
        },
      ],
    },
  ];
};

export const questionsDataFunction = (navigate?: any) => [
  {
    date: "Monday, January 17th",
    questions: [
      {
        id: 1,
        userImage: user,
        posterName: "Saqib Taimoor",
        time: "11:50pm",
        question: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sint est laboriosam.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore!`,
        iconButton: iconButtonFunction?.(),
        onClickAnswer: () =>
          navigate(`${COMMUNITYPATH}${SLASHPATH}${COMMUNITYQUESTIONSPARAM}${SLASHPATH}${1}`),
      },
      {
        userImage: user,
        posterName: "Saqib Taimoor",
        time: "11:50pm",
        question: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sint est laboriosam.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore!`,
      },
      {
        userImage: user,
        posterName: "Saqib Taimoor",
        time: "11:50pm",
        question: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sint est laboriosam.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore!`,
      },
    ],
  },
  {
    date: "Monday, November 13th",
    questions: [
      {
        userImage: user,
        posterName: "Saqib Taimoor",
        time: "11:50pm",
        question: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sint est laboriosam.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore!`,
      },
      {
        userImage: user,
        posterName: "Saqib Taimoor",
        time: "11:50pm",
        question: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sint est laboriosam.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore!`,
      },
      {
        userImage: user,
        posterName: "Saqib Taimoor",
        time: "11:50pm",
        question: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sint est laboriosam.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore!`,
      },
    ],
  },
  {
    date: "Monday, April 25th",
    questions: [
      {
        userImage: user,
        posterName: "Saqib Taimoor",
        time: "11:50pm",
        question: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sint est laboriosam.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore!`,
      },
      {
        userImage: user,
        posterName: "Saqib Taimoor",
        time: "11:50pm",
        question: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sint est laboriosam.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore!`,
      },
      {
        userImage: user,
        posterName: "Saqib Taimoor",
        time: "11:50pm",
        question: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sint est laboriosam.`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi veniam similique sunt, commodi esse amet qui hic dicta dolore!`,
      },
    ],
  },
];

export const dynamicData = [
  {
    id: 1.1,
    image: tag,
    name: "All Topics",
  },
  {
    id: 1,
    image: tag,
    name: "General",
  },
  {
    id: 2,
    image: tag,
    name: "International Transactions",
  },
  {
    id: 3,
    image: tag,
    name: "CG to CG Transactions",
  },
  {
    id: 4,
    image: tag,
    name: "QR Payments",
  },
  {
    id: 5,
    image: tag,
    name: "Personalized Gifts",
  },
  {
    id: 6,
    image: tag,
    name: "Physical Card",
  },
  {
    id: 7,
    image: tag,
    name: "Virtual Card",
  },
];
export const selectItems = (setSelected: any) => {
  const newItems = dynamicData.map((x: any) => ({
    key: x?.id,
    label: (
      <div onClick={(e) => setSelected(x?.name)}>
        <Avatar src={x?.image} size="small" className="p-1" />
        <AppTitle title={x?.name} Variant="span" className="ml-2" />{" "}
      </div>
    ),
  }));
  return newItems;
};
export const addQuestionButtonFunction = (dispatch?: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        dispatch(setIsQuestionModalOpen());
      },
      btnText: "Add Question",
      icon: <ICONSCONSTANT.PlusOutlined />,
      btnVariant: "span",
      type: "default",
      // ghost: true,
      className: "ml-1 mb-1 w-full",
    },
  ];
};
