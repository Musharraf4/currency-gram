import { TabsProps } from "antd";
import { RequestsAll } from "./requests-all";
import { RequestsPending } from "./requests-pending";

export const itemsRequest: TabsProps["items"] = [
  {
    key: "1",
    label: `Pending`,
    children: <RequestsPending />,
  },
  {
    key: "2",
    label: `All`,
    children: <RequestsAll />,
  },
];

export const requestPendingFunction = () => {
  return [
    {
      heading: "Send Gift To Daniyal",
      description: "Create 27th November",
      status: "Pending",
    },
    {
      heading: "Send Gift To Daniyal",
      description: "Create 27th November",
      status: "Pending",
    },
    {
      heading: "Send Gift To Daniyal",
      description: "Create 27th November",
      status: "Pending",
    },
    {
      heading: "Send Gift To Daniyal",
      description: "Create 27th November",
      status: "Pending",
    },
  ];
};

export const requestsButtonFunction = (scenerioToggle: any) => {
  return [
    {
      size: "large",
      btnLink: (e: any) => {
        // setIsApproved(true);
        scenerioToggle?.(e);
      },
      btnText: "Approve",
      type: "primary",
      //   ghost: true,
      className: "sm:ml-1 mb-1 w-full sm:w-fit",
    },
    {
      size: "large",
      btnLink: (e: any) => {
        // setIsRejected(true);
        scenerioToggle?.(e);
      },
      btnText: "Reject",
      type: "primary",
      ghost: true,
      className: "sm:ml-3 mb-1 w-full sm:w-fit",
    },
  ];
};
