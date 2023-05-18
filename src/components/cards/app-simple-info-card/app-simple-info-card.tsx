import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";
import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";

export const AppSimpleInfoCard = (props: any) => {
  const {
    heading,
    imgSrc,
    description,
    onCardClick,
    setActiveClass,
    subtitle,
    subtitleColor,
    userImageClassName,
    size,
    userDetailsClassName,
    col1Xs = 5,
    col2Xs = 15,
    col3Xs,
    col1Sm = 5,
    col2Sm = 15,
    col3Sm,
    col1Md = 3,
    col2Md = 20,
    col3Md,
    col1Lg = 5,
    col2Lg = 17,
    col3Lg,
    col1Xl = 3,
    col2Xl = 19,
    col3Xl,
  } = props;
  const userImageClass = twMergeClass(
    `bg-white text-primary border-primary p-2 ${userImageClassName}`
  );
  const userDetailsClass = twMergeClass(
    `mx-3 mb-2 pb-5 px-0 sm:px-3 flex font-medium ${userDetailsClassName} ${setActiveClass}`
  );
  return (
    <UserDetailCard
      onCardClick={(e: any) => onCardClick?.(e)}
      userDetailsClassName={userDetailsClass}
      userInfoClassName="ml-3"
      userImage={imgSrc}
      // icon={imgSrc}
      imageDivClassName={"text-center"}
      subtitle={subtitle}
      size={size ?? 45}
      userImageClassName={userImageClass}
      heading={heading}
      headingClassName="text-sm font-bold text-primary-text"
      description={description}
      descriptionClassName="text-xs font-medium text-primary-text opacity: 0.6 my-0.5"
      subtitleClassName={`text-xs font-medium text-primary-text opacity: 0.6 my-0.5 ${subtitleColor}`}
      col1Xs={col1Xs}
      col1Md={col1Md}
      col2Xs={col2Xs}
      col2Md={col2Md}
      col3Xs={col3Xs}
      col3Md={col3Md}
      col1Lg={col1Lg}
      col2Lg={col2Lg}
      col3Lg={col3Lg}
      col1Xl={col1Xl}
      col2Xl={col2Xl}
      col3Xl={col3Xl}
      col1Sm={col1Sm}
      col2Sm={col2Sm}
      col3Sm={col3Sm}
    />
  );
};
