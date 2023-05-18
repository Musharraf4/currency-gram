import { useNavigate } from "react-router-dom";
import {
  blogButtonFunction,
  blogPostFunction,
  clientReviewDataFunction,
  communityButtonFunction,
  downloadButtonFunction,
  faqAccordianDataFunction,
  introDataFunction,
  moreIntroDataFunction,
  reviewButtonFunction,
} from "./home-data";

export const useHome = () => {
  const navigate = useNavigate();
  const clientReviewData = clientReviewDataFunction();
  const downloadButton = downloadButtonFunction();
  const blogButton = blogButtonFunction(navigate);
  const blogPost = blogPostFunction();
  const faqAccordianData = faqAccordianDataFunction();
  const introData = introDataFunction();
  const moreIntrodata = moreIntroDataFunction();
  const communityButton = communityButtonFunction(navigate);
  const reviewButton = reviewButtonFunction(navigate);
  return {
    clientReviewData,
    downloadButton,
    blogButton,
    blogPost,
    faqAccordianData,
    introData,
    moreIntrodata,
    communityButton,
    navigate,
    reviewButton,
  };
};
