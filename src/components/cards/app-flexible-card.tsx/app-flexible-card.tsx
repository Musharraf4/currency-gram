import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";
import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";

export const AppFlexibleCard = (props: any) => {
  const { heading, imgSrc, description, onCardClick, setActiveClass, userImageClassName, shape } =
    props;
  const userDetailsClass = twMergeClass(
    `bg-white rounded-2xl p-4 cursor-pointer my-2 flex-nowrap ${setActiveClass}`
  );
  return (
    <UserDetailCard
      heading={heading}
      description={description}
      userDetailsClassName={userDetailsClass}
      userInfoClassName="flex flex-col justify-center"
      headingClassName="font-medium text-[#182D64] mb-2 text-[22px]  text-class"
      descriptionClassName="text-[#7581A1] font-normal text-[18px]  text-class"
      imageDivClassName="mr-4"
      userImageClassName={`p-4 ${userImageClassName}`}
      userImage={imgSrc}
      size={64}
      shape={shape}
      onCardClick={(e: any) => onCardClick?.(e)}
    />
  );
};
