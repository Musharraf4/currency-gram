import support from "../../assets/icons/support.svg";
import community from "../../assets/icons/community.svg";
import faqs from "../../assets/icons/faqs.svg";
import { CASELISTSPATH, FAQPATH, HELPPATH, SLASHPATH } from "../../constants/routes-constant";
import { COMMUNITYPATH } from "../../constants/sales-site-routes-constant";

export const helpCardsData = (navigate: any) => [
  {
    id: "1",
    heading: "Resolution Center",
    description: "Have an issue lodge a complaint",
    imgSrc: support,
    linkPath: () => navigate(`${HELPPATH}${SLASHPATH}${CASELISTSPATH}`),
  },
  {
    id: "2",
    heading: "Community",
    description: "Get connected with our community",
    imgSrc: community,
    linkPath: () => navigate(`${COMMUNITYPATH}`),
  },
  {
    id: "3",
    heading: "FAQs",
    description: "Have any query check our FAQs",
    imgSrc: faqs,
    linkPath: () => navigate(`${HELPPATH}${SLASHPATH}${FAQPATH}`),
  },
];
