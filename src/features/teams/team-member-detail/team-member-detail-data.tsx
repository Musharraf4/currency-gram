import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const roleDataFunction = ({ navigate, param, setIsDeleting }: any) => [
  {
    title: "Switch role",
    child: [
      {
        heading: "Role (Admin)",
        imgSrc: <ICONSCONSTANT.UserAddOutlined />,
        linkPath: (e: any, active: any) => {
          navigate(
            `/team-management/member-details/${param?.id}/reassign-role`
          );
        },
      },
    ],
  },
  {
    title: "Finances",
    child: [
      {
        heading: "Transactions",
        imgSrc: <ICONSCONSTANT.SwapOutlined />,
        linkPath: (e: any, active: any) => {
          navigate();
        },
      },
      {
        heading: "Delete User",
        imgSrc: <ICONSCONSTANT.DeleteOutlined />,
        linkPath: (e: any, active: any) => {
          navigate(setIsDeleting(true));
        },
      },
    ],
  },
];
