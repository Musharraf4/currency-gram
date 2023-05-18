import { AppChildrenCard } from "../app-children-card/app-children-card";
import { AppFlexibleCard } from "../app-flexible-card.tsx/app-flexible-card";

export const AppListCard = (props: any) => {
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
    subtitleClassName,
    subtitle,
    col1Lg,
    col2Lg,
    offsetLg,
    offsetMidLg,
  }: any = props;
  return (
    <AppChildrenCard
      col1Lg={col1Lg ?? 10}
      col2Lg={col2Lg ?? 10}
      offsetLg={offsetLg ?? 1}
      offsetMidLg={offsetMidLg ?? 2}
      heading={heading}
      imagePreview={false}
      description={description}
      subtitle={subtitle}
      subtitleClassName={subtitleClassName}
      setPositionClass={`${setPositionClass}`}
      headingClassName={headingClassName}
      descriptionClassName={descriptionClassName}
      userImageClassName={userImageClassName}
      imgSrc={imgSrc}
      onCardClick={(e: any) => onCardClick?.(e)}
    >
      {extraChild?.length &&
        extraChild?.map((child: any) => (
          <AppFlexibleCard
            heading={child?.heading}
            description={child?.description}
            imgSrc={child?.imgSrc}
            userImageClassName={child?.userImageClassName}
            shape={child?.shape}
            setActiveClass={child?.setActiveClass}
          />
        ))}
    </AppChildrenCard>
  );
};
