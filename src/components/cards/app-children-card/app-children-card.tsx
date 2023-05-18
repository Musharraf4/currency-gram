import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";
import { ChildrenDetailCardSkeleton } from "../../../skeleton/children-detail-card/children-detail-card";

export const AppChildrenCard = (props: any) => {
  const {
    heading,
    imgSrc,
    description,
    onCardClick,
    userImageClassName,
    descriptionClassName,
    setPositionClass,
    headingClassName,
    children,
    col1Lg,
    col2Lg,
    col1Xs,
    col2Xs,
    offsetLg,
    subtitle,
    subtitleClassName,
    userInfoClassName,
    imageDivClassName,
    imageWrapperClassName,
    subtitle2,
    subtitle2ClassName,
    offsetMidXs,
    offsetMidLg,
  } = props;

  const headingClass = twMergeClass(
    `font-semibold text-secondary-text my-2 text-3xl ${headingClassName}`
  );
  const descriptionClass = twMergeClass(
    `text-[#7581A1] font-normal text-lg my-2  text-class ${descriptionClassName}`
  );
  const subtitleClass = twMergeClass(
    `text-[#7581A1] font-normal text-[18px] my-2 text-class ${subtitleClassName}`
  );
  const subtitle2Class = twMergeClass(
    `text-primary-text font-normal text-xs my-2 ${subtitle2ClassName}`
  );
  const userImageClass = twMergeClass(`w-full ${userImageClassName}`);
  const userInfoClass = twMergeClass(`flex flex-col justify-center ${userInfoClassName}`);
  const imageWrapperClass = twMergeClass(`max-w-sm text-center  mx-auto ${imageWrapperClassName}`);
  const imageDivClass = twMergeClass(`my-2 ${imageDivClassName}`);

  return (
    <ChildrenDetailCardSkeleton
      col1Xs={col1Xs ?? 24}
      col2Xs={col2Xs ?? 24}
      col1Lg={col1Lg}
      col2Lg={col2Lg}
      offsetLg={offsetLg}
      offsetMidXs={offsetMidXs}
      offsetMidLg={offsetMidLg}
      heading={heading}
      imagePreview={false}
      description={description}
      subtitle={subtitle}
      subtitle2={subtitle2}
      subtitle2ClassName={subtitle2Class}
      subtitleClassName={subtitleClass}
      userDetailsClassName={`mt-6 items-center ${setPositionClass}`}
      imageDivClassName={imageDivClass}
      imageWrapperClassName={imageWrapperClass}
      userInfoClassName={userInfoClass}
      headingClassName={headingClass}
      descriptionClassName={descriptionClass}
      userImageClassName={userImageClass}
      userImage={imgSrc}
      onCardClick={(e: any) => onCardClick?.(e)}>
      {children}
    </ChildrenDetailCardSkeleton>
  );
};
