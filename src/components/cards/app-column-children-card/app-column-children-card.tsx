import { AppChildrenCard } from "../app-children-card/app-children-card";
import { AppSimpleInfoCard } from "../app-simple-info-card/app-simple-info-card";

export const AppColumnChildrenCard = (props: any) => {
  const {
    heading,
    imgSrc,
    description,
    onCardClick,
    userImageClassName,
    descriptionClassName,
    extraChild,
    setPositionClass,
    headingClassName,
    subtitle2,
    subtitle,
    subtitleClassName,
    subtitle2ClassName,
    imageWrapperClassName,
  } = props;
  return (
    <AppChildrenCard
      col1Lg={24}
      col2Lg={24}
      offsetLg={0}
      heading={heading}
      description={description}
      setPositionClass={`mt-6 items-center ${setPositionClass}`}
      headingClassName={headingClassName}
      descriptionClassName={descriptionClassName}
      subtitleClassName={subtitleClassName}
      subtitle2ClassName={subtitle2ClassName}
      userImageClassName={userImageClassName}
      imageWrapperClassName={imageWrapperClassName}
      imgSrc={imgSrc}
      subtitle2={subtitle2}
      subtitle={subtitle}
      onCardClick={(e: any) => onCardClick?.(e)}
    >
      {extraChild?.length &&
        extraChild?.map((child: any) => (
          <AppSimpleInfoCard
            subtitleColor={child?.subtitle === "Active Now" ? "text-success" : "text-grey"}
            userDetailsClassName={child?.userDetailsClassName}
            heading={child?.heading}
            description={child?.description}
            userImageClassName={child?.userImageClassName}
            imgSrc={child?.imgSrc}
            subtitle={child?.subtitle}
            size={35}
            onCardClick={(e: any) => child?.linkPath?.(e, child)}
          />
        ))}
    </AppChildrenCard>
  );
};
