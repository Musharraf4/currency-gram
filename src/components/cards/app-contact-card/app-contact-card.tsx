import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";

export const AppContactCard = (props: any) => {
  const {
    heading,
    imgSrc,
    description,
    onCardClick,
    setActiveClass,
    userImageClassName,
    subtitleClassName,
    subtitle,
  } = props;
  console.log(props);
  return (
    <UserDetailCard
      heading={heading}
      description={description}
      userDetailsClassName={`bg-[#e6e9ef40] rounded-2xl p-4  flex-col cursor-pointer flex-nowrap ${setActiveClass}`}
      userInfoClassName="flex flex-col justify-center"
      headingClassName="font-medium text-primary-text mb-2 text-xl mt-7 text-class"
      descriptionClassName="text-primary font-normal text-base mt-2 text-class"
      subtitle={subtitle}
      subtitleClassName={`text-primary font-normal text-base font-medium mt-3 mb-4 text-class ${subtitleClassName}`}
      imageDivClassName="mr-4"
      userImageClassName={`p-2 bg-primary ${userImageClassName}`}
      userImage={imgSrc}
      size={40}
      shape={"square"}
      onCardClick={(e: any) => onCardClick?.(e)}
    />
  );
};
