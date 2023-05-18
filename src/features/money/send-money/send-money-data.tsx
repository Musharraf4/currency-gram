import { SENDMONEYPATH, SLASHPATH } from "../../../constants/routes-constant";
import { SENDMONEYTYPEPARAMSCONSTANTS } from "../../../constants/params-constant";
import { SENDMONEYIMAGES } from "./send-money-images";

export const sendMoneyCardsFunction = (navigate: any) => {
  return [
    {
      id: "1",
      heading: "Currency Gram to Currency Gram",
      description: "Free withdrawal limit 400 pounds",
      imgSrc: SENDMONEYIMAGES.withdrawImage,
      linkPath: () =>
        navigate(`${SENDMONEYPATH}${SLASHPATH}${SENDMONEYTYPEPARAMSCONSTANTS.CGTOCG}`),
    },
    {
      id: "2",
      heading: "Make a Local Bank Transfer",
      description: "Also set up scheduled payments",
      imgSrc: SENDMONEYIMAGES.homeImage,
      linkPath: () => navigate(`${SENDMONEYPATH}${SLASHPATH}${SENDMONEYTYPEPARAMSCONSTANTS.local}`),
    },
    {
      id: "3",
      heading: "Transfer Internationally",
      description: "Powered by Currency Gram",
      imgSrc: SENDMONEYIMAGES.transferImage,
      linkPath: () =>
        navigate(`${SENDMONEYPATH}${SLASHPATH}${SENDMONEYTYPEPARAMSCONSTANTS.international}`),
    },
    {
      id: "4",
      heading: "Share a Link",
      description: "You don’t need their bank details",
      imgSrc: SENDMONEYIMAGES.linkImage,
      linkPath: () => navigate(`${SENDMONEYPATH}${SLASHPATH}${SENDMONEYTYPEPARAMSCONSTANTS.link}`),
    },
    {
      id: "5",
      heading: "Send Money to Business",
      description: "One-Off or repeating",
      imgSrc: SENDMONEYIMAGES.briefcaseImage,
      linkPath: () =>
        navigate(`${SENDMONEYPATH}${SLASHPATH}${SENDMONEYTYPEPARAMSCONSTANTS.business}`),
    },
    {
      id: "6",
      heading: "Donate Money",
      description: "One-Off or repeating",
      imgSrc: SENDMONEYIMAGES.heartImage,
      linkPath: () =>
        navigate(`${SENDMONEYPATH}${SLASHPATH}${SENDMONEYTYPEPARAMSCONSTANTS.donate}`),
    },
  ];
};
