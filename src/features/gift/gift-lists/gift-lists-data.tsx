import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { GIFTLISTSIMAGES } from "./gift-lists-images";
import { GIFTLISTSIMPORTS } from "./gift-lists-imports";

const giftCardsDataFunction = (setShowScheduleGifts: any) => [
  {
    id: "1",
    heading: "Scheduled Gifts",
    description: "Gifts that are scheduled for later",
    imgSrc: GIFTLISTSIMAGES.sceduleGiftImage,
    linkPath: () => {
      setShowScheduleGifts("Scheduled Gifts");
    },
  },
  {
    id: "2",
    heading: "Sent & Received Gifts",
    description: "Gifts that are already sent or received",
    imgSrc: GIFTLISTSIMAGES.sendGiftImage,
    linkPath: () => {
      setShowScheduleGifts("Sent & Received Gifts");
    },
  },
];

const scheduleGiftsData: any = [
  // {
  //   key: "1",
  //   name: "Ikram ul Haq",
  //   schedule_on: "01-02-2023",
  //   schedule_for: "04-02-2023",
  //   gift_amount: 123123,
  //   status: "Pending",
  // },
  // {
  //   key: "2",
  //   name: "Daniyal Muneer",
  //   schedule_on: "03-02-2023",
  //   schedule_for: "05-02-2023",
  //   gift_amount: 123123,
  //   status: "Pending",
  // },
];

const scheduleGiftsColumns = (navigate: any) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "1",
    render: (name: string) => (
      <AppTitle
        title={name}
        className="text-primary cursor-pointer"
        Variant="span"
        onClick={() => {
          navigate(
            `${GIFTLISTSIMPORTS.MOREPATH}${GIFTLISTSIMPORTS.SLASHPATH}${GIFTLISTSIMPORTS.GIFTDETAILSPATH}`
          );
        }}
      />
    ),
  },
  {
    title: "Schedule on",
    dataIndex: "schedule_on",
    key: "2",
  },
  {
    title: "Schedule for",
    dataIndex: "schedule_for",
    key: "3",
  },
  {
    title: "Gift Amount",
    dataIndex: "gift_amount",
    key: "4",
    render: (amount: number) => <AppTitle title={`£${amount}`} Variant="span" />,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "5",
    render: (text: string) => <AppTitle title={text} className="text-[#FFCC00]" Variant="span" />,
  },
];

const sendReceiveGiftsData = [
  {
    key: "1",
    name: "John",
    send_or_received: "Sent",
    date: "04-02-2023",
    gift_amount: 123123,
    status: "Pending",
  },
  {
    key: "1",
    name: "John",
    send_or_received: "Received",
    date: "05-02-2023",
    gift_amount: 123123,
    status: "Completed",
  },
];

const sendReceiveGiftsColumns = (navigate: any) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "1",
    render: (name: string) => (
      <AppTitle
        title={name}
        className="text-primary cursor-pointer"
        Variant="span"
        onClick={() => {
          navigate(
            `${GIFTLISTSIMPORTS.MOREPATH}${GIFTLISTSIMPORTS.SLASHPATH}${GIFTLISTSIMPORTS.GIFTDETAILSPATH}`
          );
        }}
      />
    ),
  },
  {
    title: "Sent or Received",
    dataIndex: "send_or_received",
    key: "2",
    render: (text: string) => (
      <AppTitle
        title={text}
        className={`p-1.5 px-3 rounded-full ${
          text === "Sent" ? "text-[#B51629] bg-[#FEE5D4]" : "text-[#239A3C] bg-[#E5FCDA]"
        }`}
        Variant="span"
      />
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "3",
  },
  {
    title: "Gift Amount",
    dataIndex: "gift_amount",
    key: "4",
    render: (amount: number) => <AppTitle title={`£${amount}`} />,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "5",
    render: (text: string) => (
      <AppTitle
        title={text}
        className={`${text === "Pending" ? "text-[#FFCC00]" : "text-[#06D6A0]"}`}
      />
    ),
  },
];

export const GIFTLISTSDATA = {
  giftCardsDataFunction,
  scheduleGiftsColumns,
  scheduleGiftsData,
  sendReceiveGiftsColumns,
  sendReceiveGiftsData,
};
