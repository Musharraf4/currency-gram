import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";
import "./app-primary-card.scss";

export const AppPrimaryCard = (props: any) => {
  const { heading, imgSrc, description, onCardClick, setActiveClass, userImageClassName } = props;
  return (
    <UserDetailCard
      heading={heading}
      description={description}
      userDetailsClassName={`border group bg-primary-background rounded-2xl p-4 hover:bg-primary-hover cursor-pointer flex-nowrap ${setActiveClass} `}
      userInfoClassName="flex flex-col justify-center"
      headingClassName="font-semibold text-primary-text mb-2 text-base group-hover:text-white text-class"
      descriptionClassName="text-primary-text font-normal text-sm group-hover:text-white text-class"
      imageDivClassName="mr-4"
      userImageClassName={` p-4 group-hover:brightness-0 group-hover:invert ${userImageClassName}`}
      userImage={imgSrc}
      size={64}
      onCardClick={(e: any) => onCardClick?.(e)}
      avatarStyle={{ backgroundColor: "rgba(217, 217, 217, 0.22)" }}
    />
  );
};
