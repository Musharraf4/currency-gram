import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";
import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";
export const AppImageCard = (props: any) => {
  const {
    heading,
    description,
    imgSrc,
    headingClassName,
    descriptionClassName,
    size,
    shape,
    onHeadingClick,
    imageDivClassName,
    userDetailsClassName,
    subtitle,
    userImageClassName,
    userInfoClassName,
  } = props;

  const headingClass = twMergeClass(
    `font-semibold text-primary-text text-xl leading-none mb-1 ${headingClassName}`
  );
  const descriptionClass = twMergeClass(
    `text-grey font-bold text-xs leading-none ${descriptionClassName}`
  );
  const imageDivClass = twMergeClass(`ml-1 ${imageDivClassName}`);
  const userDetailsClass = twMergeClass(`flex items-center ${userDetailsClassName}`);
  const userImageClass = twMergeClass(`border-solid-orange ${userImageClassName}`);
  const userInfoClass = twMergeClass(`ml-3 ${userInfoClassName}`);
  return (
    <UserDetailCard
      heading={heading}
      description={description}
      userDetailsClassName={userDetailsClass}
      userInfoClassName={userInfoClass}
      headingClassName={headingClass}
      descriptionClassName={descriptionClass}
      imageDivClassName={imageDivClass}
      subtitle={subtitle}
      userImageClassName={userImageClass}
      userImage={imgSrc}
      size={size ?? "large"}
      shape={shape}
      onHeadingClick={(e: any) => onHeadingClick?.(e)}
    />
  );
};
