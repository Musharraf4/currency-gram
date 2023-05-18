import { LandingPageTemplate } from "../../../templates/landing-page/landing-page";
import { useHome } from "./use-home";

import { BLOGPATH } from "../../../constants/sales-site-routes-constant";
import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { HOMEIMAGES } from "./home-images";

export const Home = () => {
  const {
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
  } = useHome();
  return (
    <LandingPageTemplate
      reviewData={clientReviewData}
      reviewMainTitle="What our Client"
      imgSrc={HOMEIMAGES.prepareImage}
      appDescription="Check live rates, send money securely,set rate alerts, receive notifications and many more"
      appHeading="Download the Currencygram App"
      qrCodeTitle="Scan Me"
      downloadTitle="Over 70 million downloads worldwide"
      qrCodeValue="www.google.com"
      button={downloadButton}
      blogTitle="Our blogs"
      blogSubTitle="Latest blog posts"
      blogDescription="Tools and stratagies modern teams need to help their company grow"
      blogButton={blogButton}
      blogPosts={blogPost}
      accordianData={faqAccordianData}
      faqHeading="Frequently Asked Questions about Currencygram"
      faqTitle="Everything you need to know about the currencygram"
      introHeading="Manage Your Account"
      introTitle="With nearly 30 years of currency expertise, transparent rates and an efficient online platform, we make it easy to manage and send international money transfers."
      introData={introData}
      moreIntrodata={moreIntrodata}
      communityHeading="Join Our Community ?"
      communityTitle="Sign In for the very best experience"
      communityButton={communityButton}
      readyTitle="Ready to try currencygram"
      readyImgSrc={HOMEIMAGES.readyImage}
      subText={`With personal financial management tools and instant application for 
      products,banking is now brilliant on the CG Mobile App.With personal financial management tools and instant application for 
      products, banking is now brilliant on the CG  Mobile App`}
      animateText="Solutions"
      mainIntroText="A Single App For Hassle-Free Monetary "
      heroImgSrc={HOMEIMAGES.heroImage}
      reviewMainTitle2="Saying"
      UnActiveIcon={<ICONSCONSTANT.PlusCircleOutlined className="text-2xl text-[#98A2B3]" />}
      ActiveIcon={<ICONSCONSTANT.MinusCircleOutlined className="text-2xl text-[#98A2B3]" />}
      blogLink={() => navigate(`${BLOGPATH}`)}
      reviewButton={reviewButton}
    />
  );
};
