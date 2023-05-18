// import ProfileImage from "../../../assets/images/teams/profile.png";
import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { ADDTEAMPATH } from "../../../constants/routes-constant";

export const addTeamButtonFunction = (navigate: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        navigate(ADDTEAMPATH);
      },
icon: <ICONSCONSTANT.PlusOutlined />,
      btnText: "Add",
      type: "primary",
      className: "items-center border-primary w-24 flex justify-center",
    },
  ];
};

export const buttonsFuntion = (navigate: any) => [
  {
    btnText: "Add",
    type: "primary",
    btnLink: () => navigate(ADDTEAMPATH),
    className:
      "text-sm font-medium text-white flex justify-center w-64  bg-primary rounded-lg",
  },
];

// TODO Dummy Table Data
export const TeamsManagementData: any = [
  // {
  //   key: "1",
  //   icon: <img src={ProfileImage} alt="user profile" />,
  //   name: "Daniyal Muneer",
  //   role: "Payer",
  //   email: "usman.bashir@gmail.com",
  //   status: "Active",
  //   status: "Active",
  //   status: "Active",
  //   status: "Active",
  //   status: "Active",
  //   status: "Active",
  // },
  // {
  //   key: "2",
  //   icon: <img src={ProfileImage} alt="user profile" />,
  //   name: "Daniyal Muneer",
  //   role: "Payer",
  //   email: "usman.bashir@gmail.com",
  //   status: "Active",
  // },
  // ,
  // {
  //   key: "3",
  //   icon: <img src={ProfileImage} alt="user profile" />,
  //   name: "Daniyal Muneer",
  //   role: "Payer",
  //   email: "usman.bashir@gmail.com",
  //   status: "Active",
  // },
  // {
  //   key: "4",
  //   icon: <img src={ProfileImage} alt="user profile" />,
  //   name: "Daniyal Muneer",
  //   role: "Payer",
  //   email: "usman.bashir@gmail.com",
  //   status: "Active",
  // },
  // {
  //   key: "5",
  //   icon: <img src={ProfileImage} alt="user profile" />,
  //   name: "Daniyal Muneer",
  //   role: "Payer",
  //   email: "usman.bashir@gmail.com",
  //   status: "Active",
  // },
  // {
  //   key: "6",
  //   icon: <img src={ProfileImage} alt="user profile" />,
  //   name: "Daniyal Muneer",
  //   role: "Payer",
  //   email: "usman.bashir@gmail.com",
  //   status: "Active",
  // },
];

export const TeamsManagementTaableHeader = [
  {
    dataIndex: "icon",
    key: "11",
    width: "5%",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "1",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "2",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "3",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "4",
  },
];