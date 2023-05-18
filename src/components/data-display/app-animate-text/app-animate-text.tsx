import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";
import { ChildrenDetailCardSkeleton } from "../../../skeleton/children-detail-card/children-detail-card";
export const AppAnimateText = (props: any) => {
  const {
    textToAnimante,
    mainText,
    subText,
    imgSrc,
    userImageClassName,
    arrow,
    imageWrapperClassName,
    imageDivClassName,
  } = props;
  const userImageClass = twMergeClass(`${userImageClassName}`);
  const imageWrapperClass = twMergeClass(`max-w-sm text-center  mx-auto ${imageWrapperClassName}`);
  const imageDivClass = twMergeClass(`text-center lg:text-end ${imageDivClassName}`);
  return (
    <ChildrenDetailCardSkeleton
      col1Xs={24}
      col2Xs={24}
      col1Lg={11}
      col2Lg={11}
      offsetXs={0}
      offsetLg={0}
      offsetMidXs={1}
      heading={mainText}
      description={
        <>
          <span className="inline-block text-6xl bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00D4FF]  pt-2 h-24 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-primary will-change-transform">
            {textToAnimante}
          </span>
          <span className="inline-block w-[3px] ml-2 mb-2 bg-primary h-24 md:mb-4 text-primary animate-cursor will-change-transform"></span>
        </>
      }
      userDetailsClassName={`flex-row-reverse`}
      userInfoClassName="flex flex-col justify-center"
      headingClassName="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00D4FF] text-class"
      descriptionClassName="bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00D4FF]  font-normal text-6xl  text-class"
      imageDivClassName={imageDivClass}
      userImageClassName={userImageClass}
      userImage={imgSrc}
      // size={64}
      imageWrapperClassName={imageWrapperClass}
      imagePreview={false}
      subtitle={subText}
      subtitleClassName="text-[#888888] text-base font-normal mb-5"
      //   onCardClick={(e: any) => onCardClick?.(e)}
    >
      <div className="text-end animate-scale">
        <img src={arrow} alt="" />
      </div>
    </ChildrenDetailCardSkeleton>
  );
};
