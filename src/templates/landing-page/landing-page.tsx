import { Col, QRCode, Row } from "antd";
import { AppAccordion } from "../../components/data-display/app-accordion/app-accordion";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { AppImageCard } from "../../components/cards/app-image-card/app-image-card";
import { AppReviewCard } from "../../components/cards/app-review-card/app-review-card";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppChildrenCard } from "../../components/cards/app-children-card/app-children-card";
import { AppListCard } from "../../components/cards/app-list-card/app-list-card";
import { AppAnimateText } from "../../components/data-display/app-animate-text/app-animate-text";
import arrow from "../../assets/sales-site/images/home/arrow.png";
import intersect from "../../assets/sales-site/images/home/Intersect.png";

export const LandingPageTemplate = (props: any) => {
  const {
    reviewMainTitle,
    reviewMainTitle2,
    reviewData,
    appHeading,
    appDescription,
    imgSrc,
    qrCodeTitle,
    qrCodeValue,
    downloadTitle,
    button,
    blogTitle,
    blogSubTitle,
    blogDescription,
    blogButton,
    blogPosts,
    accordianData,
    faqHeading,
    faqTitle,
    introHeading,
    introTitle,
    introData,
    moreIntrodata,
    communityClassName,
    communityHeading,
    communityTitle,
    communityButton,
    readyClassName,
    readyTitle,
    readyImgSrc,
    mainIntroText,
    subText,
    animateText,
    heroImgSrc,
    ActiveIcon,
    UnActiveIcon,
    reviewButton,
  } = props;
  return (
    <>
      <div className="super-intro bg-gradient-to-r from-[#DFDFDF05] via-[#007BFF0A] to-[#007BFF1A] flex py-8 min-h-[55vh]">
        <Row>
          <Col xs={1} lg={3}></Col>
          <Col xs={22} lg={18}>
            <AppAnimateText
              mainText={mainIntroText}
              subText={subText}
              textToAnimante={animateText}
              imgSrc={heroImgSrc}
              userImageClassName="w-full"
              arrow={arrow}
            />
          </Col>
          <Col xs={1} lg={3}></Col>
        </Row>
      </div>
      <div className="intro my-8">
        <Row>
          <Col xs={1} lg={3}></Col>
          <Col xs={22} lg={18}>
            <div className="">
              <AppTitle
                title={introHeading}
                className="text-secondary-text text-4xl font-medium w-full"
              />
              <AppTitle title={introTitle} className="text-[#7B6A83] my-4 lg:my-8 text-lg w-full" />
            </div>
            <Row gutter={{ md: 24, lg: 32 }}>
              {introData?.length &&
                introData?.map((singleReview: any) => (
                  <Col xs={24} md={12} className="mb-4 lg:mb-10">
                    <AppReviewCard
                      outerDivClassName={`bg-white ml-0 shadow-sm rounded-2xl mb-3 p-4 lg:mb-10 hover:bg-[#E6F2FB] ${singleReview?.outerDivClassName}`}
                      headingClassName={`text-xl font-normal text-[#333333] ${singleReview?.headingClassName}`}
                      heading={singleReview?.reviewerName}
                      description={singleReview?.reviewerProfession}
                      imgSrc={singleReview?.reviewerProfile}
                      reviewDetail={singleReview?.review}
                      linkText={singleReview?.linkText}
                      descriptionClassName={"text-[#7A6982] text-base font-normal"}
                      userImageClassName={"p-2"}
                    />
                  </Col>
                ))}
            </Row>
            <div className="my-6 lg:my-14">
              {!!moreIntrodata?.length &&
                moreIntrodata?.map((singleData: any) => (
                  <>
                    <AppListCard
                      heading={singleData?.heading}
                      headingClassName={singleData?.headingClassName}
                      descriptionClassName={singleData?.descriptionClassName}
                      description={singleData?.description}
                      extraChild={singleData?.extraChild}
                      imgSrc={singleData?.imgSrc}
                      subtitleClassName={"text-primary mt-3"}
                      subtitle={singleData?.subtitle}
                      setPositionClass={singleData?.setPositionClass}
                      userImageClassName="w-full"
                    />
                  </>
                ))}
            </div>
          </Col>
          <Col xs={1} lg={3}></Col>
        </Row>
      </div>
      <div>
        <div className="bg-[url('../src/assets/sales-site/images/home/Intersect.png')] bg-no-repeat max-w-sm min-h-xs">
          <img src={intersect} alt="" className="invisible" />
        </div>
      </div>
      <div className="ready mb-8">
        <div className={` ${readyClassName}`}>
          <div className="max-w-full relative">
            <img src={readyImgSrc} className="w-full" alt="" />
            <AppTitle
              title={readyTitle}
              className="text-primary-text text-sm md:text-3xl font-medium text-center absolute w-full top-1/4"
            />
          </div>
        </div>
      </div>
      <div className="commmunity my-6 lg:my-14 ">
        <Row>
          <Col xs={1} lg={3}></Col>
          <Col xs={22} lg={18}>
            <div
              className={`h-full bg-[url('../src/assets/sales-site/images/home/community-bg.png')] bg-no-repeat bg-cover ${communityClassName}`}
            >
              <Row className="items-center h-full my-4">
                <Col xs={24} md={8}></Col>
                <Col xs={24} lg={8} className="text-center">
                  <AppTitle
                    title={communityHeading}
                    className="text-sm md:text-3xl text-secondary-text"
                  />
                  <AppTitle
                    title={communityTitle}
                    className="text-xs md:text-base font-normal text-primary mt-2"
                  />
                </Col>
                <Col xs={24} lg={8} className="text-center">
                  <AppButton buttons={communityButton} btnWrapperClassName="mt-0 pb-3" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={1} lg={3}></Col>
        </Row>
      </div>
      <div className="review my-10 mb-14">
        <Row>
          <Col xs={1} lg={3}></Col>
          <Col xs={22} lg={18}>
            <div className=" inline-block bg-[url('../src/assets/sales-site/icons/arrow-black.png')] bg-no-repeat bg-right-bottom pr-6 pb-3">
              <AppTitle
                title={reviewMainTitle}
                className="text-secondary-text font-medium text-4xl mt-9"
              />
              <AppTitle
                title={reviewMainTitle2}
                className="text-secondary-text font-medium text-4xl mb-9"
              />
            </div>
            <div>
              <Row>
                <Col xs={24} md={12}></Col>
                <Col xs={24} md={12} className="text-end">
                  <AppButton buttons={reviewButton} btnWrapperClassName="" />
                </Col>
              </Row>
            </div>
            <Row gutter={{ md: 24, lg: 16 }} className="items-end mt-3">
              {reviewData?.length &&
                reviewData?.slice(0, 3)?.map((singleReview: any, index: any) => (
                  <Col xs={24} md={12} lg={8}>
                    <AppReviewCard
                      outerDivClassName={`${index === 0 ? "py-14" : index === 1 ? "py-8" : "py-4"}`}
                      heading={singleReview?.reviewerName}
                      description={singleReview?.reviewerProfession}
                      imgSrc={singleReview?.reviewerProfile}
                      reviewDetail={singleReview?.review}
                      headingClassName={`${
                        index === 0 ? "text-base" : index === 1 ? "text-sm" : "text-xs"
                      }`}
                      descriptionClassName={`${
                        index === 0 ? "text-base" : index === 1 ? "text-sm" : "text-xs"
                      }`}
                      userImageClassName="p-1"
                      reviewDetailClassName={`pl-3 ${
                        index === 0 ? "text-base" : index === 1 ? "text-sm" : "text-xs"
                      }`}
                      size={50}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={1} lg={3}></Col>
        </Row>
      </div>
      <div className="download bg-[url('../src/assets/sales-site/images/home/waves.png')] py-6">
        <Row>
          <Col xs={1} lg={1}></Col>
          <Col xs={22} lg={21} className="text-center lg:text-start">
            <AppChildrenCard
              col1Lg={8}
              col2Lg={8}
              offsetLg={3}
              offsetMidLg={1}
              heading={appHeading}
              description={appDescription}
              setPositionClass={`mt-6`}
              headingClassName={"text-medium text-4xl"}
              descriptionClassName={"text-[#667085] text-base font-normal"}
              imgSrc={imgSrc}
              userImageClassName="p-1 w-full"
            >
              <div>
                <div className="flex items-center justify-center lg:justify-start my-4">
                  <QRCode value={qrCodeValue} />
                  <AppTitle
                    title={qrCodeTitle}
                    className="text-lg text-normal text-[#667085] ml-4"
                    Variant="span"
                  />
                </div>
                <Row gutter={6} className="justify-center lg:justify-start">
                  {button?.length &&
                    button?.map((x: any) => (
                      <Col>
                        <AppImageCard
                          userDetailsClassName="bg-black  rounded-xl p-2 mb-2"
                          heading={x?.heading}
                          description={x?.description}
                          imgSrc={x?.imgSrc}
                          // size="small"
                          headingClassName="text-['5px'] font-normal mb-0 text-white"
                          descriptionClassName="text-white text-xl mt-0"
                        />
                      </Col>
                    ))}
                </Row>
                <AppTitle
                  title={downloadTitle}
                  className="text-lg mt-5 text-normal text-[#667085]"
                />
              </div>
            </AppChildrenCard>
          </Col>
          <Col xs={1} lg={1}></Col>
        </Row>
      </div>
      <div className="blog my-10 lg:my-20">
        <Row>
          <Col xs={1} lg={1}></Col>
          <Col xs={22} lg={21}>
            <AppTitle title={blogTitle} className="text-base font-semibold text-primary" />
            <AppTitle
              title={blogSubTitle}
              className="text-3xl font-medium text-secondary-text text-primary mt-4"
            />
            <Row className="flex items-center justify-between">
              <Col md={12}>
                <AppTitle title={blogDescription} className="text-[#667085] text-xl font-normal" />
              </Col>
              <Col md={12} className="text-center md:text-end mt-3">
                <AppButton buttons={blogButton} btnWrapperClassName="mt-0 lg:mt-0" />
              </Col>
            </Row>
            <Row gutter={{ md: 24, lg: 32 }}>
              {blogPosts?.length &&
                blogPosts?.map((singleBlog: any) => (
                  <Col xs={24} md={12} lg={8}>
                    <AppChildrenCard
                      col1Lg={24}
                      col2Lg={24}
                      offsetLg={0}
                      heading={singleBlog?.heading}
                      description={singleBlog?.description}
                      subtitle={singleBlog?.subtitle}
                      setPositionClass={`mt-6`}
                      headingClassName={"text-semibold text-xs text-primary mt-3"}
                      descriptionClassName={"text-secondary-text text-xl font-medium w-full"}
                      subtitleClassName={"text-[#667085] text-base mb-4 w-full font-normal"}
                      userInfoClassName="ml-1 mr-0 lg:ml-1 lg:mr-0"
                      userImageClassName="p-1 w-full"
                      imageWrapperClassName="max-w-full"
                      imageDivClassName=""
                      imgSrc={singleBlog?.imgSrc}
                    >
                      <AppImageCard
                        heading={singleBlog?.name}
                        description={singleBlog?.date}
                        imgSrc={singleBlog?.userImg}
                        headingClassName="text-xs font-semibold mb-1 text-secondary-text"
                        descriptionClassName="text-[#667085] text-sm mt-0 font-normal"
                      />
                    </AppChildrenCard>
                  </Col>
                ))}
            </Row>
          </Col>

          <Col xs={1} lg={1}></Col>
        </Row>
      </div>
      <div className="faq my-10 lg:my-20 py-10 lg:py-20">
        <Row>
          <Col xs={1} lg={3}></Col>
          <Col xs={22} lg={18}>
            <div className="text-center mt-30">
              <AppTitle
                title={faqHeading}
                className="text-secondary-text text-4xl font-medium w-full"
              />
              <AppTitle
                title={faqTitle}
                className="text-[#667085] my-4 text-xl font-normal w-full"
              />
            </div>
            <div className="my-6">
              {!!accordianData?.length &&
                accordianData?.map((item: any) => {
                  return (
                    <div key={item.key}>
                      <AppAccordion
                        item={item?.data}
                        UnActiveIcon={UnActiveIcon}
                        ActiveIcon={ActiveIcon}
                      />
                    </div>
                  );
                })}
            </div>
          </Col>
          <Col xs={1} lg={3}></Col>
        </Row>
      </div>
    </>
  );
};
